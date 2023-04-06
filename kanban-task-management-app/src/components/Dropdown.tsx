import React from "react";

type DropdownProps = {
  name: string;
  options: Array<string>;
};

export default function Dropdown({ name, options }: DropdownProps) {
  const [expanded, setExpanded] = React.useState(false);
  const [selection, setSelection] = React.useState(
    options.length > 0 ? options[0] : ""
  );

  return (
    <label
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
