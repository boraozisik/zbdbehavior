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
import { Feedback } from "./DisloyalUserTable";
import FeedbackIcon from "@mui/icons-material/Feedback";

type Props = {
  username: string;
  userSurname: string;
  averages: number[];
  handleClose: () => void;
  feedbacks: Feedback[];
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
  handleClose,
  userSurname,
  username,
  feedbacks,
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
    <Stack gap={3}>
      <Stack direction={"column"} gap={1}>
        <Stack
          direction={"row"}
          gap={1}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
        >
          <Typography variant="body1" className="italic">
            {`${username} ${userSurname}'s Average Spend:`}
          </Typography>

          <Typography variant="caption" sx={{ mt: 0.5 }}>
            {averages[0]}
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          gap={1}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
        >
          <Typography variant="body1" className="italic">
            {`${username} ${userSurname}'s Average Purchaces:`}
          </Typography>

          <Typography variant="caption" sx={{ mt: 0.5 }}>
            {averages[1]}
          </Typography>
        </Stack>
        <Divider />
      </Stack>

      <Stack>
        <Typography variant="h6" className="italic">
          {`${username} ${userSurname}'s Feedbacks:`}
        </Typography>
        <Stack mt={1}>
          {feedbacks.map((feedback: Feedback, index: any) => (
            <div key={index}>
              {Object.entries(feedback).map(([product, description]) => (
                <div key={product}>
                  <Typography variant="body1" className="underline italic">
                    {product}:
                  </Typography>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    gap={1}
                    ml={4}
                    mt={1}
                    mb={1}
                  >
                    <FeedbackIcon
                      sx={{
                        color: primary.main,
                        height: "18px",
                        width: "18px",
                      }}
                    />
                    <Typography variant="caption" className="italic">
                      {description}
                    </Typography>
                  </Stack>
                </div>
              ))}
            </div>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OfferOpportunityModal;
