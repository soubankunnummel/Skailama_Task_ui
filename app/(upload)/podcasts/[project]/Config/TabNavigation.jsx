import React from 'react';

const TabNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-full h-[50px] border-b flex justify-start items-center">
      {['General', 'Display', 'Advanced'].map((tab) => (
        <div
          key={tab}
          className={`p-[13px] cursor-pointer ${activeTab === tab ? 'border-b-2 border-primery' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default TabNavigation;
