import { Link } from "react-router-dom";

type IconLinkProps = {
  to: string;
  imgUrl: string;
  active: boolean;
  action?: () => void;
};

export default function IconLink({
  to,
  imgUrl,
  active,
  action,
}: IconLinkProps) {
  return (
    <Link
      to={to}
      onClick={() => {
        if (action) action();
      }}
      style={{
        WebkitMaskImage: `url("../${imgUrl}")`,
        maskImage: `url("../${imgUrl}")`,
      }}
      aria-label={"link to " + to}
    >
      <div className={`blend ${active ? "active" : ""}`}></div>
      <img src={imgUrl} alt={to.slice(1) + " icon"}></img>
    </Link>
  );
}
