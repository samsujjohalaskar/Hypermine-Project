const FrameComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[221px] pr-5 pl-[297px] shrink-0 text-center text-xs text-text4 font-abhaya-libre mq925:pl-[148px] mq925:box-border mq450:pl-5 mq450:box-border">
      <div className="w-[200px] flex flex-row items-start justify-between shrink-0 [debug_commit:1de1738] gap-[20px]">
        <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
          <img
            className="w-1.5 h-[13px] relative object-contain"
            loading="lazy"
            alt=""
            src="/vector-15.svg"
          />
        </div>
        <div className="w-[92px] flex flex-row items-start justify-start gap-[17px]">
          <div className="h-[23px] flex-1 relative text-text3">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-primary-2 w-full h-full" />
            <div className="absolute top-[5px] left-[4px] font-semibold flex items-end justify-center w-3.5 h-[13px] z-[1]">
              1
            </div>
          </div>
          <div className="flex-[0.6667] flex flex-col items-start justify-start pt-[5px] pb-0 pr-[7px] pl-0">
            <div className="self-stretch relative font-semibold">2</div>
          </div>
          <div className="w-3.5 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
            <div className="self-stretch relative font-semibold">3</div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
          <img
            className="w-1.5 h-[13px] relative"
            loading="lazy"
            alt=""
            src="/vector-16.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
