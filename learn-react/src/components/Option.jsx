import React from "react";
import { useSelect } from "./Select";

const Option = ({ value, text }) => {
  const { setValue } = useSelect();

  return (
    <div
      onClick={() => setValue(value)}
      className="option"
    >
      {text}
    </div>
  );
};

export default Option;