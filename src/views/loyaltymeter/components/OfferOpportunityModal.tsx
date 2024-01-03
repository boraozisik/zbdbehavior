import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SnackbarOrigin,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { specialOffers } from "../../../constants/constants";

type Props = {
  username?: string;
  userSurname?: string;
  averages?: number[];
  handleClose: () => void;
  handleClickSnackbar: (newState: SnackbarOrigin) => () => void;
};

const OfferOpportunityModal = ({
  averages,
  handleClickSnackbar,
  handleClose,
  userSurname,
  username,
}: Props) => {
  const [offer, setOffer] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setOffer(event.target.value as string);
  };
  console.log("offer", offer);
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
          <Typography variant="body1">
            Offer Opportunity to All Disloyal Users
          </Typography>
          <Divider />
        </Stack>
      )}
      <FormControl fullWidth sx={{ mt: 3 }}>
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
    </div>
  );
};

export default OfferOpportunityModal;
