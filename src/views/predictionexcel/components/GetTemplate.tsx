import FileCopyIcon from "@mui/icons-material/FileCopy";
import { Button, Card, Modal, Stack, styled } from "@mui/material";
import { useState } from "react";
import XLSX from "sheetjs-style";
import { grey, secondary } from "../../../theme/themeColors";

type Props = {};

const ModalStyled = styled(Card)(({ theme }) => ({
  top: "50%",
  left: "55%",
  maxWidth: 650,
  minWidth: 650,
  maxHeight: 700,
  position: "absolute",
  padding: "1.5rem",
  boxShadow: theme.shadows[2],
  transform: "translate(-50%, -50%)",
  width: "100%",
  [theme.breakpoints.down(325)]: {
    maxWidth: "100%",
  },
}));

type ExcelTemplate = {
  ID: string;
  DATE: string;
  PRODUCTNAME: string;
  COUNT: number;
};

const TARGET_CELLS = [
  {
    cell: "A1",
    name: "ID",
  },
  {
    cell: "B1",
    name: "DATE",
  },
  {
    cell: "C1",
    name: "PRODUCT NAME",
  },
  {
    cell: "D1",
    name: "COUNT",
  },
];

const COLUMN_STYLES = [
  { column: "A", width: 10 },
  { column: "B", width: 20 },
  { column: "C", width: 30 },
  { column: "D", width: 20 },
];

const GetTemplate = (props: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const prepareTemplate = () => {
    const templateArray: ExcelTemplate[] = [];

    for (let i = 0; i < 30; i++) {
      let currentDate = new Date(); // Bugünün tarihi
      currentDate.setDate(currentDate.getDate() - i); // i gün önceki tarih

      let day = currentDate.getDate().toString().padStart(2, "0");
      let month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // months are zero-based
      let year = currentDate.getFullYear();

      let formattedDate = `${day}/${month}/${year}`;

      templateArray.push({
        ID: String(i + 1),
        DATE: formattedDate,
        PRODUCTNAME: "deneme",
        COUNT: 30,
      });
    }

    const workSheet = XLSX.utils.json_to_sheet(templateArray);

    TARGET_CELLS.forEach((cellAddress) => {
      workSheet[cellAddress.cell] = {
        v: cellAddress.name,
        s: {
          font: { bold: true },
          fill: {
            fgColor: { rgb: "D5F5E3" },
          },
          alignment: { horizontal: "center", vertical: "center" },
          border: {
            left: { style: "thin", color: "FFD5D5D5" },
          },
        },
      };
    });

    COLUMN_STYLES.forEach(({ column, width }) => {
      workSheet["!cols"] = workSheet["!cols"] || [];
      workSheet["!cols"].push({ wch: width });
    });

    const workBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workBook, workSheet, "Monthly_Sales");

    XLSX.writeFile(workBook, "ZBDBehavior_Excel_Template.xlsx", {
      cellDates: true,
      bookSST: true,
      cellStyles: true,
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
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          ></Stack>
          fsdfsdf
        </ModalStyled>
      </Modal>
    </>
  );
};

export default GetTemplate;
