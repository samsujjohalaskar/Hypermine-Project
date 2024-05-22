import React from 'react';
import { HiUserPlus } from "react-icons/hi2";
import { IoNotifications } from "react-icons/io5";

const NavbarSideLogos = () => {
    return (
        <>
            <div className="h-[45px] w-[45px] relative rounded-11xl bg-primary1 flex flex-row items-center justify-center">
                <HiUserPlus />
            </div>
            <div className="h-[45px] w-[45px] relative rounded-11xl bg-primary1 flex flex-row items-center justify-center">
                <IoNotifications />
            </div>
            <div className="h-[45px] w-[45px] relative rounded-11xl bg-primary1 flex flex-row items-center justify-center">
                <img
                    className="absolute top-[0px] left-[0px] rounded-14xl w-full h-full object-cover"
                    loading="lazy"
                    alt=""
                    src="/rectangle-115@2x.png"
                />
            </div>
        </>
    )
}

export default NavbarSideLogos
