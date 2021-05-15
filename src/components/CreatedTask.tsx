import {
  Box,
  Grid,
  IconButton,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import {
  ClearRounded,
  DoneRounded,
  RadioButtonUncheckedRounded,
} from "@material-ui/icons";
import { COLORS } from "index";
import React from "react";
import { Priority, Status, Task } from "types";

interface Props extends Task {
  onDeleteTask: () => void;
  onToggleStatus: () => void;
  onUpdateTaskProperty: (id: Task["id"], prop: Task) => void;
}

export const CreatedTask = (props: Props) => {
  const {
    id,
    name,
    onDeleteTask,
    onToggleStatus,
    status,
    priority,
    onUpdateTaskProperty,
  } = props;
  const classes = useStyles(0);

  return (
    <Box p="20px" bgcolor={COLORS.PURPLE}>
      <Grid container justify="space-between">
        <IconButton onClick={onToggleStatus}>
          {status === Status.Active ? (
            <RadioButtonUncheckedRounded />
          ) : (
            <DoneRounded />
          )}
        </IconButton>
        <TextField
          value={name}
          onChange={(e) =>
            onUpdateTaskProperty(id, { name: e.target.value } as Task)
          }
          className={`${status === Status.Completed && classes.completedText}`}
        />
        <Select
          value={priority}
          onChange={(e) =>
            onUpdateTaskProperty(id, { priority: e.target.value } as Task)
          }
        >
          <MenuItem value={Priority.Low}>Low</MenuItem>
          <MenuItem value={Priority.Normal}>Normal</MenuItem>
          <MenuItem value={Priority.Important}>Important</MenuItem>
        </Select>
        <IconButton onClick={onDeleteTask}>
          <ClearRounded />
        </IconButton>
      </Grid>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  completedText: {
    textDecoration: "line-through",
  },
}));
