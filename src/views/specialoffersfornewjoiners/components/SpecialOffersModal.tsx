import {
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Dayjs } from "dayjs";
import { specialOffers } from "../../../constants/constants";

type Props = {};

type SpecialOffersModalProps = {
  username?: string;
  userSurname?: string;
};

const SpecialOffersModal = ({
  userSurname,
  username,
}: SpecialOffersModalProps) => {
  const [date, setDate] = useState<Dayjs | null>();
  const [offer, setOffer] = React.useState("");

  const handleDateChange = (date: Dayjs | null) => {
    setDate(date);
  };

  const formatDate = (date: Dayjs | null) => {
    return date ? date.format("DD/MM/YYYY") : "";
  };

  const handleChangeOffer = (event: SelectChangeEvent) => {
    setOffer(event.target.value as string);
  };

  console.log("offer", offer);

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
      <Grid
        container
        xs={12}
        sx={{ alignItems: "center", justifyContent: "center" }}
        spacing={1}
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
    </>
  );
};

export default SpecialOffersModal;
