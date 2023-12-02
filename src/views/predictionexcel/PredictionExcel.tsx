import React from "react";
import Header from "./components/Header";
import ExcelForm from "./components/ExcelForm";

type Props = {};

const PredictionExcel = (props: Props) => {
  return (
    <div className="container px-6 py-10 mx-auto">
      <Header />
      <ExcelForm />
    </div>
  );
};

export default PredictionExcel;
