import React from "react";

const AppRadioButton = ({name, value, title}) => {
  return (
    <div className="flex gap-2">
      <input type="radio" name={name} value={value} />
      <label htmlFor="">{title}</label>
    </div>
  );
};

export default AppRadioButton;
