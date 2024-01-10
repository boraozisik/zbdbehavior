import {
  Button,
  Divider,
  SnackbarOrigin,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { TextFieldStyled } from "../../StyledComponents/TextFieldStyled";
import { grey, primary, secondary } from "../../../theme/themeColors";

type SendMailModalProps = {
  username: string;
  userSurname: string;
  email: string;
  handleClose: () => void;
  handleClickSnackbar: (newState: SnackbarOrigin) => () => void;
};

const SendMailModal = ({
  handleClose,
  userSurname,
  username,
  email,
  handleClickSnackbar,
}: SendMailModalProps) => {
  const [sendEmail, setSendEmail] = React.useState<string>(email);
  const [about, setAbout] = React.useState<string>(
    "Fixing Feedbacked Problems"
  );
  const [message, setMessage] = React.useState<string>(
    "We saw your feedback and..."
  );

  const handleEmailChange = (event: any) => {
    setSendEmail(event.target.value as string);
  };

  const handleAboutChange = (event: any) => {
    setAbout(event.target.value as string);
  };

  const handleMessageChange = (event: any) => {
    setMessage(event.target.value as string);
  };

  console.log("sendEmail", sendEmail);
  return (
    <Stack gap={2}>
      <Stack direction={"column"} gap={1}>
        <Stack
          direction={"row"}
          gap={1}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
        >
          <Typography variant="body1" className="italic">
            {`${username} ${userSurname}'s Contact Mail:`}
          </Typography>

          <Typography variant="caption" sx={{ mt: 0.5 }}>
            {email}
          </Typography>
        </Stack>
      </Stack>
      <Divider />
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
      >
        <Typography variant="body1" className="italic" sx={{ mb: 1 }}>
          {`Contact With ${username} ${userSurname}`}
        </Typography>
        <TextFieldStyled
          label="E-Mail"
          value={sendEmail}
          onChange={handleEmailChange}
          fullWidth
        />
        <TextFieldStyled
          label="About"
          value={about}
          onChange={handleAboutChange}
          fullWidth
        />
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
          disabled={message === ""}
        >
          Send Mail
        </Button>
      </Stack>
    </Stack>
  );
};

export default SendMailModal;
