export default function DesignSetup() {
  return (
    <div
      className="flow"
      style={{ "--flow-space": "1.5rem" } as React.CSSProperties}
    >
      <p className="text-h-l">Heading (L) text-h-l</p>
      <p className="text-h-m">Heading (M) text-h-m</p>
      <p className="text-h-s">Heading (S) text-h-s</p>
      <p className="text-h-xs">Heading (XS) text-h-xs</p>
      <p className="text-b-m">
        Body (M) text-b-m Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
        neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
        sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit
        nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
      </p>
      <p className="text-white-75">
        text-white-75 Sed pretium, ligula sollicitudin laoreet viverra, tortor
        libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut
        justo. Suspendisse potenti.
      </p>
      <p className="text-white-50">
        text-white-50 Sed pretium, ligula sollicitudin laoreet viverra, tortor
        libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut
        justo. Suspendisse potenti.
      </p>
      <p className="text-b-s">
        Body (S) text-b-s Sed pretium, ligula sollicitudin laoreet viverra,
        tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
        mollis. Ut justo. Suspendisse potenti.
      </p>

      <img src="assets/icon-nav-home.svg"></img>
    </div>
  );
}
