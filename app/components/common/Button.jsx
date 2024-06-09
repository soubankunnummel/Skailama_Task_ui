import Image from "next/image";
import React from "react";

function Button({ icon, text, className, onClick  }) {
  return (
    <button className={`${className} bg-btn rounded-[16px] gap-2 text-white flex justify-center items-center       `} onClick={onClick}>
    {icon && <Image alt="Icon" src={icon} className="md:w-[25px] w-[16px] " />}
    <h5 className=" text-[16px] " >{text}</h5>
  </button>
  );
}

export default Button;
