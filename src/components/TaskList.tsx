import React from "react";
import { Task } from "types";
import { CreatedTask } from "./CreatedTask";

interface Props {
  tasks: Task[];
  onDeleteTask: (taskId: Task["id"]) => void;
  onToggleStatus: (taskId: Task["id"]) => void;
  onUpdateTaskProperty: (id: Task["id"], prop: Task) => void;
}

export const TaskList = (props: Props) => {
  const { tasks, onDeleteTask, onToggleStatus, onUpdateTaskProperty } = props;

  return (
    <div>
      {tasks.map((task) => (
        <CreatedTask
          key={task.id}
          onDeleteTask={() => onDeleteTask(task.id)}
          {...task}
          onToggleStatus={() => onToggleStatus(task.id)}
          onUpdateTaskProperty={onUpdateTaskProperty}
        />
      ))}
    </div>
  );
};
