import React from "react";
import Image from "../Image";
import imageBanner from "../../assets/bannerImg.jpg";
import Flex from "../Flex";
import Container from "../Container";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaSquareInstagram,
  FaArrowDown,
} from "react-icons/fa6";
import Typedtext from "../Typedtext";

const Banner = () => {
  return (
    <>
      <div className=" relative bg-[url('./public/bannerbg.jpg')] py-[20px] bg-no-repeat bg-cover bg-center  w-full">
        <div className="absolute inset-0 bg-black/50 w-full z-0"></div>
        <Container>
          <Flex>
            <div className="grid grid-cols-1 w-full md:w-full md:grid-cols-2">
              <div className=" mx-auto sm:mx-0 z-10  mt-[60px] bg-primaryC rounded-[10px] p-25 md:p-15  md:fixed md:top-12 md:left-15" style={{ boxShadow: '0px  3px 5px rgba(0, 255, 0, 0.5)' }}>
                <Image
                  imgSrc={imageBanner}
                  className="w-[150px] h-[150px] mx-auto rounded-[50%] border-3 border-bgColor"
                />
                <h3 className="text-white text-[24px] w-full text-center font-bold py-5 border-b-1 border-bgColor">
                  Md. Humayun Kabir
                </h3>
                <div className="text-white text-[16px] w-full text-center font-semibold py-5 border-b-1 border-bgColor">
                  <Typedtext />
                </div>
                <div className="flex gap-x-5 justify-center text-white py-5 border-b-1 w-full  border-bgColor">
                  <FaFacebookF />
                  <FaLinkedinIn />
                  <FaTwitter />
                  <FaSquareInstagram />
                </div>
                <div className="py-5 w-full border-b-1 border-bgColor">
                  <div className="flex text-white justify-between ">
                    <h3>Country :</h3>
                    <p>Bangladesh</p>
                  </div>
                  <div className="flex text-white justify-between w-full">
                    <h3>City :</h3>
                    <p>Dhaka</p>
                  </div>
                  <div className="flex text-white justify-between w-full">
                    <h3>Age :</h3>
                    <p>35</p>
                  </div>
                </div>
              </div>

              <div className="text-white mx-auto md:mx-0 text-center sm:text-left  mt-[30px] md:pl-[420px] md:py-[150px] z-10">
                <h4 className="text-[18px] md:w-[200px]">Hi my new friend!</h4>
                <h1 className="text-[70px] font-bold w-[450px] pb-5">
                  Discover my art space!
                </h1>

                <button className="flex items-center gap-x-2 mx-auto w-[190px] sm:mx-0 border-2 border-white rounded-full py-3 px-8">
                  Download cv <FaArrowDown />
                </button>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Banner;
