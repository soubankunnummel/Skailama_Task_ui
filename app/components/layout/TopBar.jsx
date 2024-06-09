'use client'
import Image from "next/image";
import React from "react";
import homeblue from "@/public/assets/images/icons/homeblue.svg";
import bell from "@/public/assets/images/icons/bell.svg";
import dropdown from "@/public/assets/images/icons/dropdown.svg";
import Ellipse from "@/public/assets/images/img/Ellipse.png";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { FaAnglesRight } from "react-icons/fa6";

import { useSelector } from "react-redux";

function TopBar({ toggleSidebar }) {

  const path = usePathname();
  let Name = '';
  const title = useSelector((state) => state.project.title);

  if(path === '/podcasts/1/Config'){
    Name = "Widget Configurations";
  } else if(path === '/podcasts/1/Settings'){
    Name = "Account Settings";
  }

  return (
    <div className="w-full md:p-7 p-2 flex justify-between items-center">
      <div className="flex justify-center items-center">
        <div className="p-5">
          <FaAnglesRight className="md:hidden block cursor-pointer" onClick={toggleSidebar} />
        </div>
        <Link href={'/projects'}>
          <Image alt="log" src={homeblue} width={25} height={25} />
        </Link>
        <p className="text-[#838383] font-PlusJakartaSans text-[16px] p-4">
          <span className="text-[12px] md:text-[20px] ">{path === '/podcasts/1/Settings' ? '' : `   / ${title}`} / </span><span className="text-primery text-[12px] md:text-[20px] ">{Name ? Name : 'Upload'}</span>
        </p>
      </div>

      <div className="flex gap-3">
        <div className="flex justify-center items-center gap-2">
          <Image alt="log" src={dropdown} className="md:w-[30px] md:h-[30px] w-[25px] h-[25px]" />
          <h1 className="font-bold">EN</h1>
        </div>
        <Image alt="log" src={Ellipse} className="md:w-[30px] md:h-[30px] w-[25px] h-[25px]" />
        <Image alt="log" src={bell} className="md:w-[30px] md:h-[30px] w-[25px] h-[25px]" />
      </div>
    </div>
  );
}

export default TopBar;
