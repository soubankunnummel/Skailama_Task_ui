"use client";

import React, { useState } from "react";
import InputField from "../common/InputField";
import { addGenarel } from "@/app/services/apis/widgetService";

export default function General({ onSubmit }) {
  const [show, setShow] = useState(true);
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
    e.preventDefault();
    if (validateForm()) {
      setShow(!show);
      onSubmit(formData);
      addGenarel(formData).then((res) => console.log(res));
    }
  };

  const validateForm = () => {
    let valid = true;
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
      className="flex flex-col gap-5 hide-scrollbar"
    >
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
