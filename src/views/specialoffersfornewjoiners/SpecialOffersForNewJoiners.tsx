import React from "react";
import Header from "./components/Header";
import NewUsersTable from "./components/NewUsersTable";

type Props = {};

const SpecialOffersForNewJoiners = (props: Props) => {
  return (
    <div className="container px-6 py-10 mx-auto">
      <Header />
      <NewUsersTable />
    </div>
  );
};

export default SpecialOffersForNewJoiners;
