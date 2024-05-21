import React from 'react'

const EventActiveness = ({ startDate, endDate }) => {

    const currentDate = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    const activeness = currentDate >= start && currentDate <= end ? 1 : 0;

    if (activeness === 0) {
        return (
            <div className="h-[11px] w-[60px] relative text-smi-6 font-medium text-red inline-block shrink-0 [text-shadow:5px_1px_8px_rgba(235,_87,_87,_0.63)]">
                Inactive
            </div>
        )
    } else {
        return (
            <div className="h-[11px] w-[60px] relative text-smi-6 font-medium text-mediumspringgreen inline-block shrink-0 [text-shadow:5px_1px_8px_rgba(62,_249,_185,_0.63)]">
                Active
            </div>
        )
    }
}

export default EventActiveness
