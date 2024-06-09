// ChatIconSizeDropdown.jsx
import React from "react";

function Dropdown({ label, options, value, onChange }) {
    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        onChange(selectedValue);
      };
  return (
    <div className="flex flex-col">
      <label htmlFor="" className="md:text-[20px] text-[15px] font-bold ">{label}</label>
      <select
        className="border border-[#999999] md:h-[52px] h-[40px] rounded-md max-w-xs"
        value={value}
        onChange={handleSelectChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
