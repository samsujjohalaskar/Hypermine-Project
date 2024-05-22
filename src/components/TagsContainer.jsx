import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Tag from './Tag';

const TagsContainer = ({ selectedTags, setSelectedTags }) => {
    const [showTags, setShowTags] = useState(false);
    const allTags = ['Play2Earn', 'AirDrop', 'Ethereum', 'Polygon', 'Avalanche', 'Harmony', 'DID', 'NFT'];

    const handleRemoveTag = (tag) => {
        setSelectedTags(selectedTags.filter(t => t !== tag));
    };

    const handleAddTag = (tag) => {
        if (!selectedTags.includes(tag)) {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    return (
        <div className="self-stretch h-max rounded-xl box-border shrink-0 flex flex-col items-start justify-start py-[30px] pr-[27px] pl-[29px] gap-[23px] border-[0.5px] border-solid border-slate-500">
            <b className="w-max font-sm relative inline-block shrink-0 text-sm">
                Tags
            </b>
            <div className="self-stretch flex-1 flex flex-row items-start justify-between pt-3 pb-[11px] pr-[29px] pl-[9px] relative gap-[20px] text-3xs text-whitesmoke-200 rounded-lg bg-primary1 border-[0.5px] border-solid border-slate-800">
                <div className="self-stretch flex flex-row flex-wrap gap-1 items-start justify-start z-[2]">
                    {selectedTags && selectedTags.length > 0 ? (selectedTags.map(tag => (
                        <Tag key={tag} tag={tag} onRemove={handleRemoveTag} />
                    ))) : (
                        !showTags && (
                            <div className="self-stretch rounded-[14px] flex flex-row items-center justify-center py-[1.5px] px-[15.5px]">
                                Select Tags
                            </div>
                        )
                    )}
                    {showTags && (
                        allTags.filter(tag => !selectedTags.includes(tag)).map(tag => (
                            <div key={tag} className="cursor-pointer self-stretch rounded-[14px] flex flex-row items-center justify-center py-[1.5px] px-[15.5px] border-[2px] border-solid border-slate-400" onClick={() => handleAddTag(tag)}>
                                <div className="self-stretch w-max relative leading-[21px] font-medium inline-block">
                                    {tag}
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div onClick={() => setShowTags(!showTags)} className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 relative z-[2] cursor-pointer">
                    {showTags ? (<FaMinus size={18} />) : (<FaPlus size={18} />)}
                </div>
            </div>
        </div>
    );
};

export default TagsContainer;
