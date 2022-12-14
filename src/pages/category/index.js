/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Footer, Header } from "../../components";
import ClassCard from "../../components/classCard";

function Category() {
  const [roleTank, setRoleTank] = useState(false);
  const [roleFighter, setRoleFighter] = useState(false);
  const [roleAssassin, setRoleAssassin] = useState(false);
  const [roleMage, setRoleMage] = useState(false);
  const [roleSupport, setRoleSupport] = useState(false);
  return (
    <div className="w-full min-h-screen flex flex-col mx-auto items-center font-poppins">
      <Header />
      <div className="my-20 w-full px-36 flex justify-center items-center">
        <div className="flex flex-col items-center justify-evenly w-full ">
          <div className="flex w-full items-center flex-row mb-7 mt-6">
            <form className="w-full ">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari barang"
                  className="w-full py-2 pl-4 pr-11 text-gray-500 border-2 rounded-full outline-none bg-gray-50 focus:bg-white focus:border-tandur"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0  w-6 h-6 my-auto text-gray-400 right-4 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </form>
          </div>
          <div className="border-t-gray-300 border-2 w-full mb-8"></div>
          <div className="flex flex-row w-full ">
            <div className="w-1/5">
              <div className="text-2xl font-poppinsSemibold mb-4">Filter</div>
              <div className="text-xl font-poppinsMedium mb-4">Roles</div>
              <div className="my-4">
                <div className="flex items-center mb-2 font-poppins">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    checked={roleTank}
                    onChange={(e) => {
                      setRoleTank(!roleTank);
                    }}
                    className="w-4 h-4 accent-forestgreen checked:bg-black border-white bg-gray-100 rounded focus:ring-tandur"
                  />
                  <label htmlFor="checked-checkbox" className="ml-2 text-md font-poppins">
                    Tank
                  </label>
                </div>
                <div className="flex items-center mb-2 font-poppins">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    checked={roleFighter}
                    onChange={(e) => {
                      setRoleFighter(!roleFighter);
                    }}
                    className="w-4 h-4 accent-forestgreen checked:bg-black border-white bg-gray-100 rounded focus:ring-tandur"
                  />
                  <label htmlFor="checked-checkbox" className="ml-2 text-md font-poppins">
                    Fighter
                  </label>
                </div>
                <div className="flex items-center mb-2 font-poppins">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    checked={roleAssassin}
                    onChange={(e) => {
                      setRoleAssassin(!roleAssassin);
                    }}
                    className="w-4 h-4 accent-forestgreen checked:bg-black border-white bg-gray-100 rounded focus:ring-tandur"
                  />
                  <label htmlFor="checked-checkbox" className="ml-2 text-md font-poppins">
                    Assassin
                  </label>
                </div>
                <div className="flex items-center mb-2 font-poppins">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    checked={roleMage}
                    onChange={(e) => {
                      setRoleMage(!roleMage);
                    }}
                    className="w-4 h-4 accent-forestgreen checked:bg-black border-white bg-gray-100 rounded focus:ring-tandur"
                  />
                  <label htmlFor="checked-checkbox" className="ml-2 text-md font-poppins">
                    Mage
                  </label>
                </div>
                <div className="flex items-center mb-2 font-poppins">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    checked={roleSupport}
                    onChange={(e) => {
                      setRoleSupport(!roleSupport);
                    }}
                    className="w-4 h-4 accent-forestgreen checked:bg-black border-white bg-gray-100 rounded focus:ring-tandur"
                  />
                  <label htmlFor="checked-checkbox" className="ml-2 text-md font-poppins">
                    Support
                  </label>
                </div>
              </div>
            </div>
            <div className="grid gap-4 grid-cols-3 w-4/5 ">
              <ClassCard />
              <ClassCard />
              <ClassCard />
              <ClassCard />
              <ClassCard />
              <ClassCard />
            </div>
          </div>
          <div className="border-t-gray-300 border w-full mt-8 mb-4"></div>
          <div className="flex flex-row w-full justify-between">
            <div>
              Menampilkan <strong className="font-poppinsBold">1</strong> sampai <strong className="font-poppinsBold">8</strong> dari{" "}
              <strong className="font-poppinsBold">100</strong> data
            </div>
            <div>
              <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px">
                  <li>
                    <a
                      href="#"
                      className="px-3 py-2 ml-0 leading-tight  bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      Previous
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="px-3 py-2 leading-tight text-blue-600 text-poppinsSemibold bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="px-3 py-2 leading-tight  bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                      2
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-current="page" className="px-3 py-2  border border-gray-300 ">
                      3
                    </a>
                  </li>
                  <li>
                    <a href="#" className="px-3 py-2 leading-tight  bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                      4
                    </a>
                  </li>
                  <li>
                    <a href="#" className="px-3 py-2 leading-tight  bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                      5
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="px-3 py-2 leading-tight  bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Category;
