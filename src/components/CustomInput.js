import React from "react";

const CustomInput = (props) => {
  const { type, name, placeholder, classname, value, onCh, onBlr } = props;
  return (
    <input
      type={type}
      name={name}
      placeHolder={placeholder}
      className={`form-control ${classname}`}
      value={value}
      onChange={onCh}
      onBlur={onBlr}
    />
  );
};

export default CustomInput;
