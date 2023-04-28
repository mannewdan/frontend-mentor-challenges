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
      className={`dropdown-label ${expanded ? "expanded" : ""}`}
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

      <span className="text-b-m c-text-neutral">{name}</span>
      <div className="select-box">
        <div className="selection text-b-l">{selection}</div>
        <div className="options-container"></div>
        <div className={`options ${expanded ? "expanded" : ""}`}>
          {options.map((item) => {
            return (
              <span
                key={item}
                className="text-b-l"
                onClick={() => setSelection(item)}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </label>
  );
}
