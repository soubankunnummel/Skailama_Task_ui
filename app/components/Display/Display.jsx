"use client";
import React, { useState, useEffect } from "react";
import ColorPicker from "./ColorPicker";
import SizeInput from "./SizeInput";
import ToggleSwitch from "./ToggleSwitch";
import ImageUploader from "./ImageUploader";
import LoadingOverlay from "./LoadingOverlay";
import { useWidgets } from "@/app/hooks/useWidgets";
import { createWidget } from "@/app/services/apis/widgetService";
import {
  chatIconSizeOptions,
  positionOnScreenOptions,
} from "@/public/assets/data/chatIcon";
import Dropdown from "../common/Dropdown";

export default function Display({ onUpdate }) {
  const [showSources, setShowSources] = useState(true);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const widgetData = useWidgets();

  const [formValues, setFormValues] = useState({
    primaryColor: "",
    fontColor: "",
    fontSize: "",
    chatHeight: "",
    chatIconSize: "",
    positionOnScreen: "",
    distanceFromBottom: "",
    horizontalDistance: "",
    uploadedImage: "",
  });

  useEffect(() => {
    setFormValues({
      primaryColor: widgetData.primaryColor || "",
      fontColor: widgetData.fontColor || "",
      fontSize: widgetData.fontSize || "",
      chatHeight: widgetData.chatHeight || "",
      chatIconSize: widgetData.chatIconSize || "",
      positionOnScreen: widgetData.positionOnScreen || "",
      distanceFromBottom: widgetData.distanceFromBottom || "",
      horizontalDistance: widgetData.horizontalDistance || "",
      uploadedImage: widgetData.uploadedImage || "",
    });
    setUploadedImage(widgetData.uploadedImage || "");
  }, [widgetData]);

  const handleDropdownChange = (name, value) => {
    setIsUpdate(true);
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleChange = (e) => {
    setIsUpdate(true);
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (file, image) => {
    setIsUpdate(true);
    setImageFile(file);
    setUploadedImage(image);
    setFormValues((prev) => ({ ...prev, uploadedImage: image }));
  };

  const handleUpdate = () => {
    setLoading(true);
    const formData = new FormData();
    Object.keys(formValues).forEach((key) => {
      formData.append(key, formValues[key]);
    });

    if (imageFile) {
      formData.append("uploadedImage", imageFile);
    }

    createWidget(formData).then((res) => {
      if (res.data) {
        setLoading(false);
        window.location.reload();
      }
    });
  };

  const handleReset = () => {
    setFormValues({
      primaryColor: widgetData.primaryColor || "",
      fontColor: widgetData.fontColor || "",
      fontSize: widgetData.fontSize || "",
      chatHeight: widgetData.chatHeight || "",
      chatIconSize: widgetData.chatIconSize || "",
      positionOnScreen: widgetData.positionOnScreen || "",
      distanceFromBottom: widgetData.distanceFromBottom || "",
      horizontalDistance: widgetData.horizontalDistance || "",
      uploadedImage: widgetData.uploadedImage || "",
    });
    setUploadedImage(widgetData.uploadedImage || "");
    setIsUpdate(false);
  };

  return (
    <form className="flex flex-col overflow-y-auto relative">
      {loading && <LoadingOverlay />}
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:grid-rows-2 md:grid-rows-3 grid-rows-3 gap-3">
        <ColorPicker
          label="Primary Color"
          name="primaryColor"
          value={formValues.primaryColor}
          onChange={handleChange}
        />
        <ColorPicker
          label="Font Color"
          name="fontColor"
          value={formValues.fontColor}
          onChange={handleChange}
        />
        <SizeInput
          label="Font Size (in px)"
          name="fontSize"
          value={formValues.fontSize}
          onChange={handleChange}
        />
        <SizeInput
          label="Chat Height (in % of total screen)"
          name="chatHeight"
          value={formValues.chatHeight}
          onChange={handleChange}
        />
        <ToggleSwitch
          label="Show Sources"
          checked={showSources}
          onChange={() => setShowSources(!showSources)}
        />
      </div>
      <hr />
      <div
        className={`grid sm:grid-cols-2 grid-cols-1 mt-5 sm:grid-rows-2 md:grid-rows-3 grid-rows-3 gap-3 transition-opacity duration-500 ${
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
        <SizeInput
          label="Distance from Bottom (in px)"
          name="distanceFromBottom"
          value={formValues.distanceFromBottom}
          onChange={handleChange}
        />
        <SizeInput
          label="Horizontal Distance (in px)"
          name="horizontalDistance"
          value={formValues.horizontalDistance}
          onChange={handleChange}
        />
        <ImageUploader
          uploadedImage={uploadedImage}
          onChange={handleImageChange}
        />
      </div>
      {isUpdate && (
        <div className="flex justify-center gap-4 mt-4">
          <button
            type="button"
            className="p-2 font-semibold border rounded-md hover:bg-primery hover:border-white flex justify-center items-center border-primery cursor-pointer"
            onClick={handleUpdate}
          >
            Update
          </button>
          <button
            type="button"
            className="p-2 font-semibold border rounded-md hover:bg-primery hover:border-white flex justify-center items-center border-primery cursor-pointer"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      )}
    </form>
  );
}
