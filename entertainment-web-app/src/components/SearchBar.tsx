export default function SearchBar() {
  return (
    <div className="search-bar">
      <img src="assets/icon-search.svg"></img>
      <input
        aria-label="Search for movies or TV series"
        className="text-h-m"
        type="text"
        placeholder="Search for movies or TV series"
      ></input>
    </div>
  );
}
