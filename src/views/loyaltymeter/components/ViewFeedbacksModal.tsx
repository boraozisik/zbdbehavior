import FeedbackIcon from "@mui/icons-material/Feedback";
import { Divider, Stack, Typography } from "@mui/material";
import { primary } from "../../../theme/themeColors";
import { Feedback } from "./DisloyalUserTable";

type Props = {
  username: string;
  userSurname: string;
  averages: number[];
  handleClose: () => void;
  feedbacks: Feedback[];
};

const ViewFeedbacksModal = ({
  averages,
  handleClose,
  userSurname,
  username,
  feedbacks,
}: Props) => {
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

export default ViewFeedbacksModal;
