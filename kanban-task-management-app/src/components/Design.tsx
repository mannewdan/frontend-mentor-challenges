import Dropdown from "./Dropdown";

export default function Design() {
  //  document.body.classList.add("dark");

  return (
    <section
      className="flow"
      style={{ padding: "1.5rem", paddingBottom: "100vh" }}
    >
      <h1 className="text-h-xl">Heading XL</h1>
      <h2 className="text-h-l">Heading L</h2>
      <h3 className="text-h-m">Heading M</h3>
      <h4 className="text-h-s">Heading S</h4>
      <p className="text-b-l c-text-main-25">
        Body L - Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
        aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
        sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit
        nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed
        egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus
        metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo
        quis, gravida id, est.
      </p>
      <p className="text-b-m c-text-neutral">
        Body M - Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
        aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
        sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit
        nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed
        egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus
        metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo
        quis, gravida id, est.
      </p>

      <button className="button-primary-l inactive">Button Primary L</button>
      <button className="button-primary">Button Primary S</button>
      <button className="button-secondary">Button Primary S</button>
      <button className="button-danger">Button Primary S</button>

      <div className="mock-modal flow">
        <label
          onMouseLeave={(e) => {
            const target = e.target as HTMLLabelElement;
            const active = document.activeElement as HTMLElement;
            if (!target || !active) return;
            target.childNodes.forEach((item) => {
              if (item === active) active.blur();
            });
          }}
          className="checkbox"
        >
          <input type="checkbox"></input>
          <span>
            Label apibus id, otenti. Sed egestas, ante et vulputate volutpat,
            eros pede semper est, vitae luctus metus libero eu augue. Morbi
            purus libero, fauci
          </span>
          <span className="checkmark"></span>
        </label>

        <label className="text-input empty" htmlFor="task-name">
          <input
            name="task-name"
            type="text"
            placeholder="Enter task name"
          ></input>
        </label>

        <label className="text-input" htmlFor="task-description">
          <textarea
            name="task-description"
            placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
          ></textarea>
        </label>

        <select>
          <option>Todo</option>
          <option>Doing</option>
          <option>Done</option>
        </select>

        <Dropdown name={"status"} options={["Todo", "Doing", "Done"]} />
      </div>
    </section>
  );
}
