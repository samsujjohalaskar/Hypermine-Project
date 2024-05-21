import { useMemo } from "react";

const FrameComponent2 = ({ untitled11, propBackgroundColor }) => {
  const frameDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className="self-stretch rounded-xl bg-gray-400 box-border flex flex-row items-center justify-start py-[19px] pr-[39px] pl-5 relative gap-[33px] max-w-full text-left text-base text-text3 font-body-2 border-[0.5px] border-solid border-text2 mq925:gap-[16px] mq1350:flex-wrap"
      style={frameDivStyle}
    >
      <img
        className="h-[158px] w-[275px] relative rounded-xl object-cover mq1350:flex-1"
        loading="lazy"
        alt=""
        src={untitled11}
      />
      <div className="w-[719px] flex flex-col items-start justify-start gap-[20px] min-w-[719px] max-w-full mq925:min-w-full mq1350:flex-1">
        <div className="flex flex-col items-start justify-start gap-[10px]">
          <div className="flex flex-col items-start justify-start gap-[10px] text-text1">
            <div className="w-[209px] flex flex-row items-start justify-start">
              <h2 className="m-0 flex-1 relative text-inherit leading-[16px] font-medium font-inherit overflow-hidden text-ellipsis whitespace-nowrap">
                NFT AIRPOD
              </h2>
            </div>
            <div className="flex flex-row items-start justify-start gap-[10px] text-xs text-text4 mq450:flex-wrap">
              <div className="relative font-medium">
                December 01, 2021, 4:20AM to 4:20PM EST
              </div>
              <div className="h-[11px] w-[60px] relative text-smi-6 font-medium text-mediumspringgreen inline-block shrink-0 [text-shadow:5px_1px_8px_rgba(62,_249,_185,_0.63)]">
                Active
              </div>
            </div>
          </div>
          <div className="w-[233px] relative text-xs inline-block">
            10 Participants
          </div>
          <div className="flex flex-row items-center justify-start gap-[12px] text-3xs">
            <div className="flex flex-row items-start justify-start gap-[12px]">
              <div className="h-[21px] rounded-8xs bg-darkorange flex flex-row items-center justify-center py-0 px-[8.5px] box-border whitespace-nowrap">
                <b className="relative leading-[24px] inline-block min-w-[32px]">
                  10 EXP
                </b>
              </div>
              <div className="h-[21px] rounded-8xs bg-mediumseagreen flex flex-row items-center justify-center py-0 px-[6.5px] box-border whitespace-nowrap">
                <b className="relative leading-[24px] inline-block min-w-[49px]">
                  500 USTD
                </b>
              </div>
            </div>
            <div className="h-6 w-6 relative">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full"
                alt=""
                src="/group-48098456.svg"
              />
              <img
                className="absolute top-[5px] left-[5px] w-[15px] h-[15px] object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/guaranteed-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-[18px] pl-0 box-border gap-[10px] min-h-[40px] text-3xs text-black">
          <div className="flex flex-row items-start justify-start py-0 px-0 gap-[10px] mq450:flex-wrap">
            <div className="rounded-4xl bg-antiquewhite flex flex-row items-center justify-center py-0 px-6 opacity-[0.9]">
              <div className="relative leading-[150%] font-semibold inline-block min-w-[45px]">
                PlayEarn
              </div>
            </div>
            <div className="rounded-4xl bg-antiquewhite flex flex-row items-center justify-center py-0 px-6 opacity-[0.9]">
              <div className="relative leading-[150%] font-semibold inline-block min-w-[55px]">
                Avalanche
              </div>
            </div>
            <div className="rounded-4xl bg-antiquewhite flex flex-row items-center justify-center py-0 px-6 opacity-[0.9]">
              <div className="relative leading-[150%] font-semibold inline-block min-w-[38px]">
                Airdrop
              </div>
            </div>
          </div>
          <div className="rounded-4xl bg-antiquewhite flex flex-row items-center justify-center py-0 px-6 opacity-[0.9]">
            <div className="relative leading-[150%] font-semibold inline-block min-w-[50px]">
              Ethereum
            </div>
          </div>
          <div className="rounded-4xl bg-antiquewhite flex flex-row items-center justify-center py-0 px-6 opacity-[0.9]">
            <div className="relative leading-[150%] font-semibold inline-block min-w-[48px]">
              Harmony
            </div>
          </div>
          <div className="rounded-4xl bg-antiquewhite flex flex-row items-center justify-center py-0 px-6 opacity-[0.9]">
            <div className="relative leading-[150%] font-semibold inline-block min-w-[17px]">
              Did
            </div>
          </div>
          <div className="rounded-4xl bg-antiquewhite flex flex-row items-center justify-center py-0 px-6 opacity-[0.9]">
            <div className="relative leading-[150%] font-semibold inline-block min-w-[54px]">
              Metaverse
            </div>
          </div>
          <div className="rounded-4xl bg-antiquewhite flex flex-row items-center justify-center py-0 px-6 opacity-[0.9]">
            <div className="relative leading-[150%] font-semibold inline-block min-w-[20px]">
              Defi
            </div>
          </div>
          <div className="rounded-4xl bg-antiquewhite flex flex-row items-center justify-center py-0 px-6 opacity-[0.9]">
            <div className="relative leading-[150%] font-semibold inline-block min-w-[42px]">
              Cosmos
            </div>
          </div>
          <div className="rounded-4xl bg-antiquewhite flex flex-row items-center justify-center py-0 px-6 opacity-[0.9]">
            <div className="relative leading-[150%] font-semibold inline-block min-w-[19px]">
              NFT
            </div>
          </div>
          <img
            className="h-3.5 w-3.5 relative object-contain"
            loading="lazy"
            alt=""
            src="/group-47040-1@2x.png"
          />
          <div className="h-[15px] w-[67px]" />
        </div>
      </div>
      <div className="!m-[0] absolute top-[39px] left-[1526px] overflow-hidden flex flex-col items-center justify-start py-0 pr-[3px] pl-[2.6px] gap-[2px]">
        <img
          className="w-[2.8px] h-[3px] relative"
          loading="lazy"
          alt=""
          src="/vector-3.svg"
        />
        <img
          className="w-[2.8px] h-[3px] relative"
          alt=""
          src="/vector-4.svg"
        />
        <img
          className="w-[2.8px] h-[3px] relative"
          alt=""
          src="/vector-5.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent2;
