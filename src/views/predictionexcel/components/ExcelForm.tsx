import CheckIcon from "@mui/icons-material/Check";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  CircularProgress,
  Fab,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import * as XLSX from "xlsx";
import NothingFound from "../../../components/app/NothingFound";
import { primary, secondary, success } from "../../../theme/themeColors";
import GetTemplate from "./GetTemplate";
import { get } from "lodash";
import {
  DataGrid,
  GridColDef,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";

type Props = {};

type ExcelTemplate = {
  ID: string;
  DATE: string;
  PRODUCTNAME: string;
  COUNT: number;
};

const ExcelForm = (props: Props) => {
  const [excelData, setExcelData] = useState<ExcelTemplate[]>([]);
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

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "productName",
      headerName: "Product Name",
      flex: 1,
    },
    {
      field: "count",
      headerName: "Count",
      flex: 1,
    },
  ];

  const rows = excelData.map((data: ExcelTemplate, index: number) => ({
    id: index + 1,
    date: data.DATE,
    productName: data.PRODUCTNAME,
    count: data.COUNT,
  }));

  function CustomToolbar() {
    return (
      <GridToolbarContainer
        sx={{ display: "flex", justifyContent: "left", height: 50 }}
      >
        <GridToolbarColumnsButton sx={{ color: primary.main }} />
        <GridToolbarFilterButton sx={{ color: primary.main }} />
        <GridToolbarDensitySelector sx={{ color: primary.main }} />

        <GridToolbarQuickFilter sx={{ ml: "auto", width: "15%" }} />
      </GridToolbarContainer>
    );
  }

  console.log("excelDataMain", excelData);

  const uploadFile = async (e: any) => {};

  const calculateStockNeedByIncreaseAmount = (excelData: ExcelTemplate[]) => {
    const newArr = [];
    let firstThreeMonthsCount = 0;
    let lastThreeMonthsCount = 0;

    const middleIndex = Math.floor(excelData.length / 2);
    const firstPartArray = excelData.slice(0, middleIndex);
    const secondPartArray = excelData.slice(middleIndex);

    for (let i = 0; i < firstPartArray.length; i++) {
      lastThreeMonthsCount += firstPartArray[i].COUNT;
    }

    for (let i = 0; i < secondPartArray.length; i++) {
      firstThreeMonthsCount += secondPartArray[i].COUNT;
    }

    if (
      lastThreeMonthsCount - firstThreeMonthsCount <
      Math.floor((firstThreeMonthsCount * 10) / 100)
    ) {
      for (let i = 0; i < excelData.length; i++) {
        newArr.push({
          ID: String(i + 1),
          DATE: get(excelData[i], "DATE"),
          PRODUCTNAME: get(excelData[i], "PRODUCTNAME"),
          COUNT:
            get(excelData[i], "COUNT") -
            Math.floor((get(excelData[i], "COUNT") * 15) / 100),
        });
      }
    } else if (
      lastThreeMonthsCount - firstThreeMonthsCount >
      Math.floor((firstThreeMonthsCount * 10) / 100)
    ) {
      for (let i = 0; i < excelData.length; i++) {
        newArr.push({
          ID: String(i + 1),
          DATE: get(excelData[i], "DATE"),
          PRODUCTNAME: get(excelData[i], "PRODUCTNAME"),
          COUNT:
            get(excelData[i], "COUNT") +
            Math.floor((get(excelData[i], "COUNT") * 15) / 100),
        });
      }
    } else {
      for (let i = 0; i < excelData.length; i++) {
        newArr.push({
          ID: String(i + 1),
          DATE: get(excelData[i], "DATE"),
          PRODUCTNAME: get(excelData[i], "PRODUCTNAME"),
          COUNT: get(excelData[i], "COUNT"),
        });
      }
    }

    return newArr;
  };

  const applySalaryWeekIncrease = (excelData: ExcelTemplate[]) => {
    const newArr = [];
    for (let i = 0; i < excelData.length; i++) {
      if (
        Number(get(excelData[i], "DATE").split("/")[0]) > 14 &&
        Number(get(excelData[i], "DATE").split("/")[0]) < 22
      ) {
        newArr.push({
          ID: String(i + 1),
          DATE: get(excelData[i], "DATE"),
          PRODUCTNAME: get(excelData[i], "PRODUCTNAME"),
          COUNT:
            get(excelData[i], "COUNT") +
            Math.floor((get(excelData[i], "COUNT") * 40) / 100),
        });
      } else {
        newArr.push({
          ID: String(i + 1),
          DATE: get(excelData[i], "DATE"),
          PRODUCTNAME: get(excelData[i], "PRODUCTNAME"),
          COUNT: get(excelData[i], "COUNT"),
        });
      }
    }

    return newArr;
  };

  const applyIfNovemberDiscount = (excelData: ExcelTemplate[]) => {
    const newArr = [];
    for (let i = 0; i < excelData.length; i++) {
      const splittedDate = excelData[i].DATE.split("/");
      if (Number(splittedDate[1]) === 11) {
        newArr.push({
          ID: String(i + 1),
          DATE: get(excelData[i], "DATE"),
          PRODUCTNAME: get(excelData[i], "PRODUCTNAME"),
          COUNT:
            get(excelData[i], "COUNT") +
            Math.floor((get(excelData[i], "COUNT") * 70) / 100),
        });
      } else {
        newArr.push({
          ID: String(i + 1),
          DATE: get(excelData[i], "DATE"),
          PRODUCTNAME: get(excelData[i], "PRODUCTNAME"),
          COUNT: get(excelData[i], "COUNT"),
        });
      }
    }

    return newArr;
  };

  const predictNextSixMonth = (excelData: ExcelTemplate[]) => {
    const nextSixMonthsArray: ExcelTemplate[] = [];
    const dataAfterStockArrange = calculateStockNeedByIncreaseAmount(excelData);

    console.log("dataAfterStockArrange", dataAfterStockArrange);

    for (let index = 0; index < dataAfterStockArrange.length; index++) {
      let splittedDate;

      if (index === 0) {
        splittedDate = dataAfterStockArrange[0].DATE.split("/");
      } else {
        splittedDate = nextSixMonthsArray[index - 1].DATE.split("/");
      }

      splittedDate[0] = String(Number(splittedDate[0]) + 1);

      if (Number(splittedDate[0]) > 30) {
        splittedDate[0] = String(1);
        splittedDate[1] = String(Number(splittedDate[1]) + 1);
        if (Number(splittedDate[1]) > 12) {
          splittedDate[1] = String(1);
        }
      }

      if (Number(splittedDate[0]) === 1 && Number(splittedDate[1]) === 1) {
        splittedDate[2] = String(Number(splittedDate[2]) + 1);
      }
      console.log(`${index}`, dataAfterStockArrange[index].COUNT);
      nextSixMonthsArray.push({
        ID: String(index + 1),
        DATE: splittedDate.join("/"),
        PRODUCTNAME: dataAfterStockArrange[index].PRODUCTNAME,
        COUNT: dataAfterStockArrange[index].COUNT,
      });
    }

    console.log("nextSixMonthsArray", nextSixMonthsArray);

    const dataAfterSalaryWeeks = applySalaryWeekIncrease(nextSixMonthsArray);

    console.log("dataAfterSalaryWeeks", dataAfterSalaryWeeks);

    const dataAfterNovemberDiscount =
      applyIfNovemberDiscount(dataAfterSalaryWeeks);

    console.log("dataAfterNovemberDiscount", dataAfterNovemberDiscount);

    setExcelData(dataAfterNovemberDiscount);
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
      for (let i = 0; i < jsonData.length; i++) {
        excelData.push({
          ID: String(get(jsonData[i], "ID")),
          DATE: String(get(jsonData[i], "DATE")),
          PRODUCTNAME: String(get(jsonData[i], "PRODUCT NAME")),
          COUNT: Number(get(jsonData[i], "COUNT")),
        });
      }

      console.log("json data", jsonData);
    });

    predictNextSixMonth(excelData);
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
      {excelData.length > 0 ? (
        <Grid container padding={1}>
          <Grid item xs={12}>
            <DataGrid
              rows={rows}
              columns={columns}
              components={{ Toolbar: CustomToolbar }}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 20,
                  },
                },
              }}
              sx={{
                boxShadow: 5,
                border: 1,
                borderColor: "#D6EAF8",
                "& .MuiDataGrid-row:hover": {
                  background: "#EBF5FB",
                },
                "& .MuiDataGrid-cell:hover": {
                  color: primary.main,
                },
                ".MuiDataGrid-columnHeader": {
                  backgroundColor: "#D6EAF8",
                  color: secondary.main,
                  fontWeight: "bold",
                },
                ".MuiDataGrid-columnSeparator": {
                  color: primary.main,
                },
              }}
              pageSizeOptions={[10, 20, 50, 100]}
              disableRowSelectionOnClick
            />
          </Grid>
        </Grid>
      ) : (
        <NothingFound />
      )}
    </Stack>
  );
};

export default ExcelForm;
