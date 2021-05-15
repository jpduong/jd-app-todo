import { Select, MenuItem } from "@material-ui/core";
import React from "react";
import { Priority, SelectEvent } from "types";

interface Props {
  value: Priority;
  onChange: (e: SelectEvent) => void;
  title?: string;
}

export const PrioritySelectInput = (props: Props) => {
  return (
    <Select {...props} title="component-priorityselectfield">
      <MenuItem value={Priority.Low}>Low</MenuItem>
      <MenuItem value={Priority.Normal}>Normal</MenuItem>
      <MenuItem value={Priority.Important}>Important</MenuItem>
    </Select>
  );
};
