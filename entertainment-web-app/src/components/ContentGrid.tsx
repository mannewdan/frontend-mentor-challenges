import { VideoT, ImgSizeE } from "../pages/Home";
import Video from "./Video";
import HorizontalScroll from "./HorizontalScroll";
import { useLocation } from "react-router-dom";
import React from "react";

type ContentGridProps = {
  videos: Array<VideoT>;
  subheadingText: string;
  trending: boolean;
  imgSize: ImgSizeE;
  toggleBookmarked: (video: VideoT) => void;
  lockVideos?: boolean;
  findVideo?: (title: string) => VideoT | undefined;
};
ContentGrid.defaultProps = {
  trending: false,
};

export default function ContentGrid({
  videos,
  subheadingText,
  trending,
  imgSize,
  lockVideos,
  toggleBookmarked,
  findVideo,
}: ContentGridProps) {
  const { pathname } = useLocation();
  const [storedVideos, setStoredVideos] = React.useState(videos);

  const headingClass = `text-h-l ${trending ? "trending" : ""}`;
  const heading = trending ? (
    <h1 className={headingClass}>Trending</h1>
  ) : pathname === "/" ? (
    <h2 className={headingClass}>{subheadingText}</h2>
  ) : (
    <h1 className={headingClass}>{subheadingText}</h1>
  );

  const videoEls = (
    <div className={`content-grid ${trending ? "trending" : ""}`}>
      {(() => {
        const videosToDisplay = lockVideos ? storedVideos : videos;
        return videosToDisplay.map((item, index) => {
          const video = findVideo && findVideo(item.title);
          return (
            <Video
              key={pathname + item.title}
              video={video ? video : item}
              offset={index}
              trending={trending}
              imgSize={imgSize}
              toggleBookmarked={toggleBookmarked}
            />
          );
        });
      })()}
    </div>
  );
  return (
    <section className={`content-container`}>
      {heading}

      {trending && <HorizontalScroll>{videoEls}</HorizontalScroll>}
      {!trending && videoEls}
    </section>
  );
}
