import React from "react";
import ReactPlayer from "react-player";
import { CommonButton, Footer, Header } from "../../components";
import { AiFillStar } from "react-icons/ai";
import { Hanabi, Lunox, Lunox2, Zilong } from "../../assets";
import { useNavigate } from "react-router-dom";

function Course() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col mx-auto items-center font-poppins">
      <Header />
      <div className="mt-16 pt-6 w-full bg-[#436FA0] px-56 font-poppinsSemibold">
        <div className="text-3xl py-8 text-white text-center">Belajar Hero Lunox</div>
        <div className="flex justify-center rounded-lg">
          <div className="rounded-lg overflow-hidden">
            <ReactPlayer url="https://youtu.be/MK78JU18SxE" controls />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <CommonButton
            customStyle="w-44 items-center"
            type="button"
            onClick={() => {
              navigate("/detail");
            }}
            title="Masuk"
            enabled={true}
          />
        </div>
      </div>
      <div className="mt-6 mb-12 w-full bg-white px-56 font-poppinsSemibold">
        <img className=" w-[40%] -mt-6 cover-fill rounded-lg absolute right-0" src={Lunox2} alt="homeImage" />
        <div className="w-9/12">
          <div className="text-2xl py-6 font-poppinsBold">Deskripsi</div>
          <div className="text-lg pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <AiFillStar color="FFC700" size={24} />
              <AiFillStar color="FFC700" size={24} />
              <AiFillStar color="FFC700" size={24} />
              <AiFillStar color="FFC700" size={24} />
              <AiFillStar color="FFC700" size={24} />
              <div className="text-lg pb-6 pl-3 text-gray-400">5.0</div>
            </div>
            <div className="text-lg pb-6 pl-3 text-gray-400">102 minutes</div>
          </div>
        </div>
      </div>
      <div className="mt-6 pt-4 pb-12 w-full px-56 font-poppinsSemibold bg-[#E3E3E3]">
        <div className="text-2xl py-6 text-center font-poppinsBold">Silabus</div>
        <div className="text-lg flex flex-row w-full justify-between py-3 px-8 border-2 border-[#0F3460] bg-white rounded-xl">
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
      <div className="mt-6 mb-12 w-full bg-white px-56 font-poppinsSemibold">
        <div className="w-full">
          <div className="text-2xl py-6 font-poppinsBold">Ulasan</div>
          <div className="grid gap-4 grid-cols-2">
            <div className="shadow-lg rounded-xl p-6">
              <div className="flex flex-row">
                <div className="w-2/12">
                  <div className="bg-violet-500 rounded-full w-[52px] h-[52px]"></div>
                </div>
                <div className="w-10/12 flex flex-col space-y-2">
                  <div className="font-poppinsSemibold text-lg">Kobo Kanaeru</div>
                  <div className="flex flex-row">
                    <AiFillStar color="FFC700" size={24} />
                    <AiFillStar color="FFC700" size={24} />
                    <AiFillStar color="FFC700" size={24} />
                    <AiFillStar color="FFC700" size={24} />
                    <AiFillStar color="8A8A8A" size={24} />
                    <div className="text-lg pl-3 text-gray-400">4.0</div>
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class
                    aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-lg rounded-xl p-6">
              <div className="flex flex-row">
                <div className="w-2/12">
                  <div className="bg-violet-500 rounded-full w-[52px] h-[52px]"></div>
                </div>
                <div className="w-10/12 flex flex-col space-y-2">
                  <div className="font-poppinsSemibold text-lg">Kobo Kanaeru</div>
                  <div className="flex flex-row">
                    <AiFillStar color="FFC700" size={24} />
                    <AiFillStar color="FFC700" size={24} />
                    <AiFillStar color="FFC700" size={24} />
                    <AiFillStar color="FFC700" size={24} />
                    <AiFillStar color="8A8A8A" size={24} />
                    <div className="text-lg pl-3 text-gray-400">4.0</div>
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class
                    aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-12 w-full bg-white px-56 font-poppinsSemibold">
        <div className="w-full">
          <div className="text-2xl py-6 font-poppinsBold text-center">Rekomendasi</div>
          <div className="flex w-full  flex-row space-x-3">
            <div className="bg-white border-gray-300 border-2 shadow-lg w-1/3 h-[500px] rounded-lg">
              <div className="w-full h-[35%] overflow-hidden">
                <img className="h-full cover-fill rounded-lg" src={Lunox} alt="homeImage" />
              </div>
              <div className=" w-full h-[55%] flex flex-col items-center justify-between p-4 pb-6">
                <div className="flex flex-col">
                  <span className="text-2xl font-poppinsBold text-center mb-4">Jago Hero Lunox</span>
                  <span className="text-lg font-poppinsSemibold ">Pelajari mekanisme skill Lunox sebagai Hero mage mid lane berdamage tinggi!</span>
                </div>
                <div className="font-poppinsBold text-2xl self-end my-6">Rp. 10.000</div>

                <div>
                  <button
                    type={"button"}
                    onClick={() => {
                      navigate("/kelas");
                    }}
                    className={`w-36 bg-[#0F3460] py-2 rounded-2xl text-white text-lg font-bold`}
                  >
                    Mulai Belajar
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white border-gray-300 border-2 shadow-lg w-1/3 min-h-[500px] rounded-lg">
              <div className="w-full h-[35%] overflow-hidden">
                <img className="h-full cover-fill rounded-lg" src={Hanabi} alt="homeImage" />
              </div>
              <div className=" w-full h-[55%] flex flex-col items-center justify-between p-4 pb-6">
                <div className="flex flex-col">
                  <span className="text-2xl font-poppinsBold text-center mb-4">Jago Hero Hanabi</span>
                  <span className="text-lg font-poppinsSemibold ">
                    Kuasai mekanik Hanabi sebagai Hero marksman gold lane dengan lifesteal tinggi!
                  </span>
                </div>
                <div className="font-poppinsBold text-2xl self-end my-6">Rp. 10.000</div>

                <div>
                  <button
                    type={"button"}
                    onClick={() => {
                      navigate("/kelas");
                    }}
                    className={`w-36 bg-[#0F3460] py-2 rounded-2xl text-white text-lg font-bold`}
                  >
                    Mulai Belajar
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white border-gray-300 border-2 shadow-lg w-1/3 min-h-[500px] rounded-lg">
              <div className="w-full h-[35%] overflow-hidden">
                <img className="h-full cover-fill rounded-lg" src={Zilong} alt="homeImage" />
              </div>
              <div className=" w-full h-[55%] flex flex-col items-center justify-between p-4 pb-6">
                <div className="flex flex-col">
                  <span className="text-2xl font-poppinsBold text-center mb-4">Jago Hero Zilong</span>
                  <span className="text-lg font-poppinsSemibold ">
                    Maksimalkan potensi yang dimiliki Zilong sebagai Hero fighter yang memiliki damage yang tinggi!
                  </span>
                </div>
                <div className="font-poppinsBold text-2xl self-end my-6">Rp. 10.000</div>
                <div>
                  <button
                    type={"button"}
                    onClick={() => {
                      navigate("/kelas");
                    }}
                    className={`w-36 bg-[#0F3460] py-2 rounded-2xl text-white text-lg font-bold`}
                  >
                    Mulai Belajar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Course;
