"use client";
import { data } from "@/public/assets/data/sidebarData";
import React, { useState, useEffect } from "react";
import SidebarItem from "../common/SidebarItem";
import Logo from "../common/Logo";
import settings from "@/public/assets/images/icons/settings.svg";
import settingswite from "@/public/assets/images/icons/settingswite.svg";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Link from "next/link";
import { FaAnglesRight } from "react-icons/fa6";

export default function SideBar({ isOpen, toggleSidebar }) {
  const RouteName = usePathname();
  const Router = useRouter();
  const currentId = useSelector((state) => state.project.id);
  const [selectedItem, setSelectedItem] = useState(null);

  
  useEffect(() => {
    const routes = [
      // { path: `/podcasts/1`, title: "Projects" },
      { path: `/podcasts/${currentId}`, title: "Projects" },
      { path: `/podcasts/1/Settings`, title: "Settings" },
    ];

    const selectedRoute = routes.find(route => RouteName.includes(route.path));
    if (selectedRoute) {
      setSelectedItem(selectedRoute.title);
    }
  }, [RouteName, currentId]);


  // handle item click
  const handleItemClick = (title) => {
    toggleSidebar();
    setSelectedItem(title);
    if (title === "Projects") {
      Router.push(`/podcasts/${currentId ? currentId : "1"}`);
    } else if (title === "Widget Configurations") {
      Router.push(`/podcasts/1/Config`);
    } else if (title === "Settings") {
      Router.push(`/podcasts/1/Settings`);
    }
  };

  return (
    <div className="md:w-[320px] w-[220px] h-full flex flex-col md:z-0 z-40 justify-between p-4 bg-[#F3E8FF]">
      <div className="w-full h-auto flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <div className="flex gap-2">
              <Logo />
            </div>
          </Link>
          <FaAnglesRight
            className="rotate-180 md:hidden cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        <h3 className="text-[13px] text-secondery mb-3">Podcat Upload Flow</h3>

        {/* Sidebar items */}
        {data.map((item, index) => (
          <SidebarItem
            key={index}
            title={item.title}
            num={index + 1}
            selected={selectedItem === item.title}
            onClick={() => handleItemClick(item.title)}
            index={index}
            bg={"bg-primery"}
          />
        ))}
      </div>

      {/* Settings */}
      <div className="border-t-[1px] border-[#1D1B2045]">
        <SidebarItem
          title={"Settings"}
          icon={selectedItem === "Settings" ? settingswite : settings}
          bg={"bg-primery"}
          selected={selectedItem === "Settings"}
          onClick={() => handleItemClick("Settings")}
        />
      </div>
    </div>
  );
}
