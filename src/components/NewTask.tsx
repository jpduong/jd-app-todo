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
import { generateRandomId, validateTextInput } from "utils";
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
      id: generateRandomId(),
      status: Status.Active,
      createdAt: new Date(),
    };

    onAddTask(task);
    resetName();
    resetPriority();
    return setError(undefined);
  };

  return (
    <Box p={1} bgcolor={COLORS.PURPLE} component={Paper}>
      <Grid container justify="space-between" alignItems="center">
        <TextField placeholder="Create a new todo..." {...bindName} multiline />
        <Grid item>
          <PrioritySelectInput {...bindPriority} />
          <IconButton onClick={handleSubmit}>
            <AddRounded />
          </IconButton>
        </Grid>
      </Grid>
      {error && <Typography color="error">{error}</Typography>}
    </Box>
  );
};
