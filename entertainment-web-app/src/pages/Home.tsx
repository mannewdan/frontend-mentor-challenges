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
  const [trendingVideos, setTrendingVideos] = React.useState<Array<VideoT>>([]);
  const [mainContentVideos, setMainContentVideos] = React.useState<
    Array<VideoT>
  >([]);
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
    updateVideos();
  }, [allVideos]);
  React.useEffect(() => {
    updateVideos();
  }, [query, pathname]);

  //functions
  function loadData() {
    const data = localStorage.getItem("videoData");
    if (data) return JSON.parse(data);
    return null;
  }
  function updateVideos() {
    setTrendingVideos(allVideos.filter((item) => item.isTrending));

    setMainContentVideos(
      allVideos
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
        })
    );
  }

  // maintain a list of 'trending' items, (filter isTrending===true)

  // maintain a list of 'content' items (everything)
  // content items should be filtered based on current search input
  // content items should be filtered based on current path (ex: /movies should filter category==="Movie")

  //rendering
  return (
    <div className="home">
      <Sidebar />
      <main className="container">
        <SearchBar setQuery={setQuery} />

        {pathname === "/" && (
          <ContentGrid
            videos={trendingVideos}
            trending={true}
            imgSize={imgSize}
          />
        )}

        <ContentGrid videos={mainContentVideos} imgSize={imgSize} />
      </main>
    </div>
  );
}
