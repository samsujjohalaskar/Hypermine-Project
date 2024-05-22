import React from 'react';
import { MdOutlineFileUpload } from "react-icons/md";
import { cloud_name } from '../utils/secret';

const InputField = ({ label, placeholder, value, onChange, maxLength, type, isFileUpload, onFileChange }) => {

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.size > 400000) { // 400 KB limit
            alert('File size exceeds 400 KB. Please choose a smaller file.');
            event.target.value = '';
            return;
        }
        const submitImage = () => {
            const data = new FormData();
            data.append("file", file);
            data.append("upload_preset", "upload_image");
            data.append("cloud_name", `${cloud_name}`);

            fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, { // Corrected URL
                method: "post",
                body: data,
            })
                .then((res) => res.json())
                .then((data) => {
                    onFileChange(data.secure_url); // send the image link to parent component
                    alert('Image upload success');
                })
                .catch((err) => {
                    console.error(err);
                });
        }
        submitImage();
    };

    return (
        <div className="self-stretch rounded-xl flex flex-col items-start justify-start p-[29px] gap-[15px] shrink-0 border-[0.5px] border-solid border-slate-500">
            <b className="w-max font-sm relative inline-block shrink-0 text-sm">
                {label}
            </b>
            <div className="self-stretch rounded-8xs bg-primary1 flex flex-row items-start justify-between pt-[15px] pb-3 pr-3.5 pl-2.5 gap-[20px] text-smi-6 text-text4 border-[0.5px] border-solid border-slate-800">
                {isFileUpload ? (
                    <>
                        <input
                            className="text-xs hidden"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            id="file-upload"
                        />
                        <label
                            htmlFor="file-upload"
                            className="flex items-center gap-2"
                        >
                            <span className="cursor-pointer text-xs text-blue-500 font-semibold underline">Click to Upload,</span>Max size of 400kb
                        </label>
                        <MdOutlineFileUpload size={22} />
                    </>
                ) : (
                    <>
                        <input
                            placeholder={placeholder}
                            value={value}
                            onChange={onChange}
                            maxLength={maxLength}
                            type={type}
                            className='h-max w-full outline-none text-white bg-primary1 text-smi-6'
                        />
                        <span className='text-3xs'>{value.length}/{maxLength}</span>
                    </>
                )}
            </div>
        </div>
    );
};

export default InputField;