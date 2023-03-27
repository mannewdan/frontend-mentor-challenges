import React from "react";

type SearchBarProps = {
  setQuery: (query: string) => void;
};

export default function SearchBar({ setQuery }: SearchBarProps) {
  const [input, setInput] = React.useState("");

  return (
    <div className="search-bar">
      <img src="assets/icon-search.svg"></img>
      <input
        aria-label="Search for movies or TV series"
        className="text-h-m"
        type="text"
        placeholder="Search for movies or TV series"
        value={input}
        onChange={(e) => {
          const value = e.target.value;
          setInput(value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setQuery(input);
          }
        }}
      ></input>
    </div>
  );
}
