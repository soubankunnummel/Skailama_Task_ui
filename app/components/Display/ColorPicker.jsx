import React from "react";
import InputField from "../common/InputField";

const ColorPicker = ({ label, name, value, onChange }) => (
  <div className="flex justify-between items-end">
    <InputField label={label} name={name} value={value} onChange={onChange} />
    <div
      className={`w-[50px] h-[50px] rounded-md border`}
      style={{ backgroundColor: value }}
    ></div>
  </div>
);

export default ColorPicker;
