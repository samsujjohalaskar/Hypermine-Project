import React from "react";
import { Button } from "@mui/material";
import { RxCross2 } from "react-icons/rx";

const Sidebar = ({ showSidebar, onShowbar }) => {
  return (
    <div className={`top-[2px] ${!showSidebar ? "mq1825:hidden bg-gray-100" : "bg-prymary-blue"} left-[0px] rounded-xl box-border w-[265px] h-screen text-left text-sm text-text3 font-body-2 border-[1px] border-solid border-stroke-2`}>
      <div className="absolute top-[0px] left-[0px] rounded-xl bg-gainsboro box-border w-full h-screen hidden border-[1px] border-solid border-stroke-2" />
      <div className="absolute top-[172px] left-[23px] rounded-lg bg-gray-400 box-border w-[221px] overflow-hidden flex flex-col items-start justify-start py-[9px] px-0 text-xs border-[1px] border-solid border-stroke1">
        <div className="w-[157px] flex flex-col items-start justify-start py-0 px-5 box-border">
          <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
            <img
              className="h-[31px] w-[30px] relative object-cover"
              alt=""
              src="/group-48098353@2x.png"
            />
            <div className="flex-1 relative leading-[18.6px] font-semibold">
              Events
            </div>
          </div>
        </div>
      </div>
      <RxCross2 onClick={onShowbar} className="float-right text-5xl m-5 hidden mq1825:block" />
      <div className="absolute top-[40px] left-[24px] w-[151px] flex flex-row items-center justify-start gap-[23px]">
        <button className="cursor-pointer [border:none] p-[11px] bg-primary1 h-[53px] w-[53px] rounded-121xl flex flex-row items-center justify-center box-border">
          <img
            className="h-[31px] w-[31px] relative object-contain"
            alt=""
            src="/image-142@2x.png"
          />
        </button>
        <div className="flex-1 flex flex-col items-start justify-center py-[3.5px] px-0 gap-[6px]">
          <h3 className="m-0 self-stretch relative text-inherit leading-[150%] font-semibold font-inherit">
            Nibiru
          </h3>
          <div className="w-[54px] rounded-lg box-border flex flex-row items-center justify-center py-0.5 px-[9px] text-center text-3xs text-text1 border-[1px] border-solid border-text1">
            <div className="relative leading-[100%] font-semibold inline-block min-w-[34px]">
              Owner
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[78.5px] left-[244px] w-6 h-6 overflow-hidden [transform:_rotate(-180deg)] [transform-origin:0_0]" />
      <img
        className="absolute top-[122px] left-[11px] w-[233.3px] h-px z-50"
        loading="lazy"
        alt=""
        src="/vector-6.svg"
      />
      <div className="absolute top-[692px] left-[24px] rounded-xl bg-gray-400 w-[216px] h-[185.3px]">
        <div className="absolute bottom-[134.2px] left-[calc(50%_-_93px)] rounded-xl bg-text1 w-[35px] h-[36.1px]">
          <div className="absolute bottom-[0px] left-[calc(50%_-_17.5px)] rounded-xl bg-text1 w-full h-full hidden" />
          <img
            className="absolute bottom-[5.6px] left-[calc(50%_-_12px)] w-6 h-[24.8px] overflow-hidden"
            loading="lazy"
            alt=""
            src="/ioniconhhelpcircle.svg"
          />
        </div>
        <h3 className="m-0 absolute top-[97px] left-[16px] text-inherit leading-[18px] font-normal font-inherit flex items-center w-[165px] h-[18px]">
          Please check our docs
        </h3>
        <h3 className="m-0 absolute top-[77.1px] left-[15px] text-inherit leading-[140%] font-normal font-inherit flex items-center w-[86px] h-[19.6px] min-w-[86px]">
          Need help?
        </h3>
        <Button
          className="absolute top-[141px] left-[15px]"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#2d3748",
            fontSize: "10",
            background: "#f6f6f7",
            borderRadius: "20px",
            "&:hover": { background: "#f6f6f7" },
            width: 186,
            height: 29,
          }}
        >
          DOCUMENTATION
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
