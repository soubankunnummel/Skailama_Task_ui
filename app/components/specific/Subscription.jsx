import React from "react";

export default function Subscription() {
  return (
    <div className="w-full flex flex-col gap-3">
      <h1 className="md:text-[30px] text-[20px]  font-bold text-primery">Subscriptions</h1>
      <div className="w-full rounded-md flex p-5 md:px-9 px-4 justify-between items-center bg-primery">
        <h3 className="md:text-[20px] text-[15px] md:font-semibold font-normal  ">
          You are currently on the Ques AI Basic Plan!
        </h3>
        <button className="w-[100px] h-[40px] rounded-md bg-white">
          Upgrade
        </button>
      </div>
      <h4 className="text-red-500 font-normal hover:cursor-pointer hover:underline">
        Cancel Subscription
      </h4>
    </div>
  );
}
