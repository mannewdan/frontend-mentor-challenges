import React from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import ContentGrid from "../components/ContentGrid";
import { useLocation } from "react-router-dom";
import defaultData from "../data.json";
import useWindowResized from "../hooks/useWindowResized";

export type VideoT = {
  title: string;
  thumbnail: {
    trending?: { small: string; large: string };
    regular: { small: string; medium: string; large: string };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
};
export enum ImgSizeE {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

export default function Home() {
  const [allVideos, setAllVideos] = React.useState<Array<VideoT>>(() => {
    const loadedData = loadData();
    if (loadedData) return loadedData;
    return defaultData;
  });
  const [query, setQuery] = React.useState("");
  const { windowWidth } = useWindowResized();
  const [imgSize, setImgSize] = React.useState<ImgSizeE>(ImgSizeE.Large);
  const { pathname } = useLocation();

  //effects
  React.useEffect(() => {
    const bpSmall = parseFloat(
      getComputedStyle(document.body).getPropertyValue("--bp-small")
    );
    const bpMedium = parseFloat(
      getComputedStyle(document.body).getPropertyValue("--bp-medium")
    );

    if (windowWidth >= bpMedium) {
      setImgSize(ImgSizeE.Large);
    } else if (windowWidth >= bpSmall) {
      setImgSize(ImgSizeE.Medium);
    } else {
      setImgSize(ImgSizeE.Small);
    }
  }, [windowWidth]);
  React.useEffect(() => {
    localStorage.setItem("videoData", JSON.stringify(allVideos));
  }, [allVideos]);

  //functions
  function loadData() {
    const data = localStorage.getItem("videoData");
    if (data) return JSON.parse(data);
    return null;
  }

  //rendering
  const trendingVideos = allVideos.filter((item) => item.isTrending);
  const filteredVideos = allVideos
    .filter((item) => {
      switch (pathname) {
        case "/movies":
          return item.category === "Movie";
        case "/tv":
          return item.category === "TV Series";
        case "/favorites":
          return item.isBookmarked;
        default:
          return true;
      }
    })
    .filter((item) => {
      if (!query) {
        if (pathname === "/") return !item.isTrending;
        return true;
      } else {
        return item.title.toLowerCase().includes(query.toLowerCase());
      }
    });
  const subheadingText = (() => {
    if (query) {
      return `Found ${filteredVideos.length} results for '${query}'`;
    } else {
      switch (pathname) {
        case "/movies":
          return "Movies";
        case "/tv":
          return "TV Series";
        case "/favorites":
          return "Bookmarks";
        default:
          return "Recommended for you";
      }
    }
  })();
  const searchPlaceholder = (() => {
    switch (pathname) {
      case "/movies":
        return "Search for movies";
      case "/tv":
        return "Search for TV series";
      case "/favorites":
        return "Search for bookmarked shows";
      default:
        return "Search for movies or TV series";
    }
  })();
  return (
    <div className="home">
      <Sidebar />
      <main className="container">
        <SearchBar setQuery={setQuery} placeholder={searchPlaceholder} />

        {pathname === "/" && !query && (
          //trending
          <ContentGrid
            videos={trendingVideos}
            subheadingText={subheadingText}
            trending={true}
            imgSize={imgSize}
          />
        )}

        {(() => {
          //bookmarks page
          if (pathname === "/favorites" && !query) {
            return (
              <>
                <ContentGrid
                  videos={filteredVideos.filter(
                    (item) => item.category === "Movie"
                  )}
                  subheadingText={"Bookmarked Movies"}
                  imgSize={imgSize}
                />
                <ContentGrid
                  videos={filteredVideos.filter(
                    (item) => item.category === "TV Series"
                  )}
                  subheadingText={"Bookmarked TV Series"}
                  imgSize={imgSize}
                />
              </>
            );
          }

          //default
          return (
            <ContentGrid
              videos={filteredVideos}
              subheadingText={subheadingText}
              imgSize={imgSize}
            />
          );
        })()}
      </main>
    </div>
  );
}
