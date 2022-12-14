/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";
import { Hanabi, Image1, Lunox, Miya, Zilong } from "../../assets";
import { Footer } from "../../components";
import Header from "../../components/header";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen flex flex-col mx-auto items-center font-poppins">
      <Header header />
      {/* Header */}
      <div className="w-full h-[100vh] bg-[#436FA0] flex position-relative">
        <img className="w-[80%] h-[100%] img-fluid" fill="black" src={Miya} alt="homeImage" />
        <div className="flex w-[40%] pt-5 flex-col justify-center ml-[-200px]">
          <div className="text-white text-5xl font-extrabold">Jadilah player terbaik di Land of dawn</div>
          <div>
            <button type={"button"} className={`w-96 bg-[#0F3460] my-8 py-2 rounded-2xl text-white text-2xl font-bold`}>
              Jadi Pro Player Sekarang
            </button>
          </div>
        </div>
      </div>

      {/* Section1 */}
      <div className="w-full h-[50vh]  flex  px-56">
        <div className="w-[63%]  text-black  flex justify-center flex-col ">
          <span className="text-2xl font-bold mb-4">Belajar dari Nol hingga Pro</span>
          <span className="text-lg font-semibold">
            Pelajari Hero favoritmu mulai dari tahapan pemula hingga lanjutan melalui kursus original kami yang telah terverifikasi dengan META
            terkini dari seluruh tim professional Mobile Legends Professional League (MPL).
          </span>
        </div>
        <div className="w-[35%] flex justify-center flex-col">
          <img className="w-[85%] h-[55%] img-fluid rounded-lg" src={Image1} alt="homeImage" />
        </div>
      </div>

      {/* Section2 */}
      <div className="w-full h-[20vh] mb-12 flex flex-row justify-center  px-56">
        <div className="w-1/3  flex flex-col justify-center items-center">
          <span className="text-4xl font-extrabold">100+</span>
          <span className="text-xl font-bold">Heroes</span>
        </div>
        <div className="w-1/3  flex flex-col justify-center items-center border-2 border-y-0 border-x-[#8A8A8A]">
          <span className="text-4xl font-extrabold">20+</span>
          <span className="text-xl font-bold">Kelas</span>
        </div>
        <div className="w-1/3  flex flex-col justify-center items-center">
          <span className="text-4xl font-extrabold">50+</span>
          <span className="text-xl font-bold">Bab</span>
        </div>
      </div>

      {/* Section3 */}
      <div className="w-full h-[50vh] bg-[#E3E3E3] flex flex-row-reverse px-56">
        <div className="w-[63%]  text-black  flex justify-center flex-col ">
          <span className="text-2xl font-bold mb-4">Kenali lanemu dengan baik</span>
          <span className="text-lg font-semibold">5 Lane dengan berbagai variasi rotasi. Pelajari tugas tiap lane secara menyeluruh.</span>
        </div>
        <div className="w-[35%] flex justify-center flex-col">
          <img className="w-[85%] h-[55%] img-fluid rounded-lg" src={Image1} alt="homeImage" />
        </div>
      </div>
      <div className="my-14 flex flex-col items-center w-full  px-56">
        <div className="mb-12">
          <h1 className="text-3xl font-extrabold">Kelas Populer</h1>
        </div>
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
                <span className="text-lg font-poppinsSemibold ">Kuasai mekanik Hanabi sebagai Hero marksman gold lane dengan lifesteal tinggi!</span>
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

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
