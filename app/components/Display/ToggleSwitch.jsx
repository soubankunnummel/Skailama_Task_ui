import React from "react";

const ToggleSwitch = ({ label, checked, onChange }) => (
  <div className="sm:col-span-2 col-span-1 flex justify-between items-center">
    <h1 className="text-[20px] font-bold">{label}</h1>
    <input
      type="checkbox"
      className="toggle [--tglbg:MEDIUMORCHID] bg-white hover:bg-primery border-primery"
      checked={checked}
      onChange={onChange}
    />
  </div>
);

export default ToggleSwitch;
