type IconButtonProps = {
  url: string;
  className: string;
  action: () => void;
};

export default function IconButton({
  url,
  className,
  action,
}: IconButtonProps) {
  return (
    <button onClick={action} className={`icon-button ${className}`}>
      <div
        className="button-mask"
        style={{
          maskImage: `url("../${url}")`,
          WebkitMaskImage: `url("../${url}")`,
        }}
      >
        <div className="blend"></div>
        <img src={url}></img>
      </div>
    </button>
  );
}
