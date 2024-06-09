import Image from "next/image";
import React from "react";
import chatBot from "@/public/assets/images/img/chatBot.png";

export default function ChatBot({ onClick, welcomeMessage, image, settings }) {

  let sizeClass = "";
  switch (settings?.chatIconSize) {
    case "small":
      sizeClass = "w-[48px] h-[48px]";
      break;
    case "medium":
      sizeClass = "w-[55px] h-[55px]";
      break;
    case "large":
      sizeClass = "w-[70px] h-[70px]";
      break;
    default:
      sizeClass = "w-[48px] h-[48px]";
  }

  let positionClass = "";
  switch (settings?.positionOnScreen) {
    case "bottom-right":
      positionClass = "bottom-0 -right-10";
      break;
    case "bottom-left":
      positionClass = "bottom-0 -left-10";
      break;
    default:
      positionClass = "bottom-0 -right-10";
  }

  const bottomDistance = settings?.distanceFromBottom
    ? `bottom-${settings?.distanceFromBottom}`
    : "bottom-0";

  return (
    <div
      className={`absolute ${bottomDistance} ${positionClass} transition-transform transform hover:scale-105 animate-bounce cursor-pointer`}
      onClick={onClick}
    >
      <div className="relative">
        <div className={`flex justify-center items-center bg-transparent  object-cover   rounded-lg`}>
        <Image
          alt="chatbot"
          src={image ? image : chatBot}
          className={`${sizeClass} object-cover rounded-xl`}
          width={50}
          height={50}
        />
        </div>
        <div className={`px-3 bg-white text-black  rounded-md absolute ${settings?.positionOnScreen === 'bottom-right' ? '-top-12 right-12': '-top-12 left-11'} `}>
          {welcomeMessage}
        </div>
      </div>
    </div>
  );
}
