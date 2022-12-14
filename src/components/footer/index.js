import React from "react";

function Footer() {
  return (
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
  );
}

export default Footer;
