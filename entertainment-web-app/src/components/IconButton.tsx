type IconButtonProps = {
  url: string;
  className: string;
};

export default function IconButton({ url, className }: IconButtonProps) {
  return (
    <button className={`icon-button ${className}`}>
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
