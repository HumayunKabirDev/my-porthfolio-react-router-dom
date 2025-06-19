import React from "react";
import Container from "../Container";
import Card from "../Card";
import {FaArrowRight} from "react-icons/fa6";

const MyServices = () => {
  return (
    <div className="bg-bgColor pb-[80px] p-5  text-white">
      <Container>
        <div data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-sine" className="flex items-center pb-10 justify-between md:pl-[420px] px-5  sm:w-full">
          <h4 className="relative font-bold text-white  text-[24px] after:content-[''] after:absolute after:top-[20px] after:ml-5 after:h-[2px] after:bg-primaryC after:w-[250px] ">
            My Services
          </h4>
          <h5 className="text-[16px] text-white font-semibold">3</h5>
        </div>

        <div className="md:ml-[420px] mt-5 w-full">
          <div className="grid md:w-2/3 grid-cols-1 md:grid-cols-2 gap-5 px-5">
            <div data-aos="fade-down-right" data-aos-duration="800" data-aos-easing="ease-in-sine" className="w-full bg-primaryC p-15 rounded-[10px]">
              <h4 className="text-[24px] font-bold">Front-End Desiner</h4>
              <p className="text-[16px] text-gray-400 py-3">
                Dolor sit amet, consectetur adipisicing elit. Delectus esse
                commodi.
              </p>
              <div className=" w-full border-b-1 border-bgColor mt-2"></div>
              <button className="flex items-center gap-x-2 mt-3 text-buttonC">
                Order Now
                <FaArrowRight />
              </button>
            </div>

            <div data-aos="fade-down-left" data-aos-duration="800" data-aos-easing="ease-in-sine" className="w-full bg-primaryC p-15 rounded-[10px]">
              <h4 className="text-[24px] font-bold">UI/UX Design</h4>
              <p className="text-[16px] text-gray-400 py-3">
                Dolor sit amet, consectetur adipisicing elit. Delectus esse
                commodi.
              </p>
              <div className=" w-full border-b-1 border-bgColor mt-2"></div>
              <button className="flex items-center gap-x-2 mt-3 text-buttonC">
                Order Now
                <FaArrowRight />
              </button>
            </div>

            <div data-aos="fade-up-right"data-aos-duration="800" data-aos-easing="ease-in-sine" className="w-full bg-primaryC p-15 rounded-[10px]">
              <h4 className="text-[24px] font-bold">
                Full Stack Web Developer
              </h4>
              <p className="text-[16px] text-gray-400 py-3">
                Dolor sit amet, consectetur adipisicing elit. Delectus esse
                commodi.
              </p>
              <div className=" w-full border-b-1 border-bgColor mt-2"></div>
              <button className="flex items-center gap-x-2 mt-3 text-buttonC">
                Order Now
                <FaArrowRight />
              </button>
            </div>

            <div  data-aos="fade-up-left"data-aos-duration="800" data-aos-easing="ease-in-sine" className="w-full bg-primaryC p-15 rounded-[10px]">
              <h4 className="text-[24px] font-bold">MERN Developer</h4>
              <p className="text-[16px] text-gray-400 py-3">
                Dolor sit amet, consectetur adipisicing elit. Delectus esse
                commodi.
              </p>
              <div className=" w-full border-b-1 border-bgColor mt-2"></div>
              <button className="flex items-center gap-x-2 mt-3 text-buttonC">
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

export default MyServices;
