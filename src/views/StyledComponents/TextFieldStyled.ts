import { TextField, styled, TextFieldProps } from "@mui/material";
import { grey, primary } from "../../theme/themeColors";

export const TextFieldStyled = styled(TextField)<TextFieldProps>(
  ({ theme }) => ({
    "& .MuiOutlinedInput-input": {
      fontWeight: 500,
      fontSize: 13,
      color: grey.textBlack,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: grey.main,
    },
    "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
      borderColor: primary.main,
    },
    "& .MuiInputLabel-root": {
      fontWeight: 500,
      fontSize: 13,
      color: grey.main,
    },
    "& .MuiInputLabel-root.Mui-focused": { fontWeight: 600 },
    "& .MuiSvgIcon-root": { color: grey.main },
  })
);
