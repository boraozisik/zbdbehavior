import CheckIcon from "@mui/icons-material/Check";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  CircularProgress,
  Fab,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import * as XLSX from "xlsx";
import NothingFound from "../../../components/app/NothingFound";
import { primary, success } from "../../../theme/themeColors";
import GetTemplate from "./GetTemplate";
import { get } from "lodash";

type Props = {};

type ExcelTemplate = {
  ID: string;
  DATE: string;
  PRODUCTNAME: string;
  COUNT: number;
};

const ExcelForm = (props: Props) => {
  const [uploadLoading, setLoading] = React.useState(false);
  const [uploadSuccess, setSuccess] = React.useState(false);
  const timer = React.useRef<number>();

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!uploadLoading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  const uploadFile = async (e: any) => {};

  const calculateStockNeedByIncreaseAmount = (excelData: ExcelTemplate[]) => {
    let firstThreeMonthsCount = 0;
    let lastThreeMonthsCount = 0;

    const middleIndex = Math.floor(excelData.length / 2);
    const firstPartArray = excelData.slice(0, middleIndex);
    const secondPartArray = excelData.slice(middleIndex);

    firstPartArray.map((data) => {
      lastThreeMonthsCount += data.COUNT;
    });

    secondPartArray.map((data) => {
      firstThreeMonthsCount += data.COUNT;
    });

    if (
      lastThreeMonthsCount - firstThreeMonthsCount <
      Math.floor((firstThreeMonthsCount * 10) / 100)
    ) {
      return "ReduceStock";
    } else if (
      lastThreeMonthsCount - firstThreeMonthsCount >
      Math.floor((firstThreeMonthsCount * 10) / 100)
    ) {
      return "IncreaseStock";
    } else {
      return "KeepStock";
    }
  };

  const applySalaryWeekIncrease = (excelData: ExcelTemplate[]) => {
    for (let i = 0; i < excelData.length; i++) {
      if (
        Number(get(excelData[i], "DATE").split("/")[0]) > 14 &&
        Number(get(excelData[i], "DATE").split("/")[0]) < 22
      ) {
        console.log("pddddd", Number(get(excelData[i], "DATE").split("/")[0]));
        console.log("paaaaa", get(excelData[i], "COUNT"));
        excelData[i].COUNT += Math.floor((excelData[i].COUNT * 40) / 100);
        console.log("paa222222", get(excelData[i], "COUNT"));
      }
    }

    return excelData;
  };

  const predictNextMonth = (excelData: ExcelTemplate[]) => {
    const predictData: ExcelTemplate[] = excelData;
    const increaseAmounts: number[] = [];

    const dataAfterSalaryWeeks = applySalaryWeekIncrease(excelData);

    const stockNeed = calculateStockNeedByIncreaseAmount(dataAfterSalaryWeeks);

    switch (stockNeed) {
      case "ReduceStock":
        increaseAmounts.push(-20);
        break;

      case "IncreaseStock":
        increaseAmounts.push(20);
        break;

      case "KeepStock":
        break;

      default:
        break;
    }

    console.log("stockNeed", stockNeed);
    console.log("predictData", predictData);
    console.log("increaseAmounts", increaseAmounts);
  };

  const selectFile = async (e: any) => {
    let excelData: ExcelTemplate[] = [];
    const file = e.target.files[0];
    console.log("file", e.target.files[0]);
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    console.log("workbook", workbook);
    workbook.SheetNames.map((worksheetName: string) => {
      const worksheet = workbook.Sheets[worksheetName];

      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      excelData = jsonData as ExcelTemplate[];
      console.log("json data", jsonData);
    });

    predictNextMonth(excelData);
  };

  return (
    <Stack direction={"column"} gap={10}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mt={6}
        mx={8}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
        >
          <TextField
            type="file"
            onChange={selectFile}
            sx={{ mb: 3, mt: 3 }}
          ></TextField>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ m: 1, position: "relative" }}>
              <Button
                className="font-semibold italic"
                variant="contained"
                sx={{
                  backgroundColor: primary[900],
                  "&:hover": {
                    bgcolor: primary.main,
                  },
                  textTransform: "capitalize",
                  ...(uploadSuccess && {
                    bgcolor: success.main,
                    "&:hover": {
                      bgcolor: success.dark,
                    },
                  }),
                }}
                disabled={uploadLoading}
                onClick={handleButtonClick}
              >
                Upload
              </Button>
              {uploadLoading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: success.main,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              )}
            </Box>
            <Box sx={{ m: 1, position: "relative" }}>
              <Fab
                aria-label="save"
                sx={{
                  backgroundColor: primary[900],
                  color: "white",
                  "&:hover": {
                    bgcolor: primary.main,
                  },
                  ...(uploadSuccess && {
                    bgcolor: success.main,
                    "&:hover": {
                      bgcolor: success.dark,
                    },
                  }),
                }}
                onClick={handleButtonClick}
              >
                {uploadSuccess ? <CheckIcon /> : <SaveIcon />}
              </Fab>
              {uploadLoading && (
                <CircularProgress
                  size={68}
                  sx={{
                    color: success.main,
                    position: "absolute",
                    top: -6,
                    left: -6,
                    zIndex: 1,
                  }}
                />
              )}
            </Box>
          </Box>
        </Stack>
        <Stack>
          <GetTemplate />
        </Stack>
      </Stack>
      <NothingFound />
    </Stack>
  );
};

export default ExcelForm;
