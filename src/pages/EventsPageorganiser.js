import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Sidebar from "../components/Sidebar";

const EventsPageorganiser = () => {
  return (
    <div className="w-full h-[1786px] relative bg-prymary-blue overflow-hidden flex flex-col items-start justify-start pt-[34px] px-0 pb-[136px] box-border gap-[29px] leading-[normal] tracking-[normal] text-left text-[25.6px] text-text1 font-body-2 mq1350:h-auto">
      <FrameComponent5 />
      <FrameComponent4 />
      <div className="w-[779px] flex flex-row items-start justify-center pt-0 px-5 pb-3 box-border max-w-full shrink-0">
        <b className="relative shrink-0 [debug_commit:1de1738] mq450:text-[20px]">
          Your Events
        </b>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end pt-0 px-[35px] pb-[7px] box-border max-w-full shrink-0 text-base text-text4">
        <div className="w-[1560px] flex flex-row items-end justify-between shrink-0 [debug_commit:1de1738] max-w-full gap-[20px] mq1350:flex-wrap mq1350:justify-center">
          <div className="w-[724px] flex flex-col items-start justify-end pt-0 px-0 pb-[7px] box-border max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq925:flex-wrap">
              <h2 className="m-0 relative text-inherit leading-[140%] font-bold font-inherit text-text3 inline-block min-w-[22px]">
                All
              </h2>
              <h2 className="m-0 relative text-inherit leading-[140%] font-bold font-inherit inline-block min-w-[71px]">
                Ongoing
              </h2>
              <h2 className="m-0 relative text-inherit leading-[140%] font-bold font-inherit inline-block min-w-[97px]">
                Completed
              </h2>
              <h2 className="m-0 relative text-inherit leading-[140%] font-bold font-inherit inline-block min-w-[54px] z-[2]">
                Drafts
              </h2>
              <h2 className="m-0 w-[212px] relative text-inherit leading-[140%] font-bold font-inherit inline-block shrink-0 z-[2]">{`Pending Rewards `}</h2>
            </div>
          </div>
          <TextField
            className="[border:none] bg-[transparent] h-10 w-[464px] font-body-2 text-smi-6 text-gray-200 max-w-full z-[1]"
            placeholder="Search events by name or tags"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <img width="12.2px" height="12px" src="/search.svg" />
              ),
            }}
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "40px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                paddingLeft: "15.199999999999989px",
                borderRadius: "25px",
                fontSize: "12.6px",
              },
              "& .MuiInputBase-input": {
                paddingLeft: "27.600000000000023px",
                color: "rgba(255, 255, 255, 0.7)",
              },
              width: "464px",
            }}
          />
        </div>
      </div>
      <div className="w-[704.7px] h-[59.1px] relative hidden max-w-full z-[4]" />
      <FrameComponent3 />
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover hidden z-[6]"
        alt=""
        src="/1457718455276-1@2x.png"
      />
      <div className="self-stretch flex flex-row items-start justify-end pt-0 px-[35px] pb-9 box-border max-w-full shrink-0">
        <FrameComponent1 />
      </div>
      <FrameComponent />
      <div className="self-stretch h-[941px] flex flex-row items-start justify-end pt-0 px-[3px] pb-[641px] box-border max-w-full shrink-0 mq925:pb-[271px] mq925:box-border mq1350:pb-[417px] mq1350:box-border">
        <div className="self-stretch w-[761px] relative [filter:blur(600px)] rounded-[50%] [background:linear-gradient(180deg,_#172556,_#19406d)] shrink-0 [debug_commit:1de1738] max-w-full" />
      </div>
      <main className="self-stretch flex flex-row items-end justify-start pt-0 px-[574px] pb-[587px] box-border gap-[234px] shrink-0 [debug_commit:1de1738] max-w-full mq925:gap-[58px] mq925:pl-[143px] mq925:pr-[143px] mq925:pb-[248px] mq925:box-border mq450:gap-[29px] mq450:pl-5 mq450:pr-5 mq450:pb-[161px] mq450:box-border mq1350:gap-[117px] mq1350:pl-[287px] mq1350:pr-[287px] mq1350:pb-[382px] mq1350:box-border mq1825:flex-wrap">
        <div className="ml-[-1040px] h-[769px] w-[806px] flex flex-col items-start justify-start py-0 pr-[37px] pl-0 box-border max-w-[105%] shrink-0">
          <div className="self-stretch flex-1 relative [filter:blur(600px)] rounded-[50%] bg-shadow2 shrink-0 [debug_commit:1de1738]" />
        </div>
        <div className="h-[839px] w-[769px] flex flex-col items-start justify-start max-w-full shrink-0">
          <div className="self-stretch h-[769px] relative [filter:blur(600px)] rounded-[50%] [background:linear-gradient(180deg,_rgba(24,_36,_79,_0.5),_rgba(30,_80,_255,_0))] shrink-0 [debug_commit:1de1738]" />
        </div>
        <div className="h-[975px] w-[769px] flex flex-col items-start justify-start max-w-full shrink-0">
          <div className="self-stretch h-[769px] relative [filter:blur(600px)] rounded-[50%] bg-shadow2 shrink-0 [debug_commit:1de1738]" />
        </div>
      </main>
      <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-40 box-border max-w-full shrink-0 mq450:pb-[68px] mq450:box-border mq1350:pb-[104px] mq1350:box-border">
        <div className="w-[1390px] flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border gap-[252px] shrink-0 [debug_commit:1de1738] max-w-full mq925:gap-[63px] mq450:gap-[31px] mq1350:gap-[126px] mq1825:flex-wrap">
          <div className="h-[343px] w-[849px] relative [filter:blur(600px)] rounded-[50%] [background:linear-gradient(180deg,_rgba(24,_36,_79,_0.5),_rgba(30,_80,_255,_0))] min-w-[849px] shrink-0 [debug_commit:1de1738] max-w-full mq925:min-w-full mq1825:flex-1" />
          <div className="h-[769px] w-[769px] relative [filter:blur(600px)] rounded-[50%] bg-shadow2 min-w-[769px] shrink-0 [debug_commit:1de1738] max-w-full mq925:min-w-full mq1825:flex-1" />
        </div>
      </div>
      <div className="self-stretch h-[702px] flex flex-row items-start justify-center pt-0 pb-[235px] pr-5 pl-[103px] box-border max-w-full shrink-0 mq925:pl-[25px] mq925:pb-[153px] mq925:box-border mq1350:pl-[51px] mq1350:box-border">
        <div className="self-stretch w-[1161px] relative [filter:blur(400px)] rounded-[50%] [background:linear-gradient(180deg,_rgba(30,_80,_255,_0.2),_rgba(112,_238,_255,_0.2))] shrink-0 [debug_commit:1de1738] max-w-full" />
      </div>
      <div className="ml-[-291px] mb-[1080px] w-[656px] h-[636px] relative [filter:blur(600px)] rounded-[50%] bg-shadow2 shrink-0 [debug_commit:1de1738] max-w-full" />
      <div className="self-stretch h-[1312px] flex flex-row items-start justify-center pt-0 pb-[543px] pr-5 pl-[43px] box-border max-w-full shrink-0 mq925:pl-[21px] mq925:pb-[229px] mq925:box-border mq1350:pb-[353px] mq1350:box-border">
        <div className="self-stretch w-[769px] relative [filter:blur(600px)] rounded-[50%] bg-shadow2 shrink-0 [debug_commit:1de1738] max-w-full" />
      </div>
      <div className="w-[1881px] h-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px]">
        <div className="absolute top-[540px] left-[702px] [filter:blur(500px)] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(217,_217,_217,_0))] w-[575px] h-[575px]" />
        <div className="absolute top-[872px] left-[-313px] [filter:blur(600px)] rounded-[50%] [background:linear-gradient(180deg,_rgba(30,_80,_255,_0.31),_rgba(0,_0,_0,_0.5))] w-[720px] h-[720px]" />
        <div className="absolute top-[-366px] left-[-385px] [filter:blur(600px)] rounded-[50%] [background:linear-gradient(180deg,_rgba(30,_80,_255,_0.31),_rgba(0,_0,_0,_0.5))] w-[720px] h-[720px]" />
        <div className="absolute top-[139px] left-[691px] [filter:blur(600px)] rounded-[50%] [background:linear-gradient(180deg,_rgba(30,_80,_255,_0.31),_rgba(0,_0,_0,_0.5))] w-[720px] h-[720px] z-[1]" />
        <img
          className="absolute top-[626px] left-[312px] w-[1569px] h-1 z-[2]"
          loading="lazy"
          alt=""
          src="/group-48098368.svg"
        />
        <Sidebar />
      </div>
      <div className="w-[248px] rounded-3xs bg-primary-1 box-border hidden flex-col items-start justify-start py-[21px] px-[23px] gap-[18px] z-[16] text-sm text-text3 border-[1px] border-solid border-darkslategray">
        <div className="w-[151px] flex flex-row items-center justify-start gap-[23px]">
          <img
            className="h-[53px] w-[53px] relative rounded-14xl object-cover min-h-[53px]"
            alt=""
            src="/rectangle-290@2x.png"
          />
          <div className="h-[51px] flex-1 flex flex-col items-start justify-center gap-[6px]">
            <div className="self-stretch relative leading-[150%] font-semibold">
              Nitro
            </div>
            <div className="w-[54px] h-[17px] rounded-lg box-border flex flex-row items-center justify-center py-2 px-[9px] text-center text-3xs text-text1 border-[1px] border-solid border-text1">
              <div className="relative leading-[100%] font-semibold">Owner</div>
            </div>
          </div>
        </div>
        <div className="w-[167px] flex flex-row items-center justify-start gap-[16px]">
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0"
            alt=""
            src="/gridiconsaddoutline.svg"
          />
          <div className="h-[18px] flex-1 relative leading-[150%] font-semibold flex items-center">
            New community
          </div>
        </div>
      </div>
      <footer className="self-stretch flex flex-row items-start justify-start py-0 pr-[1299px] pl-[1534px] box-border gap-[913px] shrink-0 [debug_commit:1de1738] max-w-full mq925:gap-[228px] mq925:pl-[383px] mq925:pr-[324px] mq925:box-border mq450:gap-[114px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1350:gap-[456px] mq1350:pl-[767px] mq1350:pr-[649px] mq1350:box-border mq1825:flex-wrap mq1825:justify-center">
        <div className="ml-[-1549px] h-[661px] w-[636px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border max-w-full shrink-0">
          <div className="self-stretch flex-1 relative [filter:blur(600px)] rounded-[50%] bg-shadow2 shrink-0 [debug_commit:1de1738]" />
        </div>
        <div className="h-[636px] w-[636px] relative [filter:blur(600px)] rounded-[50%] bg-shadow2 shrink-0 [debug_commit:1de1738] max-w-full" />
      </footer>
    </div>
  );
};

export default EventsPageorganiser;
