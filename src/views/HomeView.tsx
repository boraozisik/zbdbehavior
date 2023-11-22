import React from "react";
import AppNavbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import Operations from "../components/home/Operations";

type Props = {};

const HomeView = (props: Props) => {
  return (
    <>
      <AppNavbar />
      <Hero />
      <Operations />
    </>
  );
};

export default HomeView;
