import React from "react";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

export default function SidebarItem({
  title,
  num,
  selected,
  onClick,
  index,
  icon,
  bg,
}) {
  return (
    <div
      className={classNames(
        "w-full flex justify-start gap-3 cursor-pointer font-semibold items-center md:p-3 p-2  rounded-[132.5px] ",
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
          "md:w-[35px] md:h-[35px] w-[22px] h-[22px] rounded-full flex justify-center items-center",
          selected ? "bg-btn text-white" : "bg-[#1d1b2045] text-white"
        )}
      >
        {num}
        {icon && (
          <Image
            alt="settings"
            src={icon}
            className="md:w-[25px] md:h-[25px] w-[19px] h-[19px] "
          />
        )}
      </div>
      <h1 className="text-[12px] md:text-[18px] ">{title}</h1>
    </div>
    // </Link>
  );
}
