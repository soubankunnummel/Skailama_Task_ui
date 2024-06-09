

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


  // Extracting display settings
  const { primaryColor, fontColor, fontSize, chatHeight } = displaySettings;

  const containerStyle = {
    position: "absolute",
    right: 0,
    top: "12px",
    height: chatHeight ? `${chatHeight}%` : "300px",
    backgroundColor: primaryColor ? primaryColor : "white",
    border: "1px solid #ccc",
    borderRadius: "8px",
    zIndex: 30,
    transition: "transform 300ms ease-in-out",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    padding: "16px",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const textStyle = {
    textAlign: "right",
    marginBottom: "8px",
    backgroundColor: "#f0f4f8", // Default background color for text
    padding: "8px",
    borderRadius: "4px",
    fontSize: fontSize ? `${fontSize}px` : "16px",
    color: fontColor ? fontColor : "#333", // Default font color
  };

  const handleSendMessage = () => {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value;
    if (message.trim()) {
      setMessages([...messages, message]);
      messageInput.value = "";
    }
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>{chatbotName}</h2>
        <TiDelete style={{ fontSize: "24px", cursor: "pointer" }} onClick={onRemove} />
      </div>

      <div style={{ flexGrow: 1, overflowY: "auto" }}>
        {messages.map((msg, index) => (
          <div key={index} style={textStyle}>
            {msg}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", marginTop: "16px" }}>
        <input
          type="text"
          id="messageInput"
          style={{ flexGrow: 1, padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
          placeholder={inputPlaceholder}
        />
        <button
          onClick={handleSendMessage}
          style={{ padding: "12px", backgroundColor: "blue", color: "white", borderRadius: "4px", border: "none", cursor: "pointer" }}
        >
          <IoSend />
        </button>
      </div>
    </div>
  );
}

export default Widget;
