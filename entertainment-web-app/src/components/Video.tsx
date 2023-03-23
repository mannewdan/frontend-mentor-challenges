import { VideoT } from "../pages/Home";

type VideoProps = {
  video: VideoT;
  trending?: boolean;
};
Video.defaultProps = {
  trending: true,
};

export default function Video({ video, trending }: VideoProps) {
  return (
    <article className={`video ${trending ? "trending" : ""}`}>
      <img src={video.thumbnail.regular.large}></img>
      <p>{"" + trending}</p>
    </article>
  );
}
