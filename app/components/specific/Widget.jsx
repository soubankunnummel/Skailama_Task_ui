

"use client";
import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { IoSend } from "react-icons/io5";

function Widget({
  chatbotName,
  inputPlaceholder,
  displaySettings,
  onRemove,
}) {
  const [messages, setMessages] = useState([]);

  const bgColor = displaySettings.primaryColor
    ? `bg-[${displaySettings.primaryColor}] `
    : "bg-wihte";
  const textColor = displaySettings.fontColor
    ? `text-[${displaySettings.fontColor}] `
    : "text-[#ddddd] ";

  const fontSize = displaySettings.fontSize
    ? `text-${displaySettings.fontSize}`
    : "text-base";
  const height = displaySettings.chatHeight
    ? `h-[${displaySettings.chatHeight}%]`
    : "h-[300px] md:h-[400px]";

  const handleSendMessage = () => {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value;
    if (message.trim()) {
      setMessages([...messages, message]);
      messageInput.value = "";
    }
  };

  return (
    <div
      className={` absolute right-0 top-12 ${height} ${bgColor}    border-primery  border   
        z-30  transform transition-transform duration-300 flex flex-col justify-between ease-in-out shadow-md rounded-lg md:p-6 p-4  
        `}
    >
      <div className="flex justify-between   items-center">
        <h2 className="text-xl font-bold mb-4">{chatbotName}</h2>
        <TiDelete className="text-3xl cursor-pointer" onClick={onRemove} />
      </div>

      <div className="flex-grow overflow-y-auto md:p-2 shadow-lg rounded-lg">
        {messages.map((msg, index) => (
          <div key={index} className="text-right mb-2">
            <span
              className={`inline-block bg-blue-50 shadow-sm ${fontSize} p-2 ${textColor} rounded-md`}
            >
              {msg}
            </span>
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-4">
        <input
          type="text"
          id="messageInput"
          className="flex-grow rounded-md md:p-2 p-3  border border-gray-300"
          placeholder={inputPlaceholder}
        />
        <button
          onClick={handleSendMessage}
          className="p-4 rounded-md bg-blue-600 text-white"
        >
          <IoSend />
        </button>
      </div>
    </div>
  );
}

export default Widget;
