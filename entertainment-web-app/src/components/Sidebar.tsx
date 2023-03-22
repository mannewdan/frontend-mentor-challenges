import IconLink from "./IconLink";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <nav className="sidebar">
      <img className="logo" src="assets/logo.svg"></img>
      <div className="links">
        <IconLink
          to="/"
          imgUrl="assets/icon-nav-home.svg"
          active={pathname === "/"}
        />
        <IconLink
          to="/movies"
          imgUrl="assets/icon-nav-movies.svg"
          active={pathname === "/movies"}
        />
        <IconLink
          to="/tv"
          imgUrl="assets/icon-nav-tv-series.svg"
          active={pathname === "/tv"}
        />
        <IconLink
          to="/favorites"
          imgUrl="assets/icon-nav-bookmark.svg"
          active={pathname === "/favorites"}
        />
      </div>
      <img className="profile" src="assets/image-avatar.png"></img>
    </nav>
  );
}
