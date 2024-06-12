// Display.jsx
"use client";
import React, { useState } from "react";
import upload from "@/public/assets/images/icons/upload.svg";
import Image from "next/image";
import InputField from "../common/InputField";
import Dropdown from "../common/Dropdown";
import {
  chatIconSizeOptions,
  positionOnScreenOptions,
} from "@/public/assets/data/chatIcon";
import { handleImageUpload } from "@/app/utils/helpers";
import { createWidget } from "@/app/services/apis/widgetService";
import Loading from "../common/Loading";



export default function Display({ onUpdate }) {
  const [showSources, setShowSources] = useState(true);
  const [uploadedImage, setUploadedImage] = useState(null)
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)

  const [formValues, setFormValues] = useState({ 
    primaryColor: "",
    fontColor: "",
    fontSize: "",
    chatHeight: "",
    chatIconSize: "",
    positionOnScreen: "",
    distanceFromBottom: "",
    horizontalDistance: "",
    uploadedImage: ''
  });

  const handleDropdownChange = (name, value) => {
    setIsUpdate(true)
    const updatedFormValues = { ...formValues, [name]: value };
    setFormValues(updatedFormValues);
  };



  const handleChange = (e) => {
    setIsUpdate(true)
    const { name, value } = e.target;
    const updatedFormValues = { ...formValues, [name]: value };
    setFormValues(updatedFormValues);
  };


  const handleImageChange = (e) => {
    setIsUpdate(true)
    const file = e.target.files[0];
    setImageFile(file);
    handleImageUpload(e, (image) => {
      const updatedFormValues = { ...formValues, uploadedImage: image };
      setUploadedImage(image);
      setFormValues(updatedFormValues);
    });
  };

  const handleUpdate = () => {
    setLoading(true)
    const formData = new FormData();
    Object.keys(formValues).forEach((key) => {
      formData.append(key, formValues[key]);
    });

    if (imageFile) {
      formData.append("uploadedImage", imageFile);
    }

    // Send formData to the server
    createWidget(formData).then((res) =>{
      if(res.data){
        setLoading(false)
        window.location.reload()
      }
    })

  };


  return (
    <form className="flex flex-col  overflow-y-auto">
         {/* Loading */}
         {loading && (
        <div className="w-full h-full bg-white/[0.5] z-30 flex justify-center items-center backdrop-blur-[0.05px] absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto">
          <Loading className="ring-2 ring-rose-500" />
        </div>
      )}
      {/* Loading */}


      <div className="grid sm:grid-cols-2 grid-cols-1 sm:grid-rows-2 md:grid-rows-3   grid-rows-3 gap-3">
        <div className="flex  justify-between  items-end ">
          <InputField
            label="Primary Color"
            name="primaryColor"
            value={formValues.primaryColor}
            onChange={handleChange}
            
          />
          <div
            className={`w-[50px] h-[50px] rounded-md border  `}
            style={{ backgroundColor: formValues.primaryColor }}
          ></div>
        </div>
        <div className="flex  justify-between  items-end ">
          <InputField
            label="Font Color"
            name="fontColor"
            value={formValues.fontColor}
            onChange={handleChange}
            
          />
          <div
            className={`w-[50px] h-[50px] rounded-md border `}
            style={{ backgroundColor: formValues.fontColor }}
          ></div>
        </div>
        <InputField
          label="Font Size (in px)"
          name="fontSize"
          value={formValues.fontSize}
          onChange={handleChange}
          
        />
        <InputField
          label="Chat Height (in % of total screen)"
          name="chatHeight"
          value={formValues.chatHeight}
          onChange={handleChange}
          
        />
        <div className=" sm:col-span-2 col-span-1  flex justify-between items-center">
          <h1 className="text-[20px] font-bold">Show Sources</h1>
          <input
            type="checkbox"
            className="toggle [--tglbg:MEDIUMORCHID]  bg-white hover:bg-primery border-primery"
            checked={showSources}
            onChange={() => setShowSources(!showSources)}
          />
        </div>
      </div>
      <hr />
      <div
        className={`grid sm:grid-cols-2 grid-cols-1 mt-5  sm:grid-rows-2 md:grid-rows-3 grid-rows-3 gap-3 transition-opacity duration-500 ${
          showSources ? "opacity-100" : "opacity-0"
        }`}
        style={{ height: showSources ? "auto" : "0", overflow: "hidden" }}
      >
        <Dropdown
          label="Chat Icon Size"
          options={chatIconSizeOptions}
          value={formValues.chatIconSize}
          onChange={(value) => handleDropdownChange("chatIconSize", value)}
        />
        <Dropdown
          label="Position on Screen"
          options={positionOnScreenOptions}
          value={formValues.positionOnScreen}
          onChange={(value) => handleDropdownChange("positionOnScreen", value)}
        />

        <InputField
          label="Distance from Bottom (in px)"
          name="distanceFromBottom"
          value={formValues.distanceFromBottom}
          onChange={handleChange}
          
        />
        <InputField
          label="Horizontal Distance (in px)"
          name="horizontalDistance"
          value={formValues.horizontalDistance}
          onChange={handleChange}
          
        />
        <div className="flex  flex-col">
          <h3 className="text-[20px] font-bold">Bot Icon</h3>
          <div className=" flex justify-start gap-6 items-center p-5">
          <div className="md:w-[80px] md:h-[80px] w-[50px]  h-[50px] rounded-full flex justify-center items-center bg-slate-300  overflow-hidden">
              {uploadedImage ? (
                <Image src={uploadedImage} alt="Bot Icon" className="object-cover md:w-[80px] md:h-[80px] w-[50px]  h-[50px] "  width={100} height={100} />
              ) : (
                "img"
              )}
            </div>
            <label className="w-[100px] h-[50px] rounded-xl bg-primery flex justify-center gap-2 hover:bg-[#bc52ee] items-center text-white text-[14px] cursor-pointer">
              <span>Upload</span>
              <Image src={upload} alt="Upload  " className="w-[15px] "/>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}  
              />
              
            </label>
          </div>
        </div>
        
      </div>
      {isUpdate && <div className="p-2 font-semibold border rounded-md hover:bg-primery hover:border-white flex justify-center items-center border-primery cursor-pointer " onClick={handleUpdate}>Update</div>}
    </form>
  );
}
