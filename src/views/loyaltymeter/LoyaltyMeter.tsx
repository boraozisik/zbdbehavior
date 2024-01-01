import React from "react";
import Header from "./components/Header";
import DisloyalUserTable from "./components/DisloyalUserTable";

type Props = {};

const LoyaltyMeter = (props: Props) => {
  return (
    <div className="container px-6 py-10 mx-auto">
      <Header />
      <DisloyalUserTable />
    </div>
  );
};

export default LoyaltyMeter;
