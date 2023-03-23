import { VideoT } from "../pages/Home";
import Video from "./Video";
import HorizontalScroll from "./HorizontalScroll";
import { useLocation } from "react-router-dom";

type ContentGridProps = {
  videos: Array<VideoT>;
  trending?: boolean;
};

export default function ContentGrid({ videos, trending }: ContentGridProps) {
  const { pathname } = useLocation();

  const subheadingText = "Recommended for you";
  const heading = trending ? (
    <h1 className="text-h-l">Trending</h1>
  ) : pathname === "/" ? (
    <h2 className="text-h-l">{subheadingText}</h2>
  ) : (
    <h1 className="text-h-l">{subheadingText}</h1>
  );

  const videoEls = videos.map((item) => {
    return <Video key={item.title} video={item} trending={trending} />;
  });
  return (
    <section className={`content-grid ${trending ? "trending" : ""}`}>
      {heading}

      {trending && <HorizontalScroll>{videoEls}</HorizontalScroll>}

      {!trending && videoEls}
    </section>
  );
}
