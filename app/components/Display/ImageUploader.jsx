import React from "react";
import Image from "next/image";
import upload from "@/public/assets/images/icons/upload.svg";
import { handleImageUpload } from "@/app/utils/helpers";

const ImageUploader = ({ uploadedImage, onChange }) => {
  const handleChange = (e) => {
    const file = e.target.files[0];
    handleImageUpload(e, (image) => {
      onChange(file, image);
    });
  };

  return (
    <div className="flex flex-col">
      <h3 className="text-[20px] font-bold">Bot Icon</h3>
      <div className="flex justify-start gap-6 items-center p-5">
        <div className="md:w-[80px] md:h-[80px] w-[50px] h-[50px] rounded-full flex justify-center items-center bg-slate-300 overflow-hidden">
          {uploadedImage ? (
            <Image
              src={uploadedImage}
              alt="Bot Icon"
              className="object-cover md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              width={100}
              height={100}
            />
          ) : (
            "img"
          )}
        </div>
        <label className="w-[100px] h-[50px] rounded-xl bg-primery flex justify-center gap-2 hover:bg-[#bc52ee] items-center text-white text-[14px] cursor-pointer">
          <span>Upload</span>
          <Image src={upload} alt="Upload" className="w-[15px]" />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
};

export default ImageUploader;
