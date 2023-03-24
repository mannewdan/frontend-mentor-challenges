import { VideoT, ImgSizeE } from "../pages/Home";

type VideoProps = {
  video: VideoT;
  trending: boolean;
  imgSize: ImgSizeE;
};

export default function Video({ video, trending, imgSize }: VideoProps) {
  const imgEl = (
    <img
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

      <p>{"" + trending}</p>
    </article>
  );
}
