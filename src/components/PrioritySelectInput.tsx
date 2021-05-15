import { Select, MenuItem, Typography } from "@material-ui/core";
import { COLORS } from "../constants";
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
      <MenuItem value={Priority.Low}>
        <Typography style={{ color: COLORS.GREEN }}>Low</Typography>
      </MenuItem>
      <MenuItem value={Priority.Normal}>
        <Typography style={{ color: COLORS.YELLOW }}>Normal</Typography>
      </MenuItem>
      <MenuItem value={Priority.Important}>
        <Typography style={{ color: COLORS.ORANGE }}>Important</Typography>
      </MenuItem>
    </Select>
  );
};
