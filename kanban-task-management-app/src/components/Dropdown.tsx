import React from "react";
import useClickOutside from "../hooks/useClickOutside";

type DropdownProps = {
  name: string;
  options: Array<string>;
  selection: string;
  setSelection: (selection: string) => void;
};

export default function Dropdown({
  name,
  options,
  selection,
  setSelection,
}: DropdownProps) {
  const [expanded, setExpanded] = React.useState(false);
  const containerRef = React.useRef(null);

  useClickOutside(() => setExpanded(false), containerRef);

  return (
    <label
      ref={containerRef}
      htmlFor={name}
      className={expanded ? "expanded" : ""}
      onClick={() => setExpanded((prev) => !prev)}
    >
      <select
        className="hidden"
        onChange={(e) => {
          setSelection(e.target.value);
        }}
        value={selection}
        name={name}
      >
        {options.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>

      <div className="select-box">
        <span className="selection">{selection}</span>
        <div className="options">
          {options.map((item) => {
            return (
              <span key={item} onClick={() => setSelection(item)}>
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </label>
  );
}
