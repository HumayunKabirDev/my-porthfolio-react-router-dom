import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import {FaQuoteRight} from "react-icons/fa";
import CountUp from "react-countup";

const Review = () => {
  return (
    <div className="bg-bgColor py-10 w-full px-5 md:px-0 ">
      <Container>
        <Flex className="justify-between grid grid-cols-1 gap-y-5 sm:gap-x-5 px-5 lg:grid-cols-3 sm:pl-[420px] sm:-mt-[140px] relative">
          {/* Card Start */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            className="bg-primaryC p-5 mx-auto w-full  sm:w-full rounded-[10px] text-white"
            style={{boxShadow: "0px  3px 5px rgba(0, 255, 0, 0.5)"}}>
            <h3 className="text-[45px] font-bold text-center py-5 border-b-2 border-bgColor w-full">
              <CountUp start={0} end={75} duration={2.75}></CountUp> +
            </h3>
            <p className="text-[18px] text-center font-medium mt-5">
              Completed projects
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
            className="bg-primaryC p-5 mx-auto w-full  sm:w-full rounded-[10px] text-white px-5"
            style={{boxShadow: "0px  3px 5px rgba(0, 255, 0, 0.5)"}}>
            <h3 className="text-[45px] font-bold text-center py-5 border-b-2 border-bgColor w-full">
              <CountUp start={0} end={50} duration={2.75}></CountUp> +
            </h3>
            <p className="text-[18px] text-center font-medium mt-5">
              Happy customers
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            className="bg-primaryC p-5 mx-auto w-full  sm:w-full rounded-[10px] text-white"
            style={{boxShadow: "0px  3px 5px rgba(0, 255, 0, 0.5)"}}>
            <h3 className="text-[45px] font-bold text-center py-5 border-b-2 border-bgColor w-full">
              <CountUp start={0} end={15} duration={2.75}></CountUp> +
            </h3>
            <p className="text-[18px] text-center font-medium mt-5">
              Honors and Awards
            </p>
          </div>
          {/* Card Start */}
        </Flex>
        {/* My Story Start */}
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-easing="ease-in-sine"
          className="flex items-center justify-between md:pl-[420px] py-7 px-5 sm:w-full">
          <span className="relative font-bold text-white  text-[24px] after:content-[''] after:absolute after:top-[20px]  after:ml-5 after:h-[2px] after:bg-primaryC  after:w-[280px] ">
            My story
          </span>
          <h5 className="text-[16px] text-white font-semibold">1</h5>
        </div>

        <div className="md:w-2/3 px-5 md:px-3">
          <div data-aos="fade-left" data-aos-duration="800" data-aos-easing="ease-in-sine"
            className="sm:ml-[410px] relative sm:mx-0 w-full rounded-[10px] bg-primaryC p-10 text-white "
            style={{boxShadow: "0px  3px 5px rgba(0, 255, 0, 0.5)"}}>
            <span className="top-5 left-10 absolute  text-bgColor text-[25px]">
              <FaQuoteRight />
            </span>
            <h4 className="text-[18px] w-full px-5 py-5  mx-auto">
              Consectetur adipisicing elit. Rem minima maiores, praesentium,
              aperiam eveniet tenetur consequatur beatae id est.
            </h4>
            <span className="right-10 bottom-5 absolute text-bgColor text-[25px]">
              <FaQuoteRight />
            </span>
          </div>
        </div>
        {/* My Story End */}
      </Container>
    </div>
  );
};

export default Review;
