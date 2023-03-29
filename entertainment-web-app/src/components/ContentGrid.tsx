import { VideoT, ImgSizeE } from "../pages/Home";
import Video from "./Video";
import HorizontalScroll from "./HorizontalScroll";
import { useLocation } from "react-router-dom";

type ContentGridProps = {
  videos: Array<VideoT>;
  subheadingText: string;
  trending: boolean;
  imgSize: ImgSizeE;
  toggleBookmarked: (video: VideoT) => void;
};
ContentGrid.defaultProps = {
  trending: false,
};

export default function ContentGrid({
  videos,
  subheadingText,
  trending,
  imgSize,
  toggleBookmarked,
}: ContentGridProps) {
  const { pathname } = useLocation();

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
      {videos.map((item) => {
        return (
          <Video
            key={item.title}
            video={item}
            trending={trending}
            imgSize={imgSize}
            toggleBookmarked={toggleBookmarked}
          />
        );
      })}
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
