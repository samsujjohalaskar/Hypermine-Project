import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { FaLink } from "react-icons/fa6";
import { MdOutlineAddToPhotos, MdOutlineDeleteOutline } from "react-icons/md";
import IconText from "./IconText";

const SeeMore = () => {
    return (
        <div className="absolute right-14 top-8 rounded-3xs bg-primary1 flex flex-col items-start justify-start pt-[21px] px-[22px] pb-3.5 leading-[normal] tracking-[normal] border-[1px] border-solid border-text4 mq925:top-48 mq450:top-56 mq450:right-10">
            <section className="flex flex-col items-start justify-start gap-[12px] text-left text-xs text-text1 font-body-2">
                <IconText icon={FaLink} text="Link" />
                <IconText icon={BiEditAlt} text="Edit" />
                <IconText icon={MdOutlineAddToPhotos} text="Clone" />
                <IconText icon={MdOutlineDeleteOutline} text="Delete" />
            </section>
        </div>
    );
};

export default SeeMore;