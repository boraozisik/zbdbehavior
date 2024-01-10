import EmailIcon from "@mui/icons-material/Email";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ShortcutIcon from "@mui/icons-material/Shortcut";
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
import ViewFeedbacksModal from "./ViewFeedbacksModal";
import SendMailModal from "./SendMailModal";
import ApplyDiscountModal from "./ApplyDiscountModal";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

type Props = {};

export interface Feedback {
  [product: string]: string;
}

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

interface StateDisc {
  openBarDisc: boolean;
  verticalDisc: "top" | "bottom";
  horizontalDisc: "left" | "center" | "right";
}

const findDisloyalUsers = (usersData: User[]) => {
  const disloyalUsers: User[] = [];

  const filteredUsers = usersData.filter(
    (data: User) =>
      data.monthly_spend.length > 0 && data.purchasesPerMonth.length > 0
  );

  filteredUsers.map((user: User) => {
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

    if (averageSpend < 300 || averagePurchaces < 1.5) {
      disloyalUsers.push(user);
    }
  });

  return disloyalUsers;
};

const DisloyalUserTable = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [openMail, setOpenMail] = useState(false);
  const [openDiscount, setOpenDiscount] = useState(false);
  const [averages, setAverages] = useState<number[]>([]);
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [state, setState] = useState<State>({
    openBar: false,
    vertical: "top",
    horizontal: "center",
  });

  const [stateDiscountSnack, setStateDiscountSnack] = useState<StateDisc>({
    openBarDisc: false,
    verticalDisc: "top",
    horizontalDisc: "center",
  });

  const { vertical, horizontal, openBar } = state;
  const { verticalDisc, horizontalDisc, openBarDisc } = stateDiscountSnack;

  const disloyalUsers = findDisloyalUsers(UsersData);

  const handleClickSnackbar = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, openBar: true });
  };

  const handleCloseSnackbar = () => {
    setState({ ...state, openBar: false });
  };

  const handleClickDiscountSnackbar =
    (newState: {
      verticalDisc: "top" | "bottom";
      horizontalDisc: "left" | "center" | "right";
    }) =>
    () => {
      setStateDiscountSnack({ ...newState, openBarDisc: true });
    };

  const handleCloseDiscountSnackbar = () => {
    setStateDiscountSnack({ ...stateDiscountSnack, openBarDisc: false });
  };

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenMail = () => setOpenMail(true);

  const handleCloseMail = () => {
    setOpenMail(false);
  };

  const handleOpenDiscount = () => setOpenDiscount(true);

  const handleCloseDiscount = () => {
    setOpenDiscount(false);
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

    return Math.floor(averageSpend);
    // return averageSpend;
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

    return Math.floor(averagePurchaces);
    // return averagePurchaces;
  };

  const handleOfferOppClick = (row: any) => {
    console.log("roww", row);
    const averagesData: number[] = [];
    averagesData.push(row.monthlySpend);
    averagesData.push(row.monthlyPurchaces);
    setName(row?.firstName);
    setSurname(row?.lastName);
    setAverages(averagesData);
    setFeedbacks(row.feedbacks);
  };

  const handleMailOppClick = (row: any) => {
    console.log("row", row);
    setName(row?.firstName);
    setSurname(row?.lastName);
    console.log("emaill", row?.email);
    setEmail(row?.email);
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
    // {
    //   field: "email",
    //   headerName: "E-Mail",
    //   flex: 1,
    // },
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
      field: "feedbacks",
      headerName: "Feedbacks",
      flex: 1,
      renderCell: (params) => (
        <Stack
          direction={"row"}
          gap={1}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <ShortcutIcon
            sx={{ color: primary.main, height: "18px", width: "18px" }}
          />
          <Typography variant="body2">{`${params.row.feedbacks.length} feedback, go actions to see.`}</Typography>
        </Stack>
      ),
    },

    {
      field: "id",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => (
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Tooltip title="See Feedbacks" placement="top">
            <IconButton
              aria-label="offer-opp"
              onClick={() => {
                handleOfferOppClick(params.row);

                handleOpen();
              }}
            >
              <FeedbackIcon
                sx={{ color: primary.main, height: "20px", width: "20px" }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="Send E-mail" placement="top">
            <IconButton
              aria-label="mail-opp"
              onClick={() => {
                handleMailOppClick(params.row);

                handleOpenMail();
              }}
            >
              <EmailIcon
                sx={{
                  color: primary.main,
                  height: "20px",
                  width: "20px",
                  mb: "2px",
                }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="Give a Gift" placement="top">
            <IconButton
              aria-label="disc-opp"
              onClick={() => {
                handleMailOppClick(params.row);

                handleOpenDiscount();
              }}
            >
              <CardGiftcardIcon
                sx={{
                  color: primary.main,
                  height: "20px",
                  width: "20px",
                  mb: "2px",
                }}
              />
            </IconButton>
          </Tooltip>
        </Stack>
      ),
    },
  ];

  console.log("disloyalUsers", disloyalUsers);

  const rows = disloyalUsers.map((data: any, index: number) => ({
    id: index + 1,
    firstName: data.first_name,
    lastName: data.last_name,
    email: data.email,
    monthlySpend: "$ " + findAverageSpendForUser(data),
    monthlyPurchaces: findAveragePurchacesForUser(data),
    feedbacks: data.feedbacks,
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
          <ViewFeedbacksModal
            username={name}
            userSurname={surname}
            averages={averages}
            handleClose={handleClose}
            feedbacks={feedbacks}
          />
        </ModalStyled>
      </Modal>
      <Modal
        open={openMail}
        onClose={handleCloseMail}
        aria-labelledby="modal-mail-report"
        aria-describedby="modal-mail-report"
      >
        <ModalStyled>
          {
            <SendMailModal
              email={email}
              username={name}
              userSurname={surname}
              handleClose={handleCloseMail}
              handleClickSnackbar={handleClickSnackbar}
            />
          }
        </ModalStyled>
      </Modal>
      <Modal
        open={openDiscount}
        onClose={handleCloseDiscount}
        aria-labelledby="modal-disc-report"
        aria-describedby="modal-disc-report"
      >
        <ModalStyled>
          <ApplyDiscountModal
            username={name}
            userSurname={surname}
            handleClose={handleCloseDiscount}
            handleClickSnackbar={handleClickDiscountSnackbar}
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
            Mail Sent Successfully !
          </Alert>
        </Snackbar>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          autoHideDuration={4000}
          open={openBarDisc}
          onClose={handleCloseDiscountSnackbar}
          key={verticalDisc + horizontalDisc}
        >
          <Alert severity="success" sx={{ width: "100%" }}>
            Gift Delivered Successfully !
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default DisloyalUserTable;
