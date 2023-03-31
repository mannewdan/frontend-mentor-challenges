import React from "react";

type SearchBarProps = {
  setQuery: (query: string) => void;
  placeholder: string;
};

export default function SearchBar({ setQuery, placeholder }: SearchBarProps) {
  const [input, setInput] = React.useState("");

  return (
    <div className="search-bar">
      <img src="assets/icon-search.svg" alt="search"></img>
      <input
        aria-label={placeholder}
        className="text-h-m"
        type="text"
        placeholder={placeholder}
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
