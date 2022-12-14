import React from "react";
import ReactPlayer from "react-player";
import { Header } from "../../components";

function DetailCourse() {
  return (
    <div className="w-full min-h-screen flex flex-col mx-auto items-center font-poppins">
      <Header />
      <div className="mt-16 pt-6 pb-16 w-full h-[90vh] bg-[#436FA0] px-36 font-poppinsSemibold">
        <div className="text-3xl py-8 text-white text-center">Belajar Hero Lunox</div>
        <div className="flex flex-row">
          <div className="flex justify-center rounded-lg">
            <div className="rounded-lg overflow-hidden">
              <ReactPlayer url="https://youtu.be/MK78JU18SxE" controls />
            </div>
          </div>
          <div className="flex flex-col justify-center rounded-lg w-full ml-6">
            <div className="text-lg flex flex-row w-full justify-between py-3 px-8 border-2 border-white text-white bg-[#0F3460] rounded-xl">
              <div>Pengenalan Hero</div>
              <div>5 mins</div>
            </div>
            <div className="mt-3 text-lg flex flex-row w-full justify-between py-3 px-8 border-2 border-[#0F3460] bg-white rounded-xl">
              <div>Skill</div>
              <div>15 mins</div>
            </div>
            <div className="mt-3 text-lg flex flex-row w-full justify-between py-3 px-8 border-2 border-[#0F3460] bg-white rounded-xl">
              <div>Emblem</div>
              <div>3 mins</div>
            </div>
            <div className="mt-3 text-lg flex flex-row w-full justify-between py-3 px-8 border-2 border-[#0F3460] bg-white rounded-xl">
              <div>Build</div>
              <div>8 mins</div>
            </div>
            <div className="mt-3 text-lg flex flex-row w-full justify-between py-3 px-8 border-2 border-[#0F3460] bg-white rounded-xl">
              <div>Tips dan trik</div>
              <div>15 mins</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailCourse;
