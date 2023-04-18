type ModalFadeProps = {
  action?: () => void;
};

export default function ModalFade({ action }: ModalFadeProps) {
  return (
    <div
      onClick={() => {
        if (action) action();
      }}
      className="modal-fade"
    ></div>
  );
}
