import React from "react";
import useClickOutside from "../hooks/useClickOutside";

type DropdownProps = {
  name: string;
  options: Array<{ name: string; id: string }>;
  selection: { name: string; id: string };
  setSelection: (selection: { name: string; id: string }) => void;
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
          console.log(e.target.value);
          const matchingOption = options.find(
            (option) => option.id === e.target.value
          );
          setSelection(matchingOption ? matchingOption : { name: "", id: "" });
        }}
        value={selection.id}
        name={name}
      >
        {options.map((item) => {
          return (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>

      <span className="text-b-m c-text-neutral">{name}</span>
      <div className="select-box">
        <div className="selection text-b-l">{selection.name}</div>
        <div className="options-container"></div>
        <div className={`options ${expanded ? "expanded" : ""}`}>
          {options.map((item) => {
            return (
              <span
                key={item.id}
                className="text-b-l"
                onClick={() => setSelection(item)}
              >
                {item.name}
              </span>
            );
          })}
        </div>
      </div>
    </label>
  );
}
