import React from "react";
import AppNavbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import Operations from "../components/home/Operations";
import Timeline from "../components/home/Timeline";

type Props = {};

const HomeView = (props: Props) => {
  return (
    <>
      <AppNavbar />
      <Hero />
      <Operations />
      <Timeline />
    </>
  );
};

export default HomeView;
