import { Button, Stack } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Dayjs } from "dayjs";
import React from "react";
import XLSX from "sheetjs-style";
import { primary } from "../../../theme/themeColors";
import { TextFieldStyled } from "../../StyledComponents/TextFieldStyled";
import { FormData } from "./GetTemplate";

type Props = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

type ExcelTemplate = {
  ID: string;
  DATE: string;
  PRODUCTNAME: string;
  COUNT: number | null;
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

const GetTemplateForm = ({ formData, setFormData }: Props) => {
  console.log("formData", formData);

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, productName: e.target.value });
  };

  const handleDateChange = (date: Dayjs | null) => {
    setFormData({ ...formData, dateValue: date });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    prepareTemplate(formData);

    console.log("Gönderilen Veri:", formData);
  };

  const prepareTemplate = (formData: FormData) => {
    const templateArray: ExcelTemplate[] = [];

    for (let i = 0; i < 30; i++) {
      const currentDate = (formData.dateValue as Dayjs).subtract(i, "day"); // formData.dateValue'dan gelen tarih, i gün önceki tarih

      const day = currentDate.format("DD");
      const month = currentDate.format("MM");
      const year = currentDate.format("YYYY");

      const formattedDate = `${day}/${month}/${year}`;

      templateArray.push({
        ID: String(i + 1),
        DATE: formattedDate,
        PRODUCTNAME: formData.productName,
        COUNT: null,
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
    <div>
      <form onSubmit={handleSubmit}>
        <Stack
          direction={"column"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          gap={2}
        >
          <TextFieldStyled
            label="Product Name"
            value={formData.productName}
            onChange={handleTextFieldChange}
            fullWidth
          />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={10}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="End Date"
                  value={formData.dateValue}
                  onChange={handleDateChange}
                  sx={{ width: "full" }}
                />
              </DemoContainer>
            </LocalizationProvider>
            <Button
              type="submit"
              className="font-semibold italic"
              variant="contained"
              sx={{
                width: "170px",
                backgroundColor: primary[900],
                "&:hover": {
                  bgcolor: primary.main,
                },
                textTransform: "capitalize",
              }}
            >
              Download Template
            </Button>
          </Stack>
        </Stack>
      </form>
    </div>
  );
};

export default GetTemplateForm;
