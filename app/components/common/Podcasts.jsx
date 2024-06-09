"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Modal from "./Modal";

export default function Podcasts({ title, icon, onClick }) {
  return (
    <div
      className="md:w-[250px] md:h-[80px] w-[180px] h-[60px] border cursor-pointer shadow-md rounded-[20px] flex p-5 items-center gap-3"
      onClick={() => onClick(icon)}
    >
      <div className=" md:w-[50px] md:h-[50px]  w-[25px] h-[25px] rounded-full flex justify-center items-center">
        <Image alt="log" src={icon}  className="w-[25px] h-[25px] md:w-[45px] md:h-[45px]   "/>
      </div>
      <div className="flex flex-col">
        <h1 className=" md:text-[16px] text-[13px] font-semibold ">Upload</h1>
        <h1 className="text-[13px] ">{title}</h1>
      </div>
    </div>
  );
}
