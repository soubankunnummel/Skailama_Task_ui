"use client";

import React, { useState } from "react";
import InputField from "../common/InputField";
import { addGenarel } from "@/app/services/apis/widgetService";
import Loading from "../common/Loading";

export default function General({ onSubmit }) {
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    welcomeMessage: "",
    placeholder: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    welcomeMessage: "",
    placeholder: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    if (validateForm()) {
      setShow(!show);
    
      addGenarel(formData).then((res) => {
        if (res.data) {
          setLoading(false);
          window.location.reload()
        }
      }).catch((err) => {
        setLoading(false)
      })
    }
  };

  const validateForm = () => {
    let valid = true;
    setLoading(false)
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      newErrors.name = "Chatbot name is required";
      valid = false;
    } else {
      newErrors.name = "";
    }

    if (!formData.welcomeMessage.trim()) {
      newErrors.welcomeMessage = "Welcome message is required";
      valid = false;
    } else {
      newErrors.welcomeMessage = "";
    }

    if (!formData.placeholder.trim()) {
      newErrors.placeholder = "Input placeholder is required";
      valid = false;
    } else {
      newErrors.placeholder = "";
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 hide-scrollbar relative"
    >
      {/* Loading */}
      {loading && (
        <div className="w-full h-full bg-white/[0.5] z-30 flex justify-center items-center backdrop-blur-[0.05px] absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto">
          <Loading className="ring-2 ring-rose-500" />
        </div>
      )}
      {/* Loading */}
      <InputField
        label="Chatbot Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        error={errors.name}
      />
      <InputField
        label="Welcome Message"
        name="welcomeMessage"
        value={formData.welcomeMessage}
        onChange={handleInputChange}
        error={errors.welcomeMessage}
      />
      <InputField
        label="Input Placeholder"
        name="placeholder"
        value={formData.placeholder}
        onChange={handleInputChange}
        error={errors.placeholder}
      />
      {show && (
        <button
          type="submit"
          className="md:p-3 p-2 bg-blue-500 text-white rounded-[9px]"
        >
          Save
        </button>
      )}
    </form>
  );
}
