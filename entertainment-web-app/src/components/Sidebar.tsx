import IconLink from "./IconLink";
import { useLocation } from "react-router-dom";

type SidebarProps = {
  action?: () => void;
};

export default function Sidebar({ action }: SidebarProps) {
  const { pathname } = useLocation();

  return (
    <nav className="sidebar">
      <img className="logo" src="assets/logo.svg" alt="logo"></img>
      <div className="links">
        <IconLink
          action={action}
          to="/"
          imgUrl="assets/icon-nav-home.svg"
          active={pathname === "/"}
        />
        <IconLink
          action={action}
          to="/movies"
          imgUrl="assets/icon-nav-movies.svg"
          active={pathname === "/movies"}
        />
        <IconLink
          action={action}
          to="/tv"
          imgUrl="assets/icon-nav-tv-series.svg"
          active={pathname === "/tv"}
        />
        <IconLink
          action={action}
          to="/favorites"
          imgUrl="assets/icon-nav-bookmark.svg"
          active={pathname === "/favorites"}
        />
      </div>
      <img
        className="profile"
        src="assets/image-avatar.png"
        alt="profile"
      ></img>
    </nav>
  );
}
