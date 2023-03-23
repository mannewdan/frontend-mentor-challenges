import React from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";
import ContentGrid from "../components/ContentGrid";
import { useLocation } from "react-router-dom";
import data from "../data.json";

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

export default function Home() {
  const [allVideos, setAllVideos] = React.useState<Array<VideoT>>(data);
  const [trendingVideos, setTrendingVideos] = React.useState<Array<VideoT>>(
    data.filter((item) => item.isTrending)
  );
  const [nonTrendingVideos, setNonTrendingVideos] = React.useState<
    Array<VideoT>
  >(data.filter((item) => !item.isTrending));

  const { pathname } = useLocation();

  // maintain a list of 'trending' items, (filter isTrending===true)

  // maintain a list of 'content' items (everything)
  // content items should be filtered based on current search input
  // content items should be filtered based on current path (ex: /movies should filter category==="Movie")

  return (
    <div className="home">
      <Sidebar />
      <main className="container">
        <SearchBar />

        {pathname === "/" && (
          <ContentGrid videos={trendingVideos} trending={true} />
        )}

        <ContentGrid videos={nonTrendingVideos} />
      </main>
    </div>
  );
}
