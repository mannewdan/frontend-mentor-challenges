import { VideoT } from "../pages/Home";
import Video from "./Video";
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

  return (
    <section>
      {heading}
      <div
        onScroll={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className={`video-grid ${trending ? "trending" : ""}`}
      >
        {videos.map((item) => {
          return <Video key={item.title} video={item} trending={trending} />;
        })}
      </div>
    </section>
  );
}
