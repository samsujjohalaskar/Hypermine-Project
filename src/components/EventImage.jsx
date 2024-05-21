import React from 'react'

const EventImage = ({src}) => {
    return (
        <img
            className="h-[158px] w-[275px] relative rounded-xl object-cover mq1350:flex-1"
            loading="lazy"
            alt=""
            src={src}
        />
    )
}

export default EventImage
