import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Event from "../components/Event";
import Paginator from "../components/Paginator";

const EventsContainer = () => {
    const limit = 10;
    const [status, setStatus] = useState("All");
    const [pageNumber, setPageNumber] = useState(2);
    const [eventList, setEventList] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch(`https://api.fyre-stage.hypersign.id/api/v1/event?page=${pageNumber}&limit=${limit}`);
                const data = await response.json();
                setEventList(data.data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, [pageNumber]);

    return (
        <>
            <div className="w-[779px] flex flex-row items-start justify-center pt-0 px-5 pb-3 box-border max-w-full shrink-0">
                <b className="relative shrink-0 [debug_commit:1de1738] mq450:text-xl">
                    Your Events
                </b>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end pt-0 px-[35px] pb-[7px] box-border max-w-full shrink-0 text-base text-text4">
                <div className="w-[1560px] flex flex-row items-end justify-between shrink-0 [debug_commit:1de1738] max-w-full gap-[20px] mq1350:flex-wrap mq1350:justify-center">
                    <div className="w-[724px] flex flex-col items-start justify-end pt-0 px-0 pb-[7px] box-border max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq925:flex-wrap">
                            {["All", "Ongoing", "Completed", "Drafts", "Pending Rewards"].map((item, index) => (
                                <h2 onClick={() => setStatus(item)} key={index} className={`${status === item ? "text-text3" : ""} cursor-pointer m-0 relative text-inherit leading-[140%] font-bold font-inherit inline-block min-w-[22px]`}>
                                    {item}
                                </h2>
                            ))}
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
            {eventList && eventList.map((e, i) => (
                <Event event={e} />
            ))}
            <Paginator pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </>
    )
}

export default EventsContainer
