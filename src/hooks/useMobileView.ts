import { useMediaQuery, useTheme } from "@material-ui/core";

export const useMobileView = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

  return [isMobileView] as const;
};
