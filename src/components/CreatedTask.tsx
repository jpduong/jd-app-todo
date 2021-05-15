import { Grid, IconButton, makeStyles, TextField } from "@material-ui/core";
import { ClearRounded, RadioButtonUncheckedRounded } from "@material-ui/icons";
import checkIcon from "assets/icons/icon-check.svg";
import React from "react";
import { Status, Task } from "types";
import { COLORS } from "../constants";
import { PrioritySelectInput } from "./PrioritySelectInput";

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
  const classes = useStyles();

  const isCompletedTask = status === Status.Completed;

  return (
    <Grid container justify="space-between" className={classes.container}>
      <Grid item>
        <Grid container alignItems="center">
          <IconButton onClick={onToggleStatus}>
            {status === Status.Active ? (
              <RadioButtonUncheckedRounded />
            ) : (
              <div className={classes.checkedCircleContainer}>
                <img src={checkIcon} alt="checked icon" />
              </div>
            )}
          </IconButton>
          <TextField
            multiline
            value={name}
            inputProps={
              (isCompletedTask && {
                style: {
                  color: COLORS.DARK_GRAY_BLUE,
                },
              }) ||
              {}
            }
            onChange={(e) =>
              onUpdateTaskProperty(id, { name: e.target.value } as Task)
            }
            className={`${isCompletedTask && classes.completedText}`}
          />
        </Grid>
      </Grid>
      <Grid item>
        <PrioritySelectInput
          value={priority}
          onChange={(e) =>
            onUpdateTaskProperty(id, { priority: e.target.value } as Task)
          }
        />
        <IconButton onClick={onDeleteTask}>
          <ClearRounded />
        </IconButton>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    borderBottom: `1px solid ${COLORS.VERY_DARK_GRAY_BLUE_1}`,
  },
  completedText: {
    textDecoration: "line-through",
    color: COLORS.DARK_GRAY_BLUE,
  },
  checkedCircleContainer: {
    height: 24,
    width: 24,
    borderRadius: "50%",
    background: "linear-gradient(135deg,#57ddff, #c058f3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
