import { Select, MenuItem } from "@material-ui/core";
import React from "react";
import { Priority } from "types";

interface Props {
  value: Priority;
  onChange: (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => void;
}

export const PrioritySelectInput = (props: Props) => {
  return (
    <Select {...props}>
      <MenuItem value={Priority.Low}>Low</MenuItem>
      <MenuItem value={Priority.Normal}>Normal</MenuItem>
      <MenuItem value={Priority.Important}>Important</MenuItem>
    </Select>
  );
};