import React from "react";

const CustomInput = (props) => {
  const { type, name, placeholder, classname, value, onCh, onBlr, disabled } =
    props;
  return (
    <input
      type={type}
      name={name}
      placeHolder={placeholder}
      className={`form-control ${classname}`}
      value={value}
      onChange={onCh}
      onBlur={onBlr}
      disabled={disabled}
    />
  );
};

export default CustomInput;
