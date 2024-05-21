import React from 'react'
import EventTags from './EventTags'
import EventActiveness from './EventActiveness';
import EventReward from './EventReward';
import { FaCircleChevronRight } from "react-icons/fa6";

const EventInfo = ({ event }) => {

    const formatDateRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
        const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: true };

        const formatterDate = new Intl.DateTimeFormat('en-US', optionsDate);
        const formatterTime = new Intl.DateTimeFormat('en-US', optionsTime);

        const startDateString = formatterDate.format(start);
        const startTimeString = formatterTime.format(start);
        const endDateString = formatterDate.format(end);
        const endTimeString = formatterTime.format(end);

        if (start.toDateString() === end.toDateString()) {
            return `${startDateString}, ${startTimeString} to ${endTimeString} EST`;
        } else {
            return `${startDateString}, ${startTimeString} EST to ${endDateString}, ${endTimeString} EST`;
        }
    };

    if (event) {
        return (
            <div className="flex flex-col items-start justify-start gap-[20px] min-w-[719px] max-w-full mq925:min-w-full mq1350:flex-1">
                <div className="flex flex-col items-start justify-start gap-[10px]">
                    <div className="flex flex-col items-start justify-start gap-[10px]">
                        <div className="w-[209px] h-[15px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border text-base">
                            <div className="self-stretch flex flex-row items-start justify-start">
                                <h2 className="m-0 h-[25px] flex-1 relative text-inherit leading-[120%] font-medium font-inherit inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                                    {event.eventName}
                                </h2>
                            </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[10px] text-text4 mq450:flex-wrap">
                            <div className="relative font-medium">
                                {formatDateRange(event.startDate, event.endDate)}
                            </div>
                            <EventActiveness startDate={event.startDate} endDate={event.endDate} />
                        </div>
                        <div className="w-[233px] relative font-medium text-text3 inline-block">
                            {event.participantCount} Participants
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[12px] text-3xs">
                        <div className="flex flex-row items-start justify-start gap-[12px]">
                            <div className="h-[21px] rounded-8xs bg-darkorange flex flex-row items-center justify-center py-0 px-[8.5px] box-border whitespace-nowrap">
                                <b className="relative leading-[24px] inline-block min-w-[32px]">
                                    {event.totalEventXp} EXP
                                </b>
                            </div>
                            <div className="h-[21px] rounded-8xs bg-mediumseagreen flex flex-row items-center justify-center py-0 px-[6.5px] box-border whitespace-nowrap">
                                <b className="relative leading-[24px] inline-block min-w-[49px]">
                                    500 USTD
                                </b>
                            </div>
                        </div>
                        {!(event.rewards.length < 1) && <EventReward />}
                    </div>
                </div>
                <div className="flex flex-row flex-wrap items-center justify-start py-0 pr-[286px] pl-0 gap-[10px] text-3xs text-black mq925:pr-[143px] mq925:box-border mq450:pr-5 mq450:box-border">
                    <EventTags tags={event.tags} />
                    <div className="h-3.5 w-3.5 relative z-1">
                        <FaCircleChevronRight  className='text-text3' size={12}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventInfo
