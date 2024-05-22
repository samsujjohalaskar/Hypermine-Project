import React, { useState } from 'react';
import { BiCalendar } from "react-icons/bi";

const DatePicker = ({ label, dateTime, setDateTime, placeholder }) => {
  const [showDateTimeInput, setShowDateTimeInput] = useState(false);

  const handleIconClick = () => {
    setShowDateTimeInput(true);
  };

  const handleDateChange = (event) => {
    const formattedDateTime = formatDateTime(event.target.value);
    setDateTime(formattedDateTime);
    setShowDateTimeInput(false); // Hide input after selection (optional)
  };

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const formattedDate = date.toLocaleDateString('en-CA'); // Format as YYYY-MM-DD
    const formattedTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }); // Format as HH:mm
    return `${formattedDate} ${formattedTime}`;
  };

  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[184px]">
      <b className="w-max font-sm relative inline-block shrink-0 text-sm">
        {label}
      </b>
      <div className="self-stretch rounded-8xs bg-primary1 flex flex-row items-start justify-start py-[13px] px-2.5 text-smi-6 text-lightsteelblue border-[0.5px] border-solid border-slate-800">
        <div className="flex-1 flex flex-row items-start justify-between opacity-[0.7] gap-[20px]">
          <div className="relative leading-[21px] font-medium whitespace-nowrap">
            {dateTime || placeholder}
          </div>
          <BiCalendar className="h-5 w-[18px] relative cursor-pointer" onClick={handleIconClick} />
        </div>
      </div>
      {showDateTimeInput && (
        <input
          type="datetime-local"
          className="mt-2 p-2 border border-gray-300 rounded"
          value={dateTime}
          onChange={handleDateChange}
          onBlur={() => setShowDateTimeInput(false)} // Hide input when it loses focus (optional)
        />
      )}
    </div>
  );
};

export default DatePicker;
