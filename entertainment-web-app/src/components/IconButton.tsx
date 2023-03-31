import React from "react";

type IconButtonProps = {
  url: string;
  className: string;
  action: () => void;
  active: boolean;
};

export default function IconButton({
  url,
  className,
  action,
  active,
}: IconButtonProps) {
  const [pulse, setPulse] = React.useState(false);

  return (
    <button
      onClick={() => {
        setPulse(!active);
        action();
      }}
      className={`icon-button ${className} ${pulse ? "pulse" : ""}`}
      aria-label="bookmark"
    >
      <div
        className="button-mask"
        style={{
          maskImage: `url("../${url}")`,
          WebkitMaskImage: `url("../${url}")`,
        }}
      >
        <div className="blend"></div>
        <img src={url} alt="bookmark"></img>
      </div>
    </button>
  );
}
