import { Box, Container } from "@material-ui/core";
import { FilterBar } from "components/FilterBar";
import { useSelectInput } from "hooks/useSelectInput";
import { orderBy } from "lodash";
import { mockData } from "mockData";
import React, { useState } from "react";
import "styles/App.css";
import { Filter, OrderParams, Status, Task } from "types";
import { NewTask } from "./NewTask";
import { SortBar, SortOption, sortOptions } from "./SortBar";
import { TaskList } from "./TaskList";

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>(mockData);
  const [filter, setFilter] = useState<Filter>(Filter.All);
  const [firstSort, bindFirstSort] = useSelectInput<SortOption>("name_asc");
  const [secondSort, bindSecondSort] = useSelectInput<SortOption>("");

  const handleAddTask = (task: Task) => setTasks([...tasks, task]);

  const handleDeleteTask = (taskId: Task["id"]) =>
    setTasks([...tasks.filter((task) => task.id !== taskId)]);

  const handleToggleStatus = (taskId: Task["id"]) =>
    setTasks([
      ...tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status:
                task.status === Status.Active
                  ? Status.Completed
                  : Status.Active,
            }
          : task
      ),
    ]);

  const updateTaskById = (id: Task["id"], property: Task) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, ...property } : task
    );

    return setTasks(updatedTasks);
  };

  let filteredTasks: Task[] = [];
  switch (filter) {
    case Filter.All:
      filteredTasks = tasks;
      break;
    case Filter.Active:
      filteredTasks = tasks.filter((task) => task.status === Status.Active);
      break;
    case Filter.Completed:
      filteredTasks = tasks.filter((task) => task.status === Status.Completed);
      break;
    default:
      break;
  }

  const fieldNames: string[] = [];
  const fieldOrders: OrderParams[] = [];

  [firstSort, secondSort].forEach((sort) => {
    const option = sortOptions.find((option) => option.value === sort);
    if (!option || !option.value) {
      return;
    }

    fieldNames.push(option.field);
    fieldOrders.push(option.value.split("_")[1] as OrderParams);
  });

  const sortedTasks: Task[] = orderBy(filteredTasks, fieldNames, fieldOrders);

  return (
    <Container maxWidth="sm">
      <Box mb={4}>
        <NewTask onAddTask={handleAddTask} />
      </Box>
      <TaskList
        tasks={sortedTasks}
        onDeleteTask={handleDeleteTask}
        onToggleStatus={handleToggleStatus}
        onUpdateTaskProperty={updateTaskById}
      />
      <FilterBar
        total={sortedTasks.length}
        filter={filter}
        onFilter={setFilter}
      />
      <SortBar {...bindFirstSort} />
      <SortBar {...bindSecondSort} />
      <pre>{JSON.stringify(tasks, undefined, 2)}</pre>
      <pre>{JSON.stringify(firstSort, undefined, 2)}</pre>
    </Container>
  );
};
