import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import {
  Grid,
  IconButton,
  Modal,
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
import DefineCampaignWithCart from "./DefineCampaignWithCart";

type Props = {};

const companyProducts = [
  "Macbook Pro 14",
  "Samsung Galaxy Watch",
  "JBL Clip 4",
];

const UsersTable = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [cartDifference, setCartDifference] = useState<any | null>(null);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDefineCampaignClick = (row: any) => {
    const difference = companyProducts.filter(
      (item) => !row?.cart.includes(item)
    );

    setCartDifference(difference);
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
      field: "cart",
      headerName: "Products in Cart",
      flex: 1,
      renderCell: (params) => (
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {params?.value.map((data: any) => (
            <Typography key={data} variant="body1">
              {data + ","}
            </Typography>
          ))}
        </Stack>
      ),
    },
    {
      field: "id",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => (
        <Tooltip title="Define a Campaign" placement="top">
          <IconButton
            aria-label="define-campaign"
            onClick={() => {
              handleDefineCampaignClick(params.row);

              handleOpen();
            }}
          >
            <AutoFixHighIcon sx={{ color: primary.main }} />
          </IconButton>
        </Tooltip>
      ),
    },
  ];

  const rows = UsersData.map((data: any, index: number) => ({
    id: index + 1,
    firstName: data.first_name,
    lastName: data.last_name,
    cart: data.cart,
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-location-report"
        aria-describedby="modal-location-report"
      >
        <ModalStyled>
          <DefineCampaignWithCart cartData={cartDifference} />
        </ModalStyled>
      </Modal>
    </>
  );
};

export default UsersTable;
