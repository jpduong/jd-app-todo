import { Box, Paper } from "@material-ui/core";
import { COLORS } from "../constants";
import React from "react";
import { Task } from "types";
import { CreatedTask } from "./CreatedTask";

interface Props {
  tasks: Task[];
  onDeleteTask: (taskId: Task["id"]) => void;
  onToggleStatus: (taskId: Task["id"]) => void;
  onUpdateTaskProperty: (id: Task["id"], prop: Task) => void;
  children: JSX.Element;
}

export const TaskList = (props: Props) => {
  const {
    tasks,
    onDeleteTask,
    onToggleStatus,
    onUpdateTaskProperty,
    children,
  } = props;

  return (
    <Box
      p={1}
      component={Paper}
      bgcolor={COLORS.PURPLE}
      title="component-tasklist"
    >
      {tasks.map((task) => (
        <CreatedTask
          key={task.id}
          onDeleteTask={() => onDeleteTask(task.id)}
          {...task}
          onToggleStatus={() => onToggleStatus(task.id)}
          onUpdateTaskProperty={onUpdateTaskProperty}
        />
      ))}
      {children}
    </Box>
  );
};
