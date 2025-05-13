// A Compound Component is a design pattern in React that allows components to work together as a group, giving developers more control and flexibility over how components are used. Instead of passing lots of props to one parent component, the compound component pattern allows child components to share state and logic from the parent while still being independently customizable.

import React, { createContext, useContext, useState } from "react";

const SelectContext = createContext(null);

export const useSelect = () => {
  const state = useContext(SelectContext);
  if (!state) throw new Error("Render Option Com inside Select");
  return state;
};

const Select = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  React.useEffect(() => {
    setValue(props.value);
  }, []);

  return (
    <div className="select-container">
      <SelectContext.Provider value={{ value, setValue }}>
        <div onClick={(e) => setOpen((e) => !e)}>{value}</div>
        {open && props.children}
      </SelectContext.Provider>
    </div>
  );
};

export default Select;
