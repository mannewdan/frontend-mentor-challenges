import React from "react";
import vertEllipsis from "../assets/icon-vertical-ellipsis.svg";
import useClickOutside from "../hooks/useClickOutside";

type DotMenuProps = {
  buttons: Array<{ name: string; onClick: () => void; danger?: boolean }>;
};

export default function DotMenu({ buttons }: DotMenuProps) {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  useClickOutside(() => setOpen(false), containerRef);

  const buttonEls = buttons.map((button) => {
    return (
      <button
        key={button.name}
        onClick={button.onClick}
        className={button.danger ? "danger" : ""}
      >
        {button.name}
      </button>
    );
  });
  return (
    <div className="dot-menu" ref={containerRef}>
      <button onClick={() => setOpen((prev) => !prev)}>
        <img className="" src={vertEllipsis}></img>
      </button>

      <div className={`menu ${open ? "open" : ""}`}>{buttonEls}</div>
    </div>
  );
}
