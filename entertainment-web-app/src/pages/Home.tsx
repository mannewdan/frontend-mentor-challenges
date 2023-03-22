import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";

export default function Home() {
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
        {/* Trending Component 
        should only display on home path
      */}
        {/* ContentGrid Component
        gets passed a list of items to display, and displays them in a grid which adapts to screensize  
      */}
        Home
      </div>
    </div>
  );
}
