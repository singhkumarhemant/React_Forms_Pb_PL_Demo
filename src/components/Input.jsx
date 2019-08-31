import React from "react";

const Input = props => {
  return (
    <div className={props.name}>
      <label for={props.name}></label>
      <input
        id={props.name}
        name={props.name}
        type={props.inputType}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
