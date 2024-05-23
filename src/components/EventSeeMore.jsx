import React, { useState } from 'react';
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import SeeMore from "./SeeMore";

const EventSeeMore = () => {
    const [seeMore, showSeeMore] = useState(false);
    return (
        <>
            <div className="ml-auto cursor-pointer" onClick={() => showSeeMore(!seeMore)}>
                <PiDotsThreeOutlineVerticalFill size={16} />
            </div>
            {seeMore && (<SeeMore />)}
        </>
    )
}

export default EventSeeMore
