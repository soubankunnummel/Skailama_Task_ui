// Configurations.jsx
'use client';

import ChatBot from '@/app/components/specific/ChatBot';
import Display from '@/app/components/specific/Display';
import General from '@/app/components/specific/Genral';
import Widget from '@/app/components/specific/Widget';
import { getWidgets } from '@/app/services/apis/widgetService';
 
import React, { useEffect, useState } from 'react';

function Configurations() {
  const [activeTab, setActiveTab] = useState('General');
  const [widgetData, setWidgetData] = useState([]);
  const [displaySettings, setDisplaySettings] = useState({});
  const [isWidgetVisible, setIsWidgetVisible] = useState(false);

  // const handleGeneralSubmit = (data) => {
  //   // setWidgetData(data);
  //   setActiveTab('Widget');
  // };

  /// ->>> fetch widget 


  useEffect(() => {
    getWidgets().then((res) =>{
      setWidgetData(res.data)
    })

  },[])

  //// -> disply componet


  const handleDisplayUpdate = (settings) => {
    setDisplaySettings(settings);
  };


  const toggleWidgetVisibility = () => {setIsWidgetVisible(!isWidgetVisible)};

  return (
    <div className="w-full h-full  flex relative hide-scrollbar">
    
      <div className="flex-1">
        <h1 className="md:text-[30px] text-[24px] text-primery font-bold">Configuration</h1>
        <div className="w-full h-[50px] border-b flex justify-start items-center">
          <div
            className={`p-[13px] cursor-pointer ${activeTab === 'General' ? 'border-b-2 border-primery' : ''}`}
            onClick={() => setActiveTab('General')}
          >
            General
          </div>
          <div
            className={`p-[13px] cursor-pointer ${activeTab === 'Display' ? 'border-b-2 border-primery' : ''}`}
            onClick={() => setActiveTab('Display')}
          >
            Display
          </div>
          <div
            className={`p-[13px] cursor-pointer ${activeTab === 'Advanced' ? 'border-b-2 border-primery' : ''}`}
            onClick={() => setActiveTab('Advanced')}
          >
            Advanced
          </div>
        </div>

        <div className="w-full md:h-[375px] bg-green- h-[700px] p-5 overflow-y-auto hide-scrollbar">
          {activeTab === 'General' && <General   />}
          {activeTab === 'Display' && <Display onUpdate={handleDisplayUpdate} />}
          {activeTab === 'Advanced' && <div>Advanced Settings</div>}
        </div>
      </div>

   { widgetData?.length > 0 ? '' : <ChatBot welcomeMessage={widgetData?.welcomeMessage} image={widgetData?.uploadedImage} onClick={toggleWidgetVisibility} settings={widgetData} /> }

      {isWidgetVisible && widgetData && (
        <div className="flex-none">
          <Widget
            chatbotName={widgetData?.name}
            inputPlaceholder={widgetData?.placeholder}
            displaySettings={widgetData}
            onRemove={toggleWidgetVisibility}
          />
        </div>
      )}
    </div>
  );
}

export default Configurations;
