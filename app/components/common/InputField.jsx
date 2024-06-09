// InputField.jsx
import React from 'react';

const InputField = ({ label, name, value, onChange, onKeyDown, error }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="md:text-[20px] text-[15px] font-bold">{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="md:h-[52px] h-[40px] p-3 rounded-[9px] border border-[#999999]"
      />
      <p className="text-[13px] text-red-500">{error}</p>
    </div>
  );
};

export default InputField;
