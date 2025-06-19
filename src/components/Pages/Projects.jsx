import React from "react";
import Container from "../Container";
import Image from "../Image";
import workOne from '../../assets/metro-portfolio.jpg'
import workTwo from '../../assets/classic-agency.jpg'
import workThree from '../../assets/clean-photography.jpg'
import workFour from '../../assets/creative-agency.jpg'
import workFive from '../../assets/dark-portfolio.jpg'
import workSix from '../../assets/freelancer-home.jpg'
import workSeven from '../../assets/portfolio-agency.jpg'
import workEight from '../../assets/restaurant.jpg'
import workNine from '../../assets/shop-fashion.jpg'
import workTen from '../../assets/shop-creative.jpg'
import workEleven from '../../assets/shop-classic.jpg'
import workETwelve from '../../assets/wedding.jpg'

const Projects = () => {
  return (
    <div className="bg-bgColor pb-[80px] p-5  text-white">
      <Container>
        <div data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-sine" className="flex items-center pb-10 justify-between md:pl-[420px] px-5  sm:w-full">
          <h4 className="relative font-bold text-white  text-[24px] after:content-[''] after:absolute after:top-[20px] after:ml-5 after:h-[2px] after:bg-primaryC after:w-[250px] ">
            My Projects
          </h4>
          <h5 className="text-[16px] text-white font-semibold">5</h5>
        </div>

        <div className="md:ml-[420px] mt-5 w-full">
            <div className="grid md:w-2/3 grid-cols-1 md:grid-cols-2 gap-5 px-5">
                  <div data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-sine" className="w-full bg-primaryC  rounded-[10px]" style={{ boxShadow: '0px  3px 5px rgba(0, 255, 0, 0.5)' }}>
                    <Image className='rounded-tl-[10px] rounded-tr-[10px] w-full' imgSrc={workOne}/>
                    <h4 className="text-[20px] text-gray-300 font-bold text-center py-5">Metro-Portfolio</h4>
                  </div>

                  <div data-aos="fade-left" data-aos-duration="800" data-aos-easing="ease-in-sine" className="w-full bg-primaryC  rounded-[10px]" style={{ boxShadow: '0px  3px 5px rgba(0, 255, 0, 0.5)' }}>
                    <Image className='rounded-tl-[10px] rounded-tr-[10px] w-full' imgSrc={workTwo}/>
                    <h4 className="text-[20px] text-gray-300 font-bold text-center py-5">Classic-Agency</h4>
                  </div>

                  <div data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-sine" className="w-full bg-primaryC  rounded-[10px]" style={{ boxShadow: '0px  3px 5px rgba(0, 255, 0, 0.5)' }}>
                    <Image className='rounded-tl-[10px] rounded-tr-[10px] w-full' imgSrc={workThree}/>
                    <h4 className="text-[20px] text-gray-300 font-bold text-center py-5">Clean-Photography</h4>
                  </div>

                  <div data-aos="fade-left" data-aos-duration="800" data-aos-easing="ease-in-sine" className="w-full bg-primaryC  rounded-[10px]" style={{ boxShadow: '0px  3px 5px rgba(0, 255, 0, 0.5)' }}>
                    <Image className='rounded-tl-[10px] rounded-tr-[10px] w-full' imgSrc={workFour}/>
                    <h4 className="text-[20px] text-gray-300 font-bold text-center py-5">Creative-Agency</h4>
                  </div>

                  <div data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-sine" className="w-full bg-primaryC  rounded-[10px]" style={{ boxShadow: '0px  3px 5px rgba(0, 255, 0, 0.5)' }}>
                    <Image className='rounded-tl-[10px] rounded-tr-[10px] w-full' imgSrc={workFive}/>
                    <h4 className="text-[20px] text-gray-300 font-bold text-center py-5">Dark-Portfolio</h4>
                  </div>

                  <div data-aos="fade-left" data-aos-duration="800" data-aos-easing="ease-in-sine" className="w-full bg-primaryC  rounded-[10px]" style={{ boxShadow: '0px  3px 5px rgba(0, 255, 0, 0.5)' }}>
                    <Image className='rounded-tl-[10px] rounded-tr-[10px] w-full' imgSrc={workSix}/>
                    <h4 className="text-[20px] text-gray-300 font-bold text-center py-5">Freelancer-Home</h4>
                  </div>

                  <div data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-sine" className="w-full bg-primaryC  rounded-[10px]" style={{ boxShadow: '0px  3px 5px rgba(0, 255, 0, 0.5)' }}>
                    <Image className='rounded-tl-[10px] rounded-tr-[10px] w-full' imgSrc={workSeven}/>
                    <h4 className="text-[20px] text-gray-300 font-bold text-center py-5">Portfolio-Agency</h4>
                  </div>

                  <div data-aos="fade-left" data-aos-duration="800" data-aos-easing="ease-in-sine" className="w-full bg-primaryC  rounded-[10px]" style={{ boxShadow: '0px  3px 5px rgba(0, 255, 0, 0.5)' }}>
                    <Image className='rounded-tl-[10px] rounded-tr-[10px] w-full' imgSrc={workEight}/>
                    <h4 className="text-[20px] text-gray-300 font-bold text-center py-5">restaurant</h4>
                  </div>

                  <div data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-sine" className="w-full bg-primaryC  rounded-[10px]" style={{ boxShadow: '0px  3px 5px rgba(0, 255, 0, 0.5)' }}>
                    <Image className='rounded-tl-[10px] rounded-tr-[10px] w-full' imgSrc={workNine}/>
                    <h4 className="text-[20px] text-gray-300 font-bold text-center py-5">Shop-Fashion</h4>
                  </div>

                  <div data-aos="fade-left" data-aos-duration="800" data-aos-easing="ease-in-sine" className="w-full bg-primaryC  rounded-[10px]" style={{ boxShadow: '0px  3px 5px rgba(0, 255, 0, 0.5)' }}>
                    <Image className='rounded-tl-[10px] rounded-tr-[10px] w-full' imgSrc={workTen}/>
                    <h4 className="text-[20px] text-gray-300 font-bold text-center py-5">Shop-Creative</h4>
                  </div>

                  <div data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-sine" className="w-full bg-primaryC  rounded-[10px]" style={{ boxShadow: '0px  3px 5px rgba(0, 255, 0, 0.5)' }}>
                    <Image className='rounded-tl-[10px] rounded-tr-[10px] w-full' imgSrc={workEleven}/>
                    <h4 className="text-[20px] text-gray-300 font-bold text-center py-5">Shop-Classic</h4>
                  </div>

                  <div data-aos="fade-left" data-aos-duration="800" data-aos-easing="ease-in-sine" className="w-full bg-primaryC  rounded-[10px]" style={{ boxShadow: '0px  3px 5px rgba(0, 255, 0, 0.5)' }}>
                    <Image className='rounded-tl-[10px] rounded-tr-[10px] w-full' imgSrc={workETwelve}/>
                    <h4 className="text-[20px] text-gray-300 font-bold text-center py-5">wedding</h4>
                  </div>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
