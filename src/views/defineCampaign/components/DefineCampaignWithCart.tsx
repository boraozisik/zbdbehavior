import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";

type DefineCampaignWithCartProps = {
  cartData: string[];
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const DefineCampaignWithCart = ({ cartData }: DefineCampaignWithCartProps) => {
  const [products, setProducts] = React.useState<string[]>([]);
  console.log("cartData", cartData);
  console.log("products", products);

  const handleChange = (event: SelectChangeEvent<typeof products>) => {
    const {
      target: { value },
    } = event;
    setProducts(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div>
      <FormControl sx={{ m: 1, width: "100%" }}>
        <InputLabel id="multiple-checkbox-label">Product</InputLabel>
        <Select
          fullWidth
          labelId="multiple-checkbox-label"
          id="multiple-checkbox"
          multiple
          value={products}
          onChange={handleChange}
          input={<OutlinedInput label="Product" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {cartData.map((product) => (
            <MenuItem key={product} value={product}>
              <Checkbox checked={products.indexOf(product) > -1} />
              <ListItemText primary={product} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default DefineCampaignWithCart;
