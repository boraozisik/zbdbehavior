import { Card, styled } from "@mui/material";

export const ModalStyled = styled(Card)(({ theme }) => ({
  top: "50%",
  left: "55%",
  maxWidth: 650,
  minWidth: 650,
  maxHeight: 700,
  position: "absolute",
  padding: "1.5rem",
  boxShadow: theme.shadows[2],
  transform: "translate(-50%, -50%)",
  width: "100%",
  [theme.breakpoints.down(325)]: {
    maxWidth: "100%",
  },
}));
