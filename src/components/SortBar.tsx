import { makeStyles, MenuItem, Select } from "@material-ui/core";
import { COLORS } from "../constants";
import React from "react";

interface Props {
  value: string;
  onChange: (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => void;
}

export const sortOptions = [
  { field: "none", label: "None", value: "" },
  { field: "name", label: "Name (A to Z)", value: "name_asc" },
  { field: "name", label: "Name (Z to A)", value: "name_desc" },
  {
    field: "priority",
    label: "Priority (Lowest To Highest)",
    value: "priority_asc",
  },
  {
    field: "priority",
    label: "Priority (Highest to Lowest)",
    value: "priority_desc",
  },
] as const;

export type SortOption = typeof sortOptions[number]["value"];

export const SortBar = (props: Props) => {
  const classes = useStyles();

  return (
    <Select
      {...props}
      classes={{ root: classes.selectRoot, icon: classes.selectIcon }}
    >
      {sortOptions.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};

const useStyles = makeStyles((theme) => ({
  selectIcon: {
    color: COLORS.DARK_GRAY_BLUE,
  },
  spacingText: { marginLeft: theme.spacing(1), marginRight: theme.spacing(1) },
  activeFilter: {
    color: COLORS.LIGHT_BLUE,
  },
  selectRoot: {
    fontSize: 12,
    color: COLORS.DARK_GRAY_BLUE,
    [theme.breakpoints.up("sm")]: {
      fontSize: 14,
    },
  },
}));
