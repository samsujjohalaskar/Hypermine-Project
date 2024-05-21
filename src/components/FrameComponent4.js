import { Button } from "@mui/material";

const FrameComponent4 = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-end pt-0 px-[35px] pb-[31px] box-border max-w-full shrink-0 text-left text-11xl text-text1 font-body-2">
      <div className="w-[1579px] flex flex-row items-start justify-start relative max-w-full">
        <div className="h-[300px] w-[741px] absolute !m-[0] right-[-409px] bottom-[-193px] [filter:blur(600px)] rounded-[50%] [background:linear-gradient(180deg,_#172556,_#19406d)]" />
        <div className="flex-1 rounded-xl bg-gray-400 flex flex-col items-start justify-start pt-[50px] pb-[110px] pr-[76px] pl-[105px] box-border gap-[15px] shrink-0 [debug_commit:1de1738] max-w-full z-[2] mq925:pl-[26px] mq925:box-border mq1350:pl-[52px] mq1350:pr-[38px] mq1350:box-border">
          <h1 className="m-0 relative text-inherit font-bold font-inherit mq925:text-5xl mq450:text-lg">
            Create Events
          </h1>
          <div className="w-[863px] hidden max-w-full" />
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-base text-text4 mq1350:flex-wrap">
            <div className="w-[886px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border max-w-full shrink-0">
              <h2 className="m-0 self-stretch relative text-inherit leading-[24px] font-normal font-inherit whitespace-pre-wrap">
                Craft an exciting challenges and tasks for participants to win
                amazing prizes effortlessly. Our user-friendly interface and
                powerful tool makes the event creation a breeze. Let's get
                started!"
              </h2>
            </div>
            <Button
              className="h-14 w-[258px]"
              startIcon={<img width="24px" height="24px" src="/vector-1.svg" />}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#2656d6",
                border: "#2656d6 solid 1px",
                borderRadius: "8px",
                "&:hover": { background: "#2656d6" },
                width: 258,
                height: 56,
              }}
            >
              Create Event
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
