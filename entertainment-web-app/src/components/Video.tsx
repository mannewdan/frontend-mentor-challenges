import { VideoT } from "../pages/Home";

type VideoProps = {
  video: VideoT;
  trending?: boolean;
};

export default function Video({ video, trending }: VideoProps) {
  return (
    <article className="video">
      <img src={video.thumbnail.regular.medium}></img>
    </article>
  );
}
