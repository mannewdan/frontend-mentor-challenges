import React from "react";
import Dropdown from "./Dropdown";
import Checkbox from "./Checkbox";
import TextInput from "./TextInput";

export default function Design() {
  document.body.classList.add("dark");

  const sOptions = ["Todo", "What", "Hey"];
  const [checked, setChecked] = React.useState(false);
  const [selection, setSelection] = React.useState(sOptions[0]);
  const [text, setText] = React.useState("");
  const [textArea, setTextArea] = React.useState("");

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
        <Checkbox
          name="checkbox"
          checked={checked}
          toggleChecked={() => setChecked((prev) => !prev)}
        />

        <TextInput
          text={text}
          setText={setText}
          label="Title"
          placeholder="e.g. Take coffee break"
        />

        <TextInput
          text={textArea}
          setText={setTextArea}
          label="Description"
          placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little"
          isTextArea={true}
        />

        {/* 
         <Dropdown
          name={"status"}
          options={sOptions}
          selection={selection}
          setSelection={setSelection}
        />       
        */}
      </div>
    </section>
  );
}
