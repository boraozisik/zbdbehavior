import React from "react";
import Header from "./components/Header";
import LoyalUserTable from "./components/LoyalUserTable";

type Props = {};

const RewardLoyalOnes = (props: Props) => {
  return (
    <div className="container px-6 py-10 mx-auto">
      <Header />
      <LoyalUserTable />
    </div>
  );
};

export default RewardLoyalOnes;
