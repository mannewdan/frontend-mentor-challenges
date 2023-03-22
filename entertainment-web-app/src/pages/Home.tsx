import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";
import { useLocation } from "react-router-dom";

export default function Home() {
  const { pathname } = useLocation();

  // load a list of all of the movies/tv shows
  // maintain a list of 'trending' items, (filter isTrending===true)

  // maintain a list of 'content' items (everything)
  // content items should be filtered based on current search input
  // content items should be filtered based on current path (ex: /movies should filter category==="Movie")

  return (
    <div className="home">
      <Sidebar />
      <div className="container">
        <SearchBar />

        {pathname === "/" && <Trending />}

        {/* ContentGrid Component
        gets passed a list of items to display, and displays them in a grid which adapts to screensize  
      */}
      </div>
    </div>
  );
}
