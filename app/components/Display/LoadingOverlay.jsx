import React from "react";
import Loading from "../common/Loading";

const LoadingOverlay = () => (
  <div className="w-full h-full bg-white/[0.5] z-30 flex justify-center items-center backdrop-blur-[0.05px] absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto">
    <Loading className="ring-2 ring-rose-500" />
  </div>
);

export default LoadingOverlay;
