import { VideoT, ImgSizeE } from "../pages/Home";
import Video from "./Video";
import HorizontalScroll from "./HorizontalScroll";
import { useLocation } from "react-router-dom";

type ContentGridProps = {
  videos: Array<VideoT>;
  trending: boolean;
  imgSize: ImgSizeE;
};
ContentGrid.defaultProps = {
  trending: false,
};

export default function ContentGrid({
  videos,
  trending,
  imgSize,
}: ContentGridProps) {
  const { pathname } = useLocation();

  const subheadingText = "Recommended for you";
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
