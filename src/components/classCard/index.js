import React from "react";
import { Zilong } from "../../assets";

function ClassCard() {
  return (
    <div className="bg-white border-gray-300 border-2 shadow-lg w-full min-h-[500px] rounded-lg">
      <div className="w-full h-[45%] overflow-hidden">
        <img className="h-full cover-fill rounded-lg" src={Zilong} alt="homeImage" />
      </div>
      <div className=" w-full h-[55%] flex flex-col items-center justify-between p-4 pb-6">
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-center mb-4">Jago Hero Zilong</span>
          <span className="text-lg font-semibold ">
            Maksimalkan potensi yang dimiliki Zilong sebagai Hero fighter yang memiliki damage yang tinggi!
          </span>
        </div>
        <div className="mt-4">
          <button type={"button"} className={`w-36 bg-[#0F3460] py-2 rounded-2xl text-white text-lg font-bold`}>
            Mulai Belajar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClassCard;
