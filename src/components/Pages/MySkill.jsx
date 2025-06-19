import React from "react";
import Container from "../Container";
import Card from "../Card";
import htmlImg from "../../assets/HTMLlogo.png";
import cssImg from "../../assets/csslogo.png";
import jsImg from "../../assets/JavaScript-logo.png";
import bootStrap from "../../assets/BootStrap logo.png";
import tailWind from "../../assets/Tailwindlogo.png";
import reactJs from "../../assets/react.svg";
import nodeJs from "../../assets/nodejslogo.png";
import Reduxlogo from "../../assets/reduxlogo.png";
import nextJs from "../../assets/nextjs.png";
import gitHub from "../../assets/Githublogo.png";

const MySkill = () => {
  return (
    <div className="bg-bgColor pb-[50px] px-5 text-white">
      <Container>
        <div data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-sine" className="flex items-center pb-10 justify-between md:pl-[420px] sm:w-full">
          <h4 className="relative font-bold text-white  text-[24px] after:content-[''] after:absolute after:top-[20px] after:ml-5 after:h-[2px] after:bg-primaryC after:w-[250px] ">
            My Skill
          </h4>
          <h5 className="text-[16px] text-white font-semibold">2</h5>
        </div>
        <div data-aos="fade-left" data-aos-duration="800" data-aos-easing="ease-in-sine" className="md:w-2/3 md:ml-[420px] mx-auto">
          <div className=" grid grid-cols-2 md:grid-cols-3 w-full gap-5 px-5">
            <Card imgSrc={htmlImg} Title={"HTML"} Level={"95%"} />
            <Card imgSrc={cssImg} Title={"CSS"} Level={"90%"} />
            <Card imgSrc={jsImg} Title={"JavaScript"} Level={"75%"} />
            <Card imgSrc={bootStrap} Title={"BootStarp"} Level={"95%"} />
            <Card imgSrc={tailWind} Title={"CSS"} Level={"95%"} />
            <Card imgSrc={reactJs} Title={"React JS"} Level={"93%"} />
            <Card imgSrc={nodeJs} Title={"Node JS"} Level={"90%"} />
            <Card imgSrc={Reduxlogo} Title={"Redux"} Level={"78%"} />
            <Card imgSrc={nextJs} Title={"Next JS"} Level={"75%"} />
            <Card imgSrc={gitHub} Title={"GitHub"} Level={"90%"} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MySkill;
