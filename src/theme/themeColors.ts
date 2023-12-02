import { alpha } from "@mui/material";

const primaryMain = "#6C63FF";

export const primary = {
  dark: "#5C4F8B",
  light: alpha(primaryMain, 0.18),
  main: primaryMain,
  100: alpha(primaryMain, 0.08),
  200: alpha(primaryMain, 0.2),
  300: alpha(primaryMain, 0.3),
  400: alpha(primaryMain, 0.4),
  500: alpha(primaryMain, 0.5),
  700: alpha(primaryMain, 0.7),
  800: alpha(primaryMain, 0.8),
  900: alpha(primaryMain, 0.9),
};

const secondaryMain = "#FF6C90";

export const secondary = {
  light: alpha(secondaryMain, 0.18),
  main: secondaryMain,
  dark: "#AD4D63",
  100: alpha(secondaryMain, 0.08),
  200: alpha(secondaryMain, 0.2),
  300: alpha(secondaryMain, 0.3),
  400: alpha(secondaryMain, 0.4),
};

export const error = {
  light: "#ef5350",
  main: "#FF316F",
  dark: "#B72136",
};

export const success = {
  main: "#4CAF50",
  dark: "#388E3C",
};

export const warning = {
  main: "#FFA500",
  dark: "#FF8C00",
};

export const info = {
  main: "#4169E1",
  dark: "#191970",
};
