import React from 'react'

const EventTags = ({ tags }) => {
    return (
        <div className="flex flex-row items-start justify-start py-0 px-0 gap-[10px] mq450:flex-wrap">
            {tags.map((item, index) => (
                <div key={index} className="rounded-4xl bg-antiquewhite flex flex-row items-center justify-center py-px px-6 opacity-[0.9]">
                    <div className="relative leading-[150%] font-semibold inline-block min-w-[45px]">
                        {item}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default EventTags
