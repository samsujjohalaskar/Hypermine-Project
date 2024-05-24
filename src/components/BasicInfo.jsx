import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import InputField from './InputField';
import DatePicker from './DatePicker';
import TagsContainer from './TagsContainer';
import { communityId, token } from '../utils/secret';

const BasicInfo = () => {
    const [value, setValue] = useState('');
    const [startDateTime, setStartDateTime] = useState('');
    const [endDateTime, setEndDateTime] = useState('');
    const [eventName, setEventName] = useState('');
    const [bannerImage, setBannerImage] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);

    const handleSave = async () => {
        const requestBody = {
            communityId: communityId,
            eventName: eventName,
            banner: bannerImage,
            startDate: startDateTime,
            endDate: endDateTime,
            isDraft: false,
            isPublished: true,
            tags: selectedTags,
            isOpenToAll: false,
            referral: {
                refereeXp: 0,
                referralXp: 0,
                difficultyLevel: 0,
                limit: 0
            },
            rewards: [
                {
                    rewardType: "NFT",
                    title: "ERC720 worth 50$",
                    winnerCount: 0,
                    rewardPerPerson: 0,
                    distributionType: "FYRE"
                }
            ],
            description: value
        };console.log(requestBody);

        try {
            const response = await fetch('https://api.fyre-stage.hypersign.id/api/v1/event', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);
            alert('Event created successfully:');

        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    const handleChange = (event) => {
        setEventName(event.target.value);
    };

    const handleFileChange = (url) => {
        setBannerImage(url);
    };

    function countTextOnly(inputString) {
        const textOnly = inputString.replace(/<[^>]*>/g, '');
        const count = textOnly.length;
        return count;
    }

    return (
        <div className="w-[1676px] flex flex-row flex-wrap items-start justify-start pt-20 pl-80 box-border gap-64 max-w-full mq450:gap-[24px] mq450:pl-4 mq925:gap-[48px] mq1825:pl-40 mq1825:pt-14 mq1350:gap-10 mq925:pl-12">
            <div className="w-max flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border">
                <div className="fixed self-stretch flex flex-col items-start justify-start gap-4 mq1350:gap-2 mq1350:relative mq925:gap-1">
                    <h1 className="m-0 w-max relative text-inherit font-bold font-inherit inline-block mq450:text-lg">
                        Create Events
                    </h1>
                    <div className="self-stretch flex gap-4 flex-row justify-center items-center w-max m-0 relative text-lg font-bold font-inherit pl-[10px] mq925:text-5xl mq450:text-lg">
                        <img className="h-5 w-5 object-contain left-[0px] top-[0px] [transform:scale(1.48)]" loading="lazy" alt="" src="/group-48098196.svg" />
                        <p>Basic Info</p>
                    </div>
                </div>
            </div>
            {/* form fields */}
            <div className="flex-1 flex flex-row items-start justify-start gap-[0.5px] min-w-[921px] max-w-full text-mini-2 mq1350:min-w-full">
                <div className="flex-1 flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border max-w-full mq1350:pt-0">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[254px] max-w-full mq925:gap-[63px] mq1350:gap-[127px] mq450:gap-[32px]">
                        <div className="w-[801px] flex flex-row items-start justify-start py-0 px-[69px] box-border max-w-full mq925:pl-[34px] mq925:pr-[34px] mq925:box-border">
                            <div className="h-max flex-1 rounded-xl overflow-y-auto flex flex-col items-start justify-start pt-0 px-0 pb-[172px] box-border gap-[20px] max-w-full z-[3] mq925:h-auto mq925:pb-28 mq925:box-border mq450:pb-[73px] mq450:box-border">
                                <InputField
                                    label="Event Name"
                                    placeholder="Event name"
                                    value={eventName}
                                    onChange={handleChange}
                                    maxLength={20}
                                    type="text"
                                />
                                <InputField
                                    label="Banner Image"
                                    isFileUpload
                                    onFileChange={handleFileChange}
                                />
                                <div className="self-stretch rounded-xl flex flex-col items-start justify-start p-[29px] gap-[15px] shrink-0 border-[0.5px] border-solid border-slate-500">
                                    <b className="w-max font-sm relative inline-block shrink-0 text-sm">
                                        Event Description
                                    </b>
                                    <ReactQuill placeholder="Enter descriptions here for your event." theme="snow" value={value} onChange={setValue} className='self-stretch rounded-8xs bg-primary1 min-h-60 border-[0.5px] border-solid border-slate-800' />
                                    <span className='text-3xs text-text4'>{countTextOnly(value)}/100</span>
                                </div>
                                <div className="self-stretch rounded-xl flex flex-row items-start justify-start p-[29px] gap-[37px] shrink-0 border-[0.5px] border-solid border-slate-500 mq925:flex-wrap mq925:gap-[18px]">
                                    <DatePicker
                                        label="Start Date"
                                        dateTime={startDateTime}
                                        setDateTime={setStartDateTime}
                                        placeholder="e.g. 2022-02-15 15:08"
                                    />
                                    <DatePicker
                                        label="End Date"
                                        dateTime={endDateTime}
                                        setDateTime={setEndDateTime}
                                        placeholder="e.g. 2022-02-15 15:08"
                                    />
                                </div>
                                <TagsContainer selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
                            </div>
                        </div>
                        <div className="fixed bottom-0 self-stretch [backdrop-filter:blur(14px)] bg-gray-400 flex flex-row-reverse items-end justify-between py-[15px] pr-5 pl-[15px] gap-[20px] z-10 text-center text-sm text-text3 save-width mq450:flex-wrap"> {/*check save-width in global.css*/}
                            <div className="h-10 flex flex-row items-start justify-start">
                                <div onClick={handleSave} className="rounded-lg overflow-hidden flex flex-row items-center justify-center py-0.5 px-[15px] shrink-0 bg-save-button-bg cursor-pointer hover:bg-text3 hover:text-black ">
                                    <div className="w-48 flex flex-row items-center justify-center py-1 px-0 box-border">
                                        <h3 className="m-0 w-[326px] relative text-inherit tracking-[0.5px] leading-[24px] font-medium font-inherit flex items-center justify-center shrink-0 max-w-[170%]">
                                            Save
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasicInfo;