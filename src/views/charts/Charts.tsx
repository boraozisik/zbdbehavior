import React, { useState } from "react";
import BarChartView from "./components/BarChartView";
import Header from "./components/Header";
import NothingFound from "../../components/app/NothingFound";
import LineChartView from "./components/LineChartView";
import PieChartView from "./components/PieChartView";
import { Stack } from "@mui/material";

type Props = {};

const Charts = (props: Props) => {
  const [value, setValue] = useState("barchart");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="container px-6 py-10 mx-auto">
      <Header value={value} handleChange={handleChange} />
      <Stack mt={3}>
        {value === "barchart" ? (
          <BarChartView />
        ) : value === "linechart" ? (
          <LineChartView />
        ) : value === "piechart" ? (
          <PieChartView />
        ) : (
          <NothingFound />
        )}
      </Stack>
    </div>
  );
};

export default Charts;
