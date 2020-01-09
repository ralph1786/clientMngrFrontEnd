import React, { Fragment } from "react";

function LabelInput({ labelName, name, inputType, value, changeHandler }) {
  return (
    <Fragment>
      <label htmlFor={name}>{labelName}</label>
      <input
        id={name}
        name={name}
        type={inputType}
        value={value}
        onChange={e => changeHandler(e)}
      />
      <br />
      <br />
    </Fragment>
  );
}

export default LabelInput;
