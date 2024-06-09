import Image from "next/image";
import logo from "@/public/assets/images/logos/logo.svg";

import React from "react";

export default function Logo() {
  return (
    <>
      <Image alt="log" src={logo} />
      <h1 className="text-[37.74px] font-bold text-primery font-PlusJakartaSans ">
        LAMA.
      </h1>
    </>
  );
}
