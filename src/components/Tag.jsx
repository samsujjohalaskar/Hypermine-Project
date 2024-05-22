import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const Tag = ({ tag, onRemove }) => {
    return (
        <div className="self-stretch rounded-[14px] bg-icon-clr2 flex flex-row items-center justify-center py-[1.5px] px-[15.5px] gap-2 border-[2px] border-solid border-icon-clr2">
            <div className="self-stretch w-max relative leading-[21px] font-medium inline-block">
                {tag}
            </div>
            <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                <RxCross2 className="w-4 h-4 relative overflow-hidden shrink-0 cursor-pointer" onClick={() => onRemove(tag)} />
            </div>
        </div>
    );
};

export default Tag;