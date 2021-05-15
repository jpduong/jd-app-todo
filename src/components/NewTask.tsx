import {
  Box,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { AddRounded } from "@material-ui/icons";
import { useSelectInput } from "hooks/useSelectInput";
import { useInput } from "hooks/useTextInput";
import { COLORS } from "index";
import React, { useState } from "react";
import { Priority, Status, Task } from "types";
import { generateRandomId, validateTextInput } from "utils";

interface Props extends Partial<Task> {
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
    <Box p="20px" bgcolor={COLORS.PURPLE}>
      <Grid container justify="space-between">
        <TextField placeholder="Create a new todo.." {...bindName} />
        <Select {...bindPriority}>
          <MenuItem value={Priority.Low}>Low</MenuItem>
          <MenuItem value={Priority.Normal}>Normal</MenuItem>
          <MenuItem value={Priority.Important}>Important</MenuItem>
        </Select>
        <Grid>
          <IconButton onClick={handleSubmit}>
            <AddRounded />
          </IconButton>
        </Grid>
      </Grid>
      {error && <Typography color="error">{error}</Typography>}
    </Box>
  );
};
