import React, { useState } from "react";
import UsersData from "../../users.json";
import {
  DataGrid,
  GridColDef,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import {
  Alert,
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Snackbar,
  SnackbarOrigin,
  Stack,
  Tooltip,
} from "@mui/material";
import { primary, secondary } from "../../../theme/themeColors";
import { ModalStyled } from "../../StyledComponents/ModalStyled";
import SpecialOffersModal from "./SpecialOffersModal";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";

type Props = {};

interface MonthlySpend {
  [key: string]: {
    [key: string]: number;
  };
}

interface State extends SnackbarOrigin {
  openBar: boolean;
}

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  joinedAt: string;
  cart: string[];
  monthly_spend: MonthlySpend[];
  purchasesPerMonth: MonthlySpend[];
}

const NewUsersTable = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [openForAll, setOpenForAll] = useState(false);
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

  const handleOpenForAll = () => setOpenForAll(true);

  const handleCloseForAll = () => {
    setOpenForAll(false);
  };

  const handleSpecialOfferClick = (row: any) => {
    setName(row?.firstName);
    setSurname(row?.lastName);
  };

  const getRecentUsers = (usersData: User[]) => {
    const currentDateTime = new Date();
    const oneMonthAgo = new Date(currentDateTime);
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    const recentUsers = [];

    for (const user of usersData) {
      // Tarih formatını gün, ay, yıl olarak ayrıştır
      const [day, month, year] = user.joinedAt.split("/");

      // Parse edilen değerleri sayıya çevir
      const parsedDay = parseInt(day, 10);
      const parsedMonth = parseInt(month, 10);
      const parsedYear = parseInt(year, 10);

      // JavaScript'te ay 0 ile başlar, bu nedenle ayı bir eksiltiyoruz
      const joinedAtDate = new Date(parsedYear, parsedMonth - 1, parsedDay);

      if (!isNaN(joinedAtDate.getTime()) && joinedAtDate >= oneMonthAgo) {
        recentUsers.push(user);
      }
    }

    return recentUsers;
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
      field: "email",
      headerName: "E-mail",
      flex: 1,
    },
    {
      field: "joinedAt",
      headerName: "Joined At",
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
              handleSpecialOfferClick(params.row);

              handleOpen();
            }}
          >
            <CampaignOutlinedIcon sx={{ color: primary.main }} />
          </IconButton>
        </Tooltip>
      ),
    },
  ];

  const rows = getRecentUsers(UsersData).map((data: any, index: number) => ({
    id: index + 1,
    firstName: data.first_name,
    lastName: data.last_name,
    email: data.email,
    joinedAt: data.joinedAt,
  }));

  function CustomToolbar() {
    return (
      <GridToolbarContainer
        sx={{ display: "flex", justifyContent: "left", height: 50 }}
      >
        <GridToolbarColumnsButton sx={{ color: primary.main }} />
        <GridToolbarFilterButton sx={{ color: primary.main }} />
        <GridToolbarDensitySelector sx={{ color: primary.main }} />

        <Stack direction={"row"} ml={"auto"} width={"25%"} gap={2}>
          <GridToolbarQuickFilter />
          <Button
            className="font-semibold italic"
            variant="contained"
            sx={{
              backgroundColor: primary[900],
              "&:hover": {
                bgcolor: primary.main,
              },
              textTransform: "capitalize",
              height: 30,
              width: 300,
            }}
            onClick={() => {
              handleOpenForAll();
            }}
          >
            Offer for All Newcomers
          </Button>
        </Stack>
      </GridToolbarContainer>
    );
  }
  console.log("UsersData", getRecentUsers(UsersData));
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-location-report"
        aria-describedby="modal-location-report"
      >
        <ModalStyled>
          <SpecialOffersModal
            userSurname={surname}
            username={name}
            handleClose={handleClose}
            handleClickSnackbar={handleClickSnackbar}
          />
        </ModalStyled>
      </Modal>
      <Modal
        open={openForAll}
        onClose={handleCloseForAll}
        aria-labelledby="modal-offer"
        aria-describedby="modal-offer"
      >
        <ModalStyled>
          <SpecialOffersModal
            handleClose={handleCloseForAll}
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
            Offer and Message sent successfully !
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default NewUsersTable;
