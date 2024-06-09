import Image from "next/image";
import React from "react";
import home from "@/public/assets/images/icons/home.svg";
import Link from "next/link";


function BacktoHome() {
  return (
    <Link href={'/'}>
        <div className="w-[198.69px] h-[41px] bg-white shadow-md cursor-pointer hover:shadow rounded-[32px] gap-2 flex justify-center items-center border">
      <Image alt="Home" src={home} className="w-[20px]" />
      <h3 className="text-[17px] font-normal">Back to Home</h3>
    </div>
    </Link>
  );
}

export default BacktoHome;
