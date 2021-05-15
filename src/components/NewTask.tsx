import {
  Box,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { AddRounded } from "@material-ui/icons";
import { useSelectInput } from "hooks/useSelectInput";
import { useInput } from "hooks/useTextInput";
import React, { useState } from "react";
import { Priority, Status, Task } from "types";
import { generateUniqueId, validateTextInput } from "utils";
import { COLORS } from "../constants";
import { PrioritySelectInput } from "./PrioritySelectInput";

interface Props {
  onAddTask: (task: Task) => void;
}

export const NewTask = (props: Props) => {
  const { onAddTask } = props;
  const [error, setError] = useState<undefined | string>(undefined);
  const [name, bindName, resetName] = useInput();
  const [priority, bindPriority, resetPriority] = useSelectInput<Priority>(
    Priority.Normal
  );

  const handleSubmit = () => {
    const isValid = validateTextInput(name);

    if (!isValid) {
      return setError("Todo input is blank");
    }

    const task = {
      name,
      priority,
      id: generateUniqueId(),
      status: Status.Active,
      createdAt: new Date(),
    };

    onAddTask(task);
    resetName();
    resetPriority();
    return setError(undefined);
  };

  return (
    <Box
      p={1}
      bgcolor={COLORS.PURPLE}
      component={Paper}
      title="component-newtask"
    >
      <Grid container justify="space-between" alignItems="center">
        <Grid item xs={8}>
          <TextField
            placeholder="Create a new todo..."
            {...bindName}
            fullWidth
            multiline
            title="newtask-textfield"
            autoFocus
          />
        </Grid>
        <Grid item xs={4} container justify="flex-end">
          <PrioritySelectInput {...bindPriority} />
          <IconButton onClick={handleSubmit} title="newtask-submit-button">
            <AddRounded />
          </IconButton>
        </Grid>
      </Grid>
      {error && (
        <Typography color="error" title="newtask-error-text">
          {error}
        </Typography>
      )}
    </Box>
  );
};
