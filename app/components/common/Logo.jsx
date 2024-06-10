import Image from "next/image";
import logo from "@/public/assets/images/logos/logo.svg";

import React from "react";

export default function Logo() {
  return (
    <>
      <Image
        alt="log"
        src={logo}
        className="w-[30px] h-[30px] md:w-[43px] md:h-[43px] "
      />
      <h1 className="md:text-[37.74px] text-[20px] font-bold text-primery font-PlusJakartaSans ">
        LAMA.
      </h1>
    </>
  );
}
