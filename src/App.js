import React, { useState, useEffect } from "react";
import { Hanabi, Image1, Lunox, Miya, Zilong } from "./assets";
function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [animateHeader, setAnimateHeader] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 100) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col mx-auto items-center ">
      {/* Header */}
      <nav className={`w-full bg-white  fixed z-10 trasition ease-in-out duration-100 ${animateHeader ? " border border-b-2" : "border-0"}`}>
        <div className="justify-between mx-auto md:items-center md:flex md:px-8 ">
          <div className="flex flex-row items-center  w-96">
            <div className="flex items-center justify-between py-3 px-3 md:py-3 md:block">
              <div className="flex">
                {/* <Link to="/"> */}
                <button className="flex" onClick={() => {}}>
                  <span className="text-black break-words w-32 leading-none text-left font-bold text-2xl pl-2 ">Dawn Academy</span>
                </button>
                {/* </Link> */}
              </div>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  {navbarOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className={`ml-8 flex-1 justify-self-center  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbarOpen ? "block mx-5" : "hidden"}`}>
              <ul className={`items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 `}>
                <li className="text-font-primary font-bold  text-lg hover:text-gray-900">
                  <button onClick={() => {}}>Kategori</button>
                </li>
                <li className="text-font-primary font-bold text-lg hover:text-gray-900">
                  <button onClick={() => {}}>Tentang</button>
                </li>
              </ul>
              <div className="md:hidden md:flex-col justify-center border-t-2 border-t-gray-300 my-5 w-full self-center" />

              <div className="mt-3 space-y-2 md:hidden sm:inline-block">
                {/* <Link to="/masuk"> */}
                <button className="px-4 py-1 text-black border-gray-600 border-2 rounded-md shadow font-bold hover:bg-gray-200">Masuk</button>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-block">
            {/* <Link to="/masuk"> */}
            <button className="px-4 py-1 text-black border-gray-600 border-2 font-bold rounded-md shadow hover:bg-gray-200">Masuk</button>
            {/* </Link> */}
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="w-full h-[85vh] bg-[#436FA0] flex">
        <img className="w-[70%] h-[90%] mt-12 img-fluid" fill="black" src={Miya} alt="homeImage" />
        <div className="flex w-[40%] pt-5 flex-col justify-center">
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
            <div className="w-full h-[45%] overflow-hidden">
              <img className="h-full cover-fill rounded-lg" src={Lunox} alt="homeImage" />
            </div>
            <div className=" w-full h-[55%] flex flex-col items-center justify-between p-4 pb-6">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-center mb-4">Jago Hero Lunox</span>
                <span className="text-lg font-semibold ">Pelajari mekanisme skill Lunox sebagai Hero mage mid lane berdamage tinggi!</span>
              </div>
              <div>
                <button type={"button"} className={`w-36 bg-[#0F3460] py-2 rounded-2xl text-white text-lg font-bold`}>
                  Mulai Belajar
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white border-gray-300 border-2 shadow-lg w-1/3 h-[500px] rounded-lg">
            <div className="w-full h-[45%] overflow-hidden">
              <img className="h-full cover-fill rounded-lg" src={Hanabi} alt="homeImage" />
            </div>
            <div className=" w-full h-[55%] flex flex-col items-center justify-between p-4 pb-6">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-center mb-4">Jago Hero Hanabi</span>
                <span className="text-lg font-semibold ">Kuasai mekanik Hanabi sebagai Hero marksman gold lane dengan lifesteal tinggi!</span>
              </div>
              <div>
                <button type={"button"} className={`w-36 bg-[#0F3460] py-2 rounded-2xl text-white text-lg font-bold`}>
                  Mulai Belajar
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white border-gray-300 border-2 shadow-lg w-1/3 h-[500px] rounded-lg">
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
              <div>
                <button type={"button"} className={`w-36 bg-[#0F3460] py-2 rounded-2xl text-white text-lg font-bold`}>
                  Mulai Belajar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={`bg-[#436FA0] w-full h-96`}>
        <div className="bg-[#436FA0] flex flex-col h-96 px-44 bg-origin-border mt-12 font-poppins text-white bg-[url('assets/images/balmond.png')] bg-no-repeat bg-contain bg-right-bottom">
          <div className="flex w-full h-5/6">
            <div className="w-1/3">
              <div className="font-bold text-4xl">Dawn Academy</div>
              <div className="mt-4 text-lg">
                Jl. Raya Tidar No. 57, Karangbesuki<br></br>Kec. Sukun, Kota Malang<br></br>
                Jawa Timur 65146
              </div>
            </div>
          </div>
          <div className="text-muted text-xs ">Copyright © 2021 Dawn Academy. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
}

export default App;
