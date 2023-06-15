import React from "react";
import vertEllipsis from "../assets/icon-vertical-ellipsis.svg";
import useClickOutside from "../hooks/useClickOutside";

type DotMenuProps = {
  buttons: Array<{ name: string; onClick: () => void; danger?: boolean }>;
  shorterDistance?: boolean;
};

export default function DotMenu({ buttons, shorterDistance }: DotMenuProps) {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  useClickOutside(() => setOpen(false), containerRef);

  const buttonEls = buttons.map((button) => {
    return (
      <button
        type="button"
        key={button.name}
        onClick={(e) => {
          e.preventDefault();
          button.onClick();
          setOpen(false);
        }}
        tabIndex={open ? 0 : -1}
        className={button.danger ? "danger" : ""}
      >
        {button.name}
      </button>
    );
  });
  return (
    <div
      className={`dot-menu ${shorterDistance ? "short" : ""}`}
      ref={containerRef}
    >
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setOpen((prev) => !prev);
        }}
      >
        <img className="" src={vertEllipsis}></img>
      </button>

      <div className={`menu ${open ? "open" : ""}`}>{buttonEls}</div>
    </div>
  );
}
