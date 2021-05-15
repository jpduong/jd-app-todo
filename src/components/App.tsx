import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { SortRounded } from "@material-ui/icons";
import backgroundDesktopImg from "assets/images/bg-desktop-dark.jpg";
import backgroundMobileImg from "assets/images/bg-mobile-dark.jpg";
import { FilterBar } from "components/FilterBar";
import { useSelectInput } from "hooks/useSelectInput";
import { orderBy } from "lodash";
import { mockData } from "mockData";
import React, { useState } from "react";
import "styles/App.css";
import { Filter, OrderArgs, Status, Task } from "types";
import { NewTask } from "./NewTask";
import { SortSelectInput, SortOption, sortOptions } from "./SortSelectInput";
import { TaskList } from "./TaskList";

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>(mockData);
  const [filter, setFilter] = useState<Filter>(Filter.All);
  const [firstSort, bindFirstSort] = useSelectInput<SortOption>("name_asc");
  const [secondSort, bindSecondSort] = useSelectInput<SortOption>("");
  const classes = useStyles();

  const handleAddTask = (task: Task) => setTasks([...tasks, task]);

  const handleDeleteTask = (taskId: Task["id"]) =>
    setTasks(tasks.filter((task) => task.id !== taskId));

  const handleToggleStatus = (taskId: Task["id"]) =>
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status:
                task.status === Status.Active
                  ? Status.Completed
                  : Status.Active,
            }
          : task
      )
    );

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
  const fieldOrders: OrderArgs[] = [];

  [firstSort, secondSort].forEach((sort) => {
    const option = sortOptions.find((option) => option.value === sort);
    if (!option || !option.value) {
      return;
    }

    fieldNames.push(option.field);
    fieldOrders.push(option.value.split("_")[1] as OrderArgs);
  });

  const filteredAndSortedTasks: Task[] = orderBy(
    filteredTasks,
    fieldNames,
    fieldOrders
  );

  return (
    <Box className={classes.rootContainer} title="component-app">
      <Container maxWidth={"lg"}>
        <Box pt={8} pb={6}>
          <Typography variant="h4">TODO</Typography>
        </Box>
        <Grid>
          <Box mb={4}>
            <NewTask onAddTask={handleAddTask} />
          </Box>
          <TaskList
            tasks={filteredAndSortedTasks}
            onDeleteTask={handleDeleteTask}
            onToggleStatus={handleToggleStatus}
            onUpdateTaskProperty={updateTaskById}
          >
            <>
              <FilterBar
                total={filteredAndSortedTasks.length}
                filter={filter}
                onFilter={setFilter}
              />
              <Grid container className={classes.sortContainer}>
                <SortRounded />
                <SortSelectInput {...bindFirstSort} />
                <SortSelectInput {...bindSecondSort} />
              </Grid>
            </>
          </TaskList>
        </Grid>
      </Container>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    backgroundImage: `url(${backgroundMobileImg})`,
    [theme.breakpoints.up("sm")]: {
      backgroundImage: `url(${backgroundDesktopImg})`,
      backgroundSize: "auto",
    },
    backgroundSize: "contain",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
  },
  sortContainer: {
    columnGap: theme.spacing(2),
    padding: theme.spacing(1),
  },
  completedText: {
    textDecoration: "line-through",
  },
}));
