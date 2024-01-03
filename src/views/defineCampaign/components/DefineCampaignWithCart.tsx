import {
  Box,
  Button,
  Divider,
  Snackbar,
  SnackbarOrigin,
  Stack,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";
import { TextFieldStyled } from "../../StyledComponents/TextFieldStyled";
import { grey, primary, secondary } from "../../../theme/themeColors";

type DefineCampaignWithCartProps = {
  username: string;
  userSurname: string;
  cartData: string[];
  cartDifferenceData: string[];
  handleClose: () => void;
  handleClickSnackbar: (newState: SnackbarOrigin) => () => void;
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const DefineCampaignWithCart = ({
  username,
  userSurname,
  cartData,
  cartDifferenceData,
  handleClose,
  handleClickSnackbar,
}: DefineCampaignWithCartProps) => {
  const [products, setProducts] = React.useState<string[]>([]);
  const [campaignAmount, setCampaignAmount] = React.useState<string>("");

  const handleChange = (event: SelectChangeEvent<typeof products>) => {
    const {
      target: { value },
    } = event;
    setProducts(typeof value === "string" ? value.split(",") : value);
  };

  const handleAmountChange = (event: any) => {
    setCampaignAmount(event.target.value as string);
  };

  return (
    <div>
      <Stack direction={"column"} gap={3}>
        <Stack
          direction={"row"}
          gap={1}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography variant="body1">
            {`${username} ${userSurname}'s cart:`}
          </Typography>
          <Stack direction={"row"}>
            {cartData.map((t) => (
              <Typography variant="caption" sx={{ mt: 0.5 }}>
                {t + ","}
              </Typography>
            ))}
          </Stack>
        </Stack>
        <Divider />
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="multiple-checkbox-label">Product</InputLabel>
          <Select
            fullWidth
            labelId="multiple-checkbox-label"
            id="multiple-checkbox"
            multiple
            disabled={cartData.length > 2}
            value={products}
            onChange={handleChange}
            input={<OutlinedInput label="Product" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {cartDifferenceData.map((product) => (
              <MenuItem key={product} value={product}>
                <Checkbox checked={products.indexOf(product) > -1} />
                <ListItemText primary={product} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextFieldStyled
          label="Campaign Amount ( ?% )"
          value={campaignAmount}
          type="number"
          InputProps={{ inputProps: { min: 0 } }}
          onChange={handleAmountChange}
          fullWidth
        />
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"flex-end"}
          gap={1}
        >
          <Button
            variant="outlined"
            component="label"
            className="font-semibold italic"
            sx={{
              color: grey.textBlack,
              borderColor: grey.main,
              textTransform: "capitalize",
              "&:hover": {
                borderColor: secondary.main,
              },
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            className="font-semibold italic"
            variant="contained"
            sx={{
              backgroundColor: primary[900],
              "&:hover": {
                bgcolor: primary.main,
              },
              textTransform: "capitalize",
            }}
            onClick={handleClickSnackbar({
              vertical: "top",
              horizontal: "center",
            })}
            disabled={products.length === 0}
          >
            Define Campaign
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default DefineCampaignWithCart;
