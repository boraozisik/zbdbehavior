import React from "react";
import Header from "./components/Header";
import UsersTable from "./components/UsersTable";

type Props = {};

const DefineCampaign = (props: Props) => {
  return (
    <div className="container px-6 py-10 mx-auto">
      <Header />
      <UsersTable />
    </div>
  );
};

export default DefineCampaign;
