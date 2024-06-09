import React from "react";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

export default function SidebarItem({ title, num, selected, onClick, index, icon, bg }) {

  
  return (
    // <Link href={`/${title}`}>
      <div
        className={classNames(
          "w-full flex justify-start gap-3 cursor-pointer font-semibold items-center p-3  rounded-[132.5px] ",
          {
            "text-white": selected,
            "text-black": !selected,
            [bg]: selected,
            "bg-[#1d1b2045]  text-black ": index % 2 === 0 && !selected,
            "bg-transparent ": index % 2 !== 0 && !selected,
          }
        )}
        onClick={onClick}
      >
        <div
          className={classNames(
            "w-[35px] h-[35px] rounded-full flex justify-center items-center",
            selected ? "bg-btn text-white" : "bg-[#1d1b2045] text-white"
          )}
        >
          {num}
          {icon && <Image alt="settings" src={icon} width={25} height={25} />}
        </div>
        {title}
      </div>
    // </Link>
  );
}
