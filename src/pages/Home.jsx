import Navbar from "../components/Navbar";
import CreateEvents from "../components/CreateEvents";
import Sidebar from "../components/Sidebar";
import EventsContainer from "../components/EventsContainer";
import { useState } from "react";
import ThreeLineButton from "../components/ThreeLineButton";
import BasicInfo from "../components/BasicInfo";

const EventsPageorganiser = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showCreateEvent, setShowCreateEvent] = useState(false); {/* if true then show the form */ }

  const handleEventForm = () => {
    setShowCreateEvent(true);
    alert("To return this page, please reload.");
  }

  return (
    <>
      <ThreeLineButton onThreeLineClick={() => setShowSidebar(true)} />
      <div className="min-h-dvh w-full bg-gradient-to-r from-prymary-blue via-via-color to-prymary-blue relative overflow-hidden flex flex-col items-start justify-start pt-[20px] px-0 pb-[136px] box-border gap-[29px] leading-[normal] tracking-[normal] text-left text-[25.6px] text-text1 font-body-2 mq1350:h-auto mq1825:pt-16"> {/*check tailwind.config.css for colors combination*/}
        <Navbar />
        {showCreateEvent ? (
          <BasicInfo />
        ) : (
          <>
            <CreateEvents onCreateEvent={handleEventForm} />
            <EventsContainer />
          </>
        )}
        <div className="fixed !m-[0] top-[0px] bottom-[0px] left-[0px] z-50 min1900:bg-gradient-to-r from-via-color">
          <Sidebar showSidebar={showSidebar} onShowbar={() => setShowSidebar(false)} />
        </div>
      </div>
    </>
  );
};

export default EventsPageorganiser;
