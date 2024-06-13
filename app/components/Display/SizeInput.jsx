import React from "react";
import InputField from "../common/InputField";

const SizeInput = ({ label, name, value, onChange }) => (
  <InputField label={label} name={name} value={value} onChange={onChange} />
);

export default SizeInput;
