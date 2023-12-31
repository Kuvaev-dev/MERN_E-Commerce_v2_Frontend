import React from "react";

const CustomInput = (props) => {
  const { type, name, placeholder, classname } = props;
  return (
    <input
      type={type}
      name={name}
      placeHolder={placeholder}
      className={`form-control ${classname}`}
    />
  );
};

export default CustomInput;
