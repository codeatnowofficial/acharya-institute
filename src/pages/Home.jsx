import React from "react";
import HeroComponent from "../components/HeroComponent";
import HomeCardsList from "./HomeCardsList";

const Home = () => {
  return (
    <div className="h-[100vh] overflow-y-scroll bg-slate-50">
      <HeroComponent></HeroComponent>
      <center className="py-8 text-4xl md:text-6xl font-light">
        <h1>Our Popular Courses...</h1>
      </center>
      <HomeCardsList></HomeCardsList>
    </div>
  );
};

export default Home;
