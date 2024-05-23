import React from "react";

const IconText = ({ icon: Icon, text }) => {
    return (
        <div className="flex flex-row items-center justify-start gap-[15px]">
            <Icon size={20}/>
            <div className="relative leading-[17px] font-medium inline-block min-w-[23px]">
                {text}
            </div>
        </div>
    );
};

export default IconText;