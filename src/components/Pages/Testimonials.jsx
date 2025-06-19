import React from "react";
import Container from "../Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../Image";
import imageOne from "../../assets/customer1.jpg";
import imageTwo from "../../assets/customer2.jpg";
import imageThree from "../../assets/customer3.jpg";
import imageFour from "../../assets/customer4.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="bg-bgColor pb-[80px] p-5  text-white">
      <Container>
        <div className="flex items-center pb-10 justify-between md:pl-[420px] px-5  sm:w-full">
          <h4 className="relative font-bold text-white  text-[24px] after:content-[''] after:absolute after:top-[20px] after:ml-5 after:h-[2px] after:bg-primaryC after:w-[250px] ">
            Testimonials
          </h4>
          <h5 className="text-[16px] text-white font-semibold">3</h5>
        </div>
        <div className=" md:pl-[420px] px-5  sm:w-full">
          <Slider {...settings}>
            <div className="px-5">
              <div className="text-center bg-primaryC p-15 px-5  rounded-[10px]">
                <Image
                  className="rounded-full w-[80px] h-[80px] mx-auto"
                  imgSrc={imageOne}
                />
                <h3 className="text-[20px] font-bold mt-3">Viktoria Newman</h3>
                <h5 className="text-[14px] text-buttonC font-medium py-3">
                  Model
                </h5>
                <p className="text-[16px] text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias officia, debitis minus repellat saepe? Deleniti
                  blanditiis optio inventore nulla dicta fugiat culpa quis unde,
                  sequi debitis ex ab! Sapiente vitae rem tempore sunt! Aperiam
                  eveniet mollitia, quae architecto nostrum.
                </p>
              </div>
            </div>

            <div className="px-5">
              <div className="text-center bg-primaryC p-15 px-5 rounded-[10px]">
                <Image
                  className="rounded-full w-[80px] h-[80px] mx-auto"
                  imgSrc={imageTwo}
                />
                <h3 className="text-[20px] font-bold mt-3">Paul Freeman</h3>
                <h5 className="text-[14px] text-buttonC font-medium py-3">
                  Interior Desiner
                </h5>
                <p className="text-[16px] text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias officia, debitis minus repellat saepe? Deleniti
                  blanditiis optio inventore nulla dicta fugiat culpa quis unde,
                  sequi debitis ex ab! Sapiente vitae rem tempore sunt! Aperiam
                  eveniet mollitia, quae architecto nostrum.
                </p>
              </div>
            </div>

            <div className="px-5">
              <div className="text-center bg-primaryC p-15 px-5 rounded-[10px]">
                <Image
                  className="rounded-full w-[80px] h-[80px] mx-auto"
                  imgSrc={imageThree}
                />
                <h3 className="text-[20px] font-bold mt-3">Oscar Oldman</h3>
                <h5 className="text-[14px] text-buttonC font-medium py-3">
                  Photographer
                </h5>
                <p className="text-[16px] text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias officia, debitis minus repellat saepe? Deleniti
                  blanditiis optio inventore nulla dicta fugiat culpa quis unde,
                  sequi debitis ex ab! Sapiente vitae rem tempore sunt! Aperiam
                  eveniet mollitia, quae architecto nostrum.
                </p>
              </div>
            </div>

            <div className="px-5">
              <div className="text-center bg-primaryC p-15 px-5 rounded-[10px]">
                <Image
                  className="rounded-full w-[80px] h-[80px] mx-auto"
                  imgSrc={imageFour}
                />
                <h3 className="text-[20px] font-bold mt-3">Nathan Pol</h3>
                <h5 className="text-[14px] text-buttonC font-medium py-3">
                  Facebook Marketer
                </h5>
                <p className="text-[16px] text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias officia, debitis minus repellat saepe? Deleniti
                  blanditiis optio inventore nulla dicta fugiat culpa quis unde,
                  sequi debitis ex ab! Sapiente vitae rem tempore sunt! Aperiam
                  eveniet mollitia, quae architecto nostrum.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
