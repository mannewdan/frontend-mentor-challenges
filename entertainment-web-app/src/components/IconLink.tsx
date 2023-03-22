import { Link } from "react-router-dom";

type IconLinkProps = {
  to: string;
  imgUrl: string;
  active: boolean;
};

export default function IconLink({ to, imgUrl, active }: IconLinkProps) {
  return (
    <Link
      to={to}
      style={{
        WebkitMaskImage: `url("../${imgUrl}")`,
        maskImage: `url("../${imgUrl}")`,
      }}
    >
      <div className={`blend ${active ? "active" : ""}`}></div>
      <img src={imgUrl}></img>
    </Link>
  );
}
