import React from 'react';
import { IoReorderThreeSharp } from "react-icons/io5";

const ThreeLineButton = ({ onThreeLineClick }) => {
    return (
        <div className="bg-gray-100 text-three-line [backdrop-filter:blur(14px)] hidden mq1825:block pl-3 pt-1 fixed z-40 w-full" onClick={onThreeLineClick}>
            <IoReorderThreeSharp size={40} />
        </div>
    )
}

export default ThreeLineButton
