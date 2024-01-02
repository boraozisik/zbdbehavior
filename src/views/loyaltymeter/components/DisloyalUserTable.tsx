import EditNoteIcon from "@mui/icons-material/EditNote";
import {
  Alert,
  Box,
  Grid,
  IconButton,
  Modal,
  Snackbar,
  SnackbarOrigin,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { useState } from "react";
import { primary, secondary } from "../../../theme/themeColors";
import { ModalStyled } from "../../StyledComponents/ModalStyled";
import UsersData from "../../users.json";

import { set } from "lodash";

type Props = {};

interface MonthlySpend {
  [key: string]: {
    [key: string]: number;
  };
}
interface User {
  id: number;
  first_name: string;
  last_name: string;
  cart: string[];
  monthly_spend: MonthlySpend[];
  purchasesPerMonth: MonthlySpend[];
}

interface State extends SnackbarOrigin {
  openBar: boolean;
}

const companyProducts = [
  "Macbook Pro 14",
  "Samsung Galaxy Watch",
  "JBL Clip 4",
];

const DisloyalUserTable = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [cartDifference, setCartDifference] = useState<any | null>(null);
  const [cartData, setCartData] = useState<any | null>(null);
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [state, setState] = useState<State>({
    openBar: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, openBar } = state;

  const handleClickSnackbar = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, openBar: true });
  };

  const handleCloseSnackbar = () => {
    setState({ ...state, openBar: false });
  };

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
  };

  const findAverageSpendForUser = (user: User) => {
    let averageSpend = 0;

    const monthlySpendArray = user.monthly_spend[0]["2023"];
    const monthsWithSpend = Object.keys(monthlySpendArray).filter(
      (month) => monthlySpendArray[month] > 0
    );
    const totalSpend = monthsWithSpend.reduce(
      (sum, month) => sum + monthlySpendArray[month],
      0
    );
    averageSpend =
      monthsWithSpend.length > 0 ? totalSpend / monthsWithSpend.length : 0;

    // return Math.floor(averageSpend);
    return averageSpend;
  };

  const findAveragePurchacesForUser = (user: User) => {
    let averagePurchaces = 0;

    const monthlyPurchacesArray = user.purchasesPerMonth[0]["2023"];
    const monthsWithPurchaces = Object.keys(monthlyPurchacesArray).filter(
      (month) => monthlyPurchacesArray[month] > 0
    );
    const totalPurchaces = monthsWithPurchaces.reduce(
      (sum, month) => sum + monthlyPurchacesArray[month],
      0
    );
    averagePurchaces =
      monthsWithPurchaces.length > 0
        ? totalPurchaces / monthsWithPurchaces.length
        : 0;

    // return Math.floor(averagePurchaces);
    return averagePurchaces;
  };

  console.log("AVVVGGGGGG", findAverageSpendForUser(UsersData[0]));

  console.log("PURRRRRRRRR", findAveragePurchacesForUser(UsersData[0]));

  const findDisloyalUsers = (usersData: User[]) => {
    const disloyalUsers = [];

    usersData.map((user: User) => {
      let averageSpend = 0;
      let averagePurchaces = 0;

      const monthlySpendArray = user.monthly_spend[0]["2023"];
      const monthsWithSpend = Object.keys(monthlySpendArray).filter(
        (month) => monthlySpendArray[month] > 0
      );
      const totalSpend = monthsWithSpend.reduce(
        (sum, month) => sum + monthlySpendArray[month],
        0
      );
      averageSpend =
        monthsWithSpend.length > 0 ? totalSpend / monthsWithSpend.length : 0;

      const monthlyPurchacesArray = user.purchasesPerMonth[0]["2023"];
      const monthsWithPurchaces = Object.keys(monthlyPurchacesArray).filter(
        (month) => monthlyPurchacesArray[month] > 0
      );
      const totalPurchaces = monthsWithPurchaces.reduce(
        (sum, month) => sum + monthlyPurchacesArray[month],
        0
      );
      averagePurchaces =
        monthsWithPurchaces.length > 0
          ? totalPurchaces / monthsWithPurchaces.length
          : 0;

      console.log("averageSpend", averageSpend);

      console.log("averagePurchaces", averagePurchaces);
    });
  };

  findDisloyalUsers(UsersData);

  const handleDefineCampaignClick = (row: any) => {
    const difference = companyProducts.filter(
      (item) => !row?.cart.includes(item)
    );

    setCartDifference(difference);
    setCartData(row?.cart);
    setName(row?.firstName);
    setSurname(row?.lastName);
  };

  const columns: GridColDef[] = [
    {
      field: "firstName",
      headerName: "First Name",
      flex: 1,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      flex: 1,
    },
    {
      field: "monthlySpend",
      headerName: "Avg Monthly Spend",
      flex: 1,
    },
    {
      field: "monthlyPurchaces",
      headerName: "Avg Purchaces Per Month",
      flex: 1,
    },
    {
      field: "id",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => (
        <Tooltip title="Offer a special opportunity" placement="top">
          <IconButton
            aria-label="offer-opp"
            onClick={() => {
              handleDefineCampaignClick(params.row);

              handleOpen();
            }}
          >
            <EditNoteIcon sx={{ color: primary.main }} />
          </IconButton>
        </Tooltip>
      ),
    },
  ];

  const rows = UsersData.map((data: any, index: number) => ({
    id: index + 1,
    firstName: data.first_name,
    lastName: data.last_name,
    monthlySpend: findAverageSpendForUser(data),
    monthlyPurchaces: findAveragePurchacesForUser(data),
  }));

  function CustomToolbar() {
    return (
      <GridToolbarContainer
        sx={{ display: "flex", justifyContent: "left", height: 50 }}
      >
        <GridToolbarColumnsButton sx={{ color: primary.main }} />
        <GridToolbarFilterButton sx={{ color: primary.main }} />
        <GridToolbarDensitySelector sx={{ color: primary.main }} />

        <Stack direction={"row"} ml={"auto"} width={"15%"}>
          <GridToolbarQuickFilter />
        </Stack>
      </GridToolbarContainer>
    );
  }

  console.log("userdata", UsersData);
  return (
    <>
      <Grid container mt={8}>
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
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-location-report"
        aria-describedby="modal-location-report"
      >
        <ModalStyled>
          <DefineCampaignWithCart
            username={name}
            userSurname={surname}
            cartData={cartData}
            cartDifferenceData={cartDifference}
            handleClose={handleClose}
            handleClickSnackbar={handleClickSnackbar}
          />
        </ModalStyled>
      </Modal>
      <Box sx={{ width: 500 }}>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          autoHideDuration={4000}
          open={openBar}
          onClose={handleCloseSnackbar}
          key={vertical + horizontal}
        >
          <Alert severity="success" sx={{ width: "100%" }}>
            Campaign Defined Successfully !
          </Alert>
        </Snackbar>
      </Box> */}
    </>
  );
};

export default DisloyalUserTable;
