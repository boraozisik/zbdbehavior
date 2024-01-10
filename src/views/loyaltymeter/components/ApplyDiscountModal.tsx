import {
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import {
  companyProducts,
  specialGifts,
  specialOffers,
} from "../../../constants/constants";
import { grey, primary, secondary } from "../../../theme/themeColors";
import { TextFieldStyled } from "../../StyledComponents/TextFieldStyled";

type ApplyDiscountModalProps = {
  username?: string;
  userSurname?: string;
  handleClose: () => void;
  handleClickSnackbar: (newState: {
    verticalDisc: "top" | "bottom";
    horizontalDisc: "left" | "center" | "right";
  }) => () => void;
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

const ApplyDiscountModal = ({
  handleClickSnackbar,
  handleClose,
  userSurname,
  username,
}: ApplyDiscountModalProps) => {
  const [offer, setOffer] = React.useState("");
  const [discount, setDiscount] = React.useState("");
  const [products, setProducts] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent) => {
    setOffer(event.target.value as string);
  };

  const handleChangeProducts = (event: SelectChangeEvent<typeof products>) => {
    const {
      target: { value },
    } = event;
    setProducts(typeof value === "string" ? value.split(",") : value);
  };

  const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscount(e.target.value as string);
  };

  return (
    <div>
      <Stack
        direction={"row"}
        gap={1}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography variant="body1">
          {`Win Back the User: ${username} ${userSurname}`}
        </Typography>
      </Stack>
      <Stack
        direction={"column"}
        gap={2}
        alignItems={"center"}
        justifyContent={"center"}
        mt={3}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gift</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={offer}
            label="Gift"
            onChange={handleChange}
          >
            {specialGifts.map((offer) => (
              <MenuItem value={offer.id}>{offer.offer}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextFieldStyled
          label={offer === "1" ? "%?" : offer === "2" ? "$?" : "Gift Amount"}
          value={discount}
          type="number"
          InputProps={{ inputProps: { min: 0 } }}
          onChange={handleDiscountChange}
          fullWidth
          disabled={offer === ""}
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
              verticalDisc: "top",
              horizontalDisc: "center",
            })}
            disabled={offer === "" || discount === ""}
          >
            Give a Gift
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default ApplyDiscountModal;
