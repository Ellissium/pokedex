import React from "react";
import classes from "./MySelect.module.css";

const MySelect = ({ options, defaultValue, value, onChange }) => {
  const onSelectChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <div className={classes.mySelect}>
      <select
        className={classes.mySelect__body}
        value={value}
        onChange={onSelectChange}
      >
        <option className={classes.mySelect__thumb} value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option
            className={classes.mySelect__thumb}
            key={option.value}
            value={option.value}
          >
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MySelect;
