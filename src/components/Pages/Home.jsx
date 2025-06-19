import React from "react";
import Banner from "./Banner";
import Review from "./Review";
import MySkill from "./MySkill";
import MyServices from "./MyServices";
import PricePlan from "./PricePlan";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Banner />
      <Review />
      <MySkill />
      <MyServices />
      <PricePlan />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
