/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

function Header(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [animateHeader, setAnimateHeader] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  useEffect(() => {
    if (pathname === "/") {
      const listener = () => {
        if (window.scrollY > 100) {
          setAnimateHeader(true);
        } else setAnimateHeader(false);
      };
      window.addEventListener("scroll", listener);
      return () => {
        window.removeEventListener("scroll", listener);
      };
    } else {
      setAnimateHeader(true);
    }
  }, []);
  return (
    <nav
      className={`w-full bg-white fixed z-10 trasition ease-in-out duration-100 ${
        animateHeader ? " border border-b-2" : props.header ? "!bg-transparent border-0 text-white" : "border-0 text-white"
      } `}
    >
      <div className="justify-between mx-auto md:items-center md:flex md:px-8 ">
        <div className="flex flex-row items-center  w-96">
          <div className="flex items-center justify-between py-3 px-3 md:py-3 md:block">
            <div className="flex">
              {/* <Link to="/"> */}
              <button
                className="flex"
                onClick={() => {
                  navigate("/");
                }}
              >
                <span
                  className={`text-black break-words w-32 leading-none text-left font-bold text-2xl pl-2 ${
                    animateHeader ? " text-black" : props.header ? "!text-white" : "text-black"
                  }`}
                >
                  Dawn Academy
                </span>
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
          <div
            className={`ml-8 flex-1 justify-self-center  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbarOpen ? "block mx-5" : "hidden"} ${
              animateHeader ? "visible" : "invisible"
            }`}
          >
            <ul className={`items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 `}>
              <li className="text-font-primary font-bold  text-lg hover:text-gray-900">
                <button
                  onClick={() => {
                    navigate("/kategori");
                  }}
                >
                  Kategori
                </button>
              </li>
              <li className="text-font-primary font-bold text-lg hover:text-gray-900">
                <button
                  onClick={() => {
                    navigate("/tentang");
                  }}
                >
                  Tentang
                </button>
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
          <a
            href="/masuk"
            className={`px-4 py-1  text-lg font-semibold  ${
              animateHeader ? " text-black" : props.header ? "text-white hover:text-black" : "text-black"
            }`}
          >
            Masuk
          </a>
          <a
            href="/daftar"
            className={`px-4 py-1  text-lg font-semibold  ${
              animateHeader ? " text-black" : props.header ? "text-white hover:text-black" : "text-black"
            }`}
          >
            Daftar
          </a>
          {/* </Link> */}
        </div>
      </div>
    </nav>
  );
}

export default Header;
