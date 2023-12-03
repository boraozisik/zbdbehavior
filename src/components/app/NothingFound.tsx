import SearchIcon from "@mui/icons-material/Search";
import { Stack, Typography } from "@mui/material";

type Props = {};

const NothingFound = (props: Props) => {
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={2}
    >
      <img
        alt=""
        src="/static/illustrations/nothing-found.svg"
        style={{ width: 300, height: 200 }}
      />
      <Stack direction={"row"} gap={1} alignItems={"center"}>
        <Typography className="font-semibold italic" variant="h6">
          No results found
        </Typography>
        <SearchIcon />
      </Stack>
    </Stack>
  );
};

export default NothingFound;
