import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  Grid,
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
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Dayjs } from "dayjs";
import { companyProducts, specialOffers } from "../../../constants/constants";
import { TextFieldStyled } from "../../StyledComponents/TextFieldStyled";
import { grey, primary, secondary } from "../../../theme/themeColors";

type SpecialOffersModalProps = {
  username?: string;
  userSurname?: string;
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

const SpecialOffersModal = ({
  userSurname,
  username,
  handleClose,
  handleClickSnackbar,
}: SpecialOffersModalProps) => {
  const [date, setDate] = useState<Dayjs | null>(null);
  const [offer, setOffer] = React.useState("");
  const [products, setProducts] = React.useState<string[]>([]);
  const [message, setMessage] = React.useState<string>(
    "This is a special and limited time offer..."
  );

  const handleDateChange = (date: Dayjs | null) => {
    const formattedDate = formatDate(date);
    console.log("formattedDate", formattedDate);
    if (formattedDate !== "Invalid Date") {
      setMessage(
        `This is a special and limited time offer until ${formattedDate}...`
      );
    }
    setDate(date);
  };

  const formatDate = (date: Dayjs | null) => {
    return date ? date.format("DD/MM/YYYY") : "";
  };

  const handleChangeOffer = (event: SelectChangeEvent) => {
    setOffer(event.target.value as string);
  };

  const handleChangeProducts = (event: SelectChangeEvent<typeof products>) => {
    const {
      target: { value },
    } = event;
    setProducts(typeof value === "string" ? value.split(",") : value);
  };

  const handleMessageChange = (event: any) => {
    setMessage(event.target.value as string);
  };

  console.log("offer", offer);

  console.log("products", products);

  console.log("date", formatDate(date));

  return (
    <>
      {userSurname && userSurname ? (
        <Stack direction={"column"} gap={1}>
          <Typography variant="body1">{`Special Offer for ${username} ${userSurname}:`}</Typography>
          <Divider />
        </Stack>
      ) : (
        <Stack direction={"column"} gap={1}>
          <Typography variant="body1">
            Special Offer for All Newcomers
          </Typography>
          <Divider />
        </Stack>
      )}
      <Stack direction={"column"} gap={2}>
        <Grid
          container
          xs={12}
          sx={{ alignItems: "center", justifyContent: "center" }}
          spacing={0.2}
        >
          <Grid item xs={5}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Validity Expiration"
                  value={date}
                  onChange={handleDateChange}
                  sx={{ width: "full" }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={7} mt={1}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Offer</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={offer}
                label="Age"
                onChange={handleChangeOffer}
              >
                {specialOffers.map((offer) => (
                  <MenuItem value={offer.id}>{offer.offer}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
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
          label="Message"
          value={message}
          onChange={handleMessageChange}
          fullWidth
          multiline
          maxRows={4}
        />
      </Stack>
      <Stack
        mt={2}
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
          disabled={
            message === "" ||
            ((offer === "3" || offer === "4") && products.length === 0) ||
            offer === "" ||
            date === null
          }
        >
          Send Offer and Message
        </Button>
      </Stack>
    </>
  );
};

export default SpecialOffersModal;
