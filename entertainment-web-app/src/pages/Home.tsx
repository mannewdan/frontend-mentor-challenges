import React from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";
import ContentGrid from "../components/ContentGrid";
import { useLocation } from "react-router-dom";
import data from "../data.json";
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
  const [allVideos, setAllVideos] = React.useState<Array<VideoT>>(data);
  const [trendingVideos, setTrendingVideos] = React.useState<Array<VideoT>>(
    data.filter((item) => item.isTrending)
  );
  const [nonTrendingVideos, setNonTrendingVideos] = React.useState<
    Array<VideoT>
  >(data.filter((item) => !item.isTrending));
  const homeRef = React.useRef<HTMLDivElement>(null);
  const { windowWidth } = useWindowResized();
  const [imgSize, setImgSize] = React.useState<ImgSizeE>(ImgSizeE.Large);
  const { pathname } = useLocation();

  //effects
  React.useEffect(() => {
    if (!homeRef.current) return;

    const bpSmall = parseFloat(
      getComputedStyle(homeRef.current).getPropertyValue("--bp-small")
    );
    const bpMedium = parseFloat(
      getComputedStyle(homeRef.current).getPropertyValue("--bp-medium")
    );

    if (windowWidth >= bpMedium) {
      setImgSize(ImgSizeE.Large);
    } else if (windowWidth >= bpSmall) {
      setImgSize(ImgSizeE.Medium);
    } else {
      setImgSize(ImgSizeE.Small);
    }
  }, [windowWidth]);

  // maintain a list of 'trending' items, (filter isTrending===true)

  // maintain a list of 'content' items (everything)
  // content items should be filtered based on current search input
  // content items should be filtered based on current path (ex: /movies should filter category==="Movie")

  //rendering
  return (
    <div ref={homeRef} className="home">
      <Sidebar />
      <main className="container">
        <SearchBar />

        {pathname === "/" && (
          <ContentGrid
            videos={trendingVideos}
            trending={true}
            imgSize={imgSize}
          />
        )}

        <ContentGrid videos={nonTrendingVideos} imgSize={imgSize} />
      </main>
    </div>
  );
}
