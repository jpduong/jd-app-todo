import {
  Box,
  ButtonBase,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { COLORS } from "../constants";
import React from "react";
import { Filter } from "types";

interface Props {
  total: number;
  filter: Filter;
  onFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

export const FilterBar = (props: Props) => {
  const { total, filter, onFilter } = props;
  const classes = useStyles();

  return (
    <Box p={1} bgcolor={COLORS.PURPLE} title="component-filterbar">
      <Grid container justify="space-between">
        <Grid item>
          <Typography variant="subtitle2" title="filterbar-total-text">
            Total: {total}
          </Typography>
        </Grid>
        <Grid item>
          <ButtonBase onClick={() => onFilter(Filter.All)}>
            <Typography
              title="filterbar-option"
              variant="subtitle2"
              className={`${filter === Filter.All && classes.activeFilter}`}
            >
              All
            </Typography>
          </ButtonBase>
          <ButtonBase onClick={() => onFilter(Filter.Active)}>
            <Typography
              title="filterbar-option"
              variant="subtitle2"
              className={`${classes.spacingText} ${
                filter === Filter.Active && classes.activeFilter
              }`}
            >
              Active
            </Typography>
          </ButtonBase>
          <ButtonBase onClick={() => onFilter(Filter.Completed)}>
            <Typography
              title="filterbar-option"
              variant="subtitle2"
              className={`${
                filter === Filter.Completed && classes.activeFilter
              }`}
            >
              Completed
            </Typography>
          </ButtonBase>
        </Grid>
      </Grid>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  spacingText: { marginLeft: theme.spacing(1), marginRight: theme.spacing(1) },
  activeFilter: {
    color: COLORS.LIGHT_BLUE,
  },
}));
