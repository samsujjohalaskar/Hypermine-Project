import React from "react";
import EventImage from "./EventImage";
import EventInfo from "./EventInfo";
import EventSeeMore from "./EventSeeMore";

const Event = ({ event }) => {

  if (event) {
    return (
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-[35px] box-border max-w-full shrink-0 text-left text-xs text-text1 font-body-2">
        <div className="w-[1573px] flex flex-col items-start justify-start shrink-0 max-w-full">
          <div className="self-stretch rounded-xl bg-gray-400 box-border flex flex-row items-center justify-start py-[19px] pr-10 pl-5 relative gap-[33px] max-w-full border-[0.5px] border-solid border-text2 mq925:gap-[16px] mq1350:flex-wrap">
            <EventImage src={event.banner} />
            <EventInfo event={event} />
            <EventSeeMore />
          </div>
        </div>
      </div>
    );
  }
};

export default Event;
