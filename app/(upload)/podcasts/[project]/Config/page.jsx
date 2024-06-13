// Configurations.jsx
"use client";

import React, { useState } from "react";
import ChatBot from "@/app/components/specific/ChatBot";
import { useWidgets } from "@/app/hooks/useWidgets";
import Display from "@/app/components/Display/Display";
import General from "@/app/components/specific/Genral";
import TabNavigation from "./TabNavigation";
import Widget from "@/app/components/specific/Widget";

function Configurations() {
  const [activeTab, setActiveTab] = useState("General");
  const [displaySettings, setDisplaySettings] = useState({});
  const [isWidgetVisible, setIsWidgetVisible] = useState(false);
  const widgetData = useWidgets();

  const handleDisplayUpdate = (settings) => {
    setDisplaySettings(settings);
  };

  const toggleWidgetVisibility = () => {
    setIsWidgetVisible(!isWidgetVisible);
  };

  return (
    <div className="w-full h-full flex relative hide-scrollbar">
      <div className="flex-1">
        <h1 className="md:text-[30px] text-[24px] text-primery font-bold">
          Configuration
        </h1>
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="w-full md:h-[375px] h-[700px] p-5 overflow-y-auto hide-scrollbar">
          {activeTab === "General" && <General />}
          {activeTab === "Display" && (
            <Display onUpdate={handleDisplayUpdate} />
          )}
          {activeTab === "Advanced" && <div>Advanced Settings</div>}
        </div>
      </div>

      {widgetData.length > 0 ? (
        ""
      ) : (
        <ChatBot
          welcomeMessage={widgetData.welcomeMessage}
          image={widgetData.uploadedImage}
          onClick={toggleWidgetVisibility}
          settings={widgetData}
        />
      )}

      {isWidgetVisible && widgetData && (
        <div className="flex-none">
          <Widget
            chatbotName={widgetData.name}
            inputPlaceholder={widgetData.placeholder}
            displaySettings={widgetData}
            onRemove={toggleWidgetVisibility}
          />
        </div>
      )}
    </div>
  );
}

export default Configurations;
