import React from "react";

const Navbar = () => {
  return (
    <header className="fixed self-stretch flex flex-row items-start justify-end pt-0 px-[35px] pb-[31px] box-border max-w-full shrink-0 pl-72 z-10 adjust-pl"> {/* adjust-pl is a customized media query, check global.css */}
      <div className="w-[1587px] [backdrop-filter:blur(14px)] rounded-3xs bg-gray-100 flex flex-row items-end justify-between py-[13px] pr-[34px] pl-[29px] box-border shrink-0 [debug_commit:1de1738] gap-[20px] max-w-full z-[1]">
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.2px]">
          <img
            className="w-[29px] h-[42.6px] relative"
            loading="lazy"
            alt=""
            src="/group-48098215.svg"
          />
        </div>
        <div className="w-[183px] flex flex-row items-start justify-start gap-[25px]">
          <div className="h-[45px] w-[45px] relative rounded-11xl bg-primary1">
            <div className="absolute top-[0px] left-[0px] rounded-11xl bg-primary1 w-full h-full hidden" />
            <img
              className="absolute top-[16px] left-[7px] w-2.5 h-2.5 z-[1]"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <img
              className="absolute top-[12px] left-[21px] w-4 h-[18px] z-[1]"
              loading="lazy"
              alt=""
              src="/group-48098419.svg"
            />
          </div>
          <div className="flex-1 flex flex-row items-center justify-start">
            <div className="flex-1 flex flex-row items-center justify-center">
              <div className="flex-1 flex flex-row items-center justify-between gap-[20px]">
                <div className="h-11 w-11 relative">
                  <div className="absolute top-[0px] left-[0px] w-full h-full">
                    <div className="absolute top-[0px] left-[0px] rounded-3xl bg-primary1 w-full h-full" />
                    <div className="absolute top-[10px] left-[10px] h-[19px] flex flex-row items-start justify-start py-0 px-0 box-border z-[1]">
                      <img
                        className="h-[23px] w-[26px] relative"
                        loading="lazy"
                        alt=""
                        src="/icon--notification.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="h-[42px] w-11 relative">
                  <div className="absolute top-[0px] left-[0px] rounded-8xl bg-whitesmoke box-border w-full h-full border-[1px] border-solid border-icon-clr2" />
                  <div className="absolute top-[0px] left-[0px] rounded-8xl bg-light-version-background box-border w-full h-full z-[1] border-[1px] border-solid border-icon-clr2" />
                  <img
                    className="absolute top-[0px] left-[0px] rounded-14xl w-full h-full object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/rectangle-115@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
