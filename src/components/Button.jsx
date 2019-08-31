import React from "react";

const Button = props => {
  console.log(props,'props in button');
  return (
    <div class="submit">
    <input type="submit" value={props.title} id="form_button" onClick={props.action}/>
  </div>
  );
};

export default Button;
