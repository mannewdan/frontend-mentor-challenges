import { VideoT, ImgSizeE } from "../pages/Home";
import IconButton from "./IconButton";

type VideoProps = {
  video: VideoT;
  trending: boolean;
  imgSize: ImgSizeE;
  toggleBookmarked: (video: VideoT) => void;
};

export default function Video({
  video,
  trending,
  imgSize,
  toggleBookmarked,
}: VideoProps) {
  const imgEl = (
    <img
      className="thumbnail"
      src={(() => {
        if (trending && video.thumbnail.trending) {
          return video.thumbnail.trending[
            imgSize === ImgSizeE.Small ? imgSize : ImgSizeE.Large
          ];
        } else {
          return video.thumbnail.regular[imgSize];
        }
      })()}
    ></img>
  );

  return (
    <article className={`video ${trending ? "trending" : ""}`}>
      {imgEl}

      <div className={`text-container ${trending ? "trending" : ""}`}>
        <h3 className={`title ${trending ? "text-h-s" : "text-h-xs"}`}>
          {video.title}
        </h3>

        <div
          className={`info-group text-white-75 ${
            trending ? "text-b-m" : "text-b-s"
          }`}
        >
          <p className="year">{video.year}</p>
          <div className="category">
            <img
              className="category-icon"
              src={`assets/icon-category-${
                video.category === "TV Series" ? "tv" : "movie"
              }.svg`}
            ></img>
            <p>{video.category}</p>
          </div>
          <p className="rating">{video.rating}</p>
        </div>
      </div>

      <IconButton
        action={() => {
          toggleBookmarked(video);
        }}
        active={video.isBookmarked}
        className={`bookmark-button`}
        url={`assets/icon-bookmark-${
          !video.isBookmarked ? "empty" : "full"
        }.svg`}
      />
    </article>
  );
}
