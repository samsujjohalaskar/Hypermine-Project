import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import BasicInfo from '../components/BasicInfo';

const FormPage = () => {
    return (
        <div className="w-full relative bg-prymary-blue overflow-hidden flex flex-col items-start justify-start pt-[34px] px-0 pb-[136px] box-border gap-[29px] leading-[normal] tracking-[normal] text-left text-[25.6px] text-text1 font-body-2 mq1350:h-auto">
            <Navbar />
            <BasicInfo />
            <div className="fixed !m-[0] top-[0px] bottom-[0px] left-[0px]">
                <Sidebar />
            </div>
        </div>
    )
}

export default FormPage
