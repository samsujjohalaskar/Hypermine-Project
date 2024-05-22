import React from "react";

import NavbarSideLogos from "./NavbarSideLogos";

const Navbar = () => {
  return (
    <header className="fixed self-stretch flex flex-row items-start justify-end pt-0 px-[35px] pb-[31px] box-border max-w-full shrink-0 pl-72 z-10 adjust-pl"> {/* adjust-pl is a customized media query, check global.css */}
      <div className="w-[1587px] [backdrop-filter:blur(14px)] rounded-3xs bg-gray-100 flex flex-row items-end justify-between py-[13px] pr-[34px] pl-[29px] box-border shrink-0 gap-[20px] max-w-full z-1">
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.2px]">
          <img
            className="w-[29px] h-[42.6px] relative"
            loading="lazy"
            alt=""
            src="/group-48098215.svg"
          />
        </div>
        <div className="w-[183px] flex flex-row items-center justify-center gap-[25px]">
          <NavbarSideLogos />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
