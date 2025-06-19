import React from "react";
import Image from "./Image";

const Card = ({imgSrc,TextPara, Title, Level}) => {
  return (
    <div className="bg-primaryC  text-white  rounded-[10px] py-5 px-5"  style={{ boxShadow: '0px  3px 5px rgba(0, 255, 0, 0.5)' }}>
      <div className="flex items-center overflow-x-hidden gap-x-3">
        <Image className="w-[60px]  rounded-2xl" imgSrc={imgSrc} />
        <h4 className="text-[24px] py-3 font-bold">
          {Title}
        </h4>
      </div>
      <p className="text-[14px] text-gray-500 w-full">{TextPara}</p>
      <div className=" w-full border-b-1 border-bgColor mt-2"></div>
      <h5 className="text-white font-medium mt-3">Expertise Level :</h5>
      <div className="flex items-center  justify-between">
        <p className="h-1 w-[160px] bg-blue-600 rounded-full"></p>
        <h4 className="">{Level}</h4>
      </div>
    </div>
  );
};

export default Card;
