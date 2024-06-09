'use client'
import SideBar from "@/app/components/layout/SideBar";
import TopBar from "@/app/components/layout/TopBar";
import React, { useState } from "react";

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative h-screen grid grid-rows-10 md:grid-rows-6 md:grid-cols-12">
      {/* Sidebar */}
      <div
        className={`fixed md:static inset-0 z-30 transform transition-transform duration-300 ease-in-out md:col-span-3 row-span-6 md:row-span-full ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* Top bar */}
      <div className="row-span-1 col-span-12 md:col-span-9 md:row-span-1">
        <TopBar toggleSidebar={toggleSidebar} />
      </div>

      {/* Main content */}
      <div className="row-span-9 col-span-12 md:col-span-9 md:row-span-5  px-[5%] overflow-auto hide-scrollbar">
        {children}
      </div>
    </div>
  );
}

export default Layout;
