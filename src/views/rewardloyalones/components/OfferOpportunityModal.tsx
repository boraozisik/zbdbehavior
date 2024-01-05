import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  SnackbarOrigin,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { companyProducts, specialOffers } from "../../../constants/constants";
import { TextFieldStyled } from "../../StyledComponents/TextFieldStyled";
import { grey, primary, secondary } from "../../../theme/themeColors";

type Props = {
  username?: string;
  userSurname?: string;
  averages?: number[];
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

const OfferOpportunityModal = ({
  averages,
  handleClickSnackbar,
  handleClose,
  userSurname,
  username,
}: Props) => {
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
      {averages && userSurname && userSurname ? (
        <Stack direction={"column"} gap={1}>
          <Stack
            direction={"row"}
            gap={1}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography variant="body1">
              {`${username} ${userSurname}'s Average Spend:`}
            </Typography>

            <Typography variant="caption" sx={{ mt: 0.5 }}>
              {averages[0]}
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            gap={1}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography variant="body1">
              {`${username} ${userSurname}'s Average Purchaces:`}
            </Typography>

            <Typography variant="caption" sx={{ mt: 0.5 }}>
              {averages[1]}
            </Typography>
          </Stack>
          <Divider />
        </Stack>
      ) : (
        <Stack direction={"column"} gap={1}>
          <Typography variant="body1">Reward All Loyal Users</Typography>
          <Divider />
        </Stack>
      )}
      <Stack
        direction={"column"}
        gap={2}
        alignItems={"center"}
        justifyContent={"center"}
        mt={3}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Offer</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={offer}
            label="Age"
            onChange={handleChange}
          >
            {specialOffers.map((offer) => (
              <MenuItem value={offer.id}>{offer.offer}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {(offer === "3" || offer === "4") && (
          <FormControl sx={{ width: "100%" }}>
            <InputLabel id="multiple-checkbox-label">Product</InputLabel>
            <Select
              fullWidth
              labelId="multiple-checkbox-label"
              id="multiple-checkbox"
              multiple
              value={products}
              onChange={handleChangeProducts}
              input={<OutlinedInput label="Product" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {companyProducts.map((product) => (
                <MenuItem key={product} value={product}>
                  <Checkbox checked={products.indexOf(product) > -1} />
                  <ListItemText primary={product} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        <TextFieldStyled
          label={
            offer === "1" || offer === "3"
              ? "%?"
              : offer === "2" || offer === "4"
              ? "$?"
              : "Offer Amount"
          }
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
              vertical: "top",
              horizontal: "center",
            })}
            disabled={offer === "" || discount === ""}
          >
            Offer Opportunity
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default OfferOpportunityModal;
