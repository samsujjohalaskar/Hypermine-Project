import Navbar from "../components/Navbar";
import CreateEvents from "../components/CreateEvents";
import Sidebar from "../components/Sidebar";
import EventsContainer from "../components/EventsContainer";
import { IoReorderThreeSharp } from "react-icons/io5";
import { useState } from "react";

const EventsPageorganiser = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="bg-gray-100 hidden mq1825:block p-2 fixed z-40 w-full" onClick={() => setShowSidebar(true)}>
        <IoReorderThreeSharp size={35} color={"white"} />
      </div>
      <div className="w-full relative bg-prymary-blue overflow-hidden flex flex-col items-start justify-start pt-[20px] px-0 pb-[136px] box-border gap-[29px] leading-[normal] tracking-[normal] text-left text-[25.6px] text-text1 font-body-2 mq1350:h-auto mq1825:pt-16">
        <Navbar />
        <CreateEvents />
        <EventsContainer />
        <div className="fixed !m-[0] top-[0px] bottom-[0px] left-[0px] z-50">
          <Sidebar showSidebar={showSidebar} onShowbar={() => setShowSidebar(false)} />
        </div>
      </div>
    </>
  );
};

export default EventsPageorganiser;
