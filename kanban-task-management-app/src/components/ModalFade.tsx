type ModalFadeProps = {
  action?: () => void;
  fullscreen?: boolean;
  skipBGFade?: boolean;
};

export default function ModalFade({
  action,
  fullscreen,
  skipBGFade,
}: ModalFadeProps) {
  return (
    <div
      onClick={() => {
        if (action) action();
      }}
      className={`modal-fade ${fullscreen ? "full-screen" : ""} ${
        skipBGFade ? "noanimation" : ""
      }`}
    ></div>
  );
}
