import React from "react";
import { Button } from "@mui/material";
import { FaPlus } from "react-icons/fa6";

const CreateEvents = ({onCreateEvent}) => { 
  return (
    <div className="self-stretch flex flex-row items-start justify-end pt-0 px-[35px] pb-[31px] box-border max-w-full shrink-0 text-left text-11xl text-text1 font-body-2 mq1825:w-max mq2500:w-max mq2500:pl-80">
      <div className="w-[1579px] flex flex-row items-start justify-start relative max-w-full pt-32">
        <div className="flex-1 rounded-xl bg-gray-400 flex flex-col items-start justify-start pt-[50px] pb-[110px] pr-[76px] pl-[105px] box-border gap-[15px] shrink-0 max-w-full mq925:pl-[26px] mq925:box-border mq1350:pl-[52px] mq1350:pr-[38px] mq1350:box-border">
          <h1 className="m-0 relative text-inherit font-bold font-inherit mq925:text-5xl mq450:text-lg">
            Create Events
          </h1>
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
              onClick={onCreateEvent}
              className="h-14 w-max pl-12 pr-12 font-bold text-sm gap-1"
              startIcon={
                <FaPlus size={20} />
              }
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "24",
                background: "#2656d6",
                border: "#2656d6 solid 1px",
                borderRadius: "8px",
                "&:hover": {
                  background: "#fff",
                  color: "#000",
                },
                width: 258,
                height: 56,
                "&:hover svg": {
                  fill: "#000",
                },
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

export default CreateEvents;
