import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import BasicInfo from '../components/BasicInfo';
import ThreeLineButton from '../components/ThreeLineButton';

const FormPage = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            <ThreeLineButton onThreeLineClick={() => setShowSidebar(true)} />
            <div className="min-h-dvh w-full relative bg-gradient-to-r from-prymary-blue via-via-color to-prymary-blue overflow-hidden flex flex-col items-start justify-start pt-[20px] px-0 pb-[136px] box-border gap-[29px] leading-[normal] tracking-[normal] text-left text-[25.6px] text-text1 font-body-2 mq1350:h-auto mq1825:pt-16"> {/*check tailwind.config.css for colors combination*/}
                <Navbar />
                <BasicInfo />
                <div className="fixed !m-[0] top-[0px] bottom-[0px] left-[0px] z-50 min1900:bg-gradient-to-r from-via-color">
                    <Sidebar showSidebar={showSidebar} onShowbar={() => setShowSidebar(false)} />
                </div>
            </div>
        </>
    )
}

export default FormPage
