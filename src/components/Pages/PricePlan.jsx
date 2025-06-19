import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import {FaArrowRight} from "react-icons/fa6";

const PricePlan = () => {
  return (
    <div className="bg-bgColor pb-[50px]  text-white">
      <Container>
        <div className="flex items-center pb-10 justify-between md:pl-[420px] px-5 sm:w-full">
          <h4 className="relative font-bold text-white  text-[24px] after:content-[''] after:absolute after:top-[20px] after:ml-5 after:h-[2px] after:bg-primaryC after:w-[250px] ">
            Price plans
          </h4>
          <h5 className="text-[16px] text-white font-semibold">4</h5>
        </div>
        <div className="md:ml-[420px] px-5 md:w-2/3">
          <div className="md:flex gap-x-5 w-full px-5 sm:px-0 ">
            <div className="bg-primaryC w-full  md-px-0 p-10 text-center text-white rounded-[10px]">
              <h4 className="text-[20px] font-bold mb-3">Hourly Payment</h4>
              <h3>
                ${" "}
                <span className="text-[40px] text-white mt-5 font-bold">
                  20
                </span>{" "}
                h
              </h3>
              <div className=" w-full border-b-1 mb-8 border-bgColor font-bold mt-3"></div>
              <p className="text-[16px] font-bold mb-5 text-gray-200">
                Amet lorem.
              </p>
              <p className="text-[16px] font-bold mb-5 text-gray-200">
                Dolor ipsum.
              </p>
              <p className="text-[16px] font-bold mb-5 text-gray-500">
                <del>Sit amet</del>
              </p>
              <p className="text-[16px] font-bold mb-5 text-gray-500">
                <del>Lorem dolor</del>
              </p>
              <button className="flex mx-auto items-center py-3 px-8 rounded-full bg-buttonC gap-x-2 mt-3 text-white">
                Order Now
                <FaArrowRight />
              </button>
            </div>

            <div className="bg-primaryC w-full mt-4 sm:mt-0 md-px-0 p-10 text-center text-white rounded-[10px]">
              <h4 className="text-[20px] font-bold mb-3">Hourly Payment</h4>
              <h3>
                ${" "}
                <span className="text-[40px] text-white mt-5 font-bold">
                  30
                </span>{" "}
                h
              </h3>
              <div className=" w-full border-b-1 mb-8 border-bgColor font-bold mt-3"></div>
              <p className="text-[16px] font-bold mb-5 text-gray-200">
                Amet lorem.
              </p>
              <p className="text-[16px] font-bold mb-5 text-gray-200">
                Dolor ipsum.
              </p>
              <p className="text-[16px] font-bold mb-5 text-gray-200">
                Sit amet
              </p>
              <p className="text-[16px] font-bold mb-5 text-gray-200">
                Lorem dolor
              </p>
              <button className="flex mx-auto items-center py-3 px-8 rounded-full bg-buttonC gap-x-2 mt-3 text-white">
                Order Now
                <FaArrowRight />
              </button>
            </div>

            
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PricePlan;
