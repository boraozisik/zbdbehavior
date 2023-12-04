import FileCopyIcon from "@mui/icons-material/FileCopy";
import { Button, Modal } from "@mui/material";
import { Dayjs } from "dayjs";
import { useState } from "react";
import { grey, secondary } from "../../../theme/themeColors";
import { ModalStyled } from "../../StyledComponents/ModalStyled";
import GetTemplateForm from "./GetTemplateForm";

type Props = {};

export interface FormData {
  productName: string;
  dateValue: Dayjs | null;
}

const GetTemplate = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    productName: "",
    dateValue: null,
  });

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setFormData({
      productName: "",
      dateValue: null,
    });
  };

  return (
    <>
      <Button
        variant="outlined"
        component="label"
        className="font-semibold italic"
        sx={{
          fontSize: "16px",
          color: grey.textBlack,
          borderColor: grey.main,
          textTransform: "capitalize",
          "&:hover": {
            borderColor: secondary.main,
          },
        }}
        onClick={handleOpen}
        endIcon={
          <FileCopyIcon sx={{ height: 25, width: 25, color: secondary[800] }} />
        }
      >
        Get Excel Template
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-location-report"
        aria-describedby="modal-location-report"
      >
        <ModalStyled>
          <GetTemplateForm formData={formData} setFormData={setFormData} />
        </ModalStyled>
      </Modal>
    </>
  );
};

export default GetTemplate;
