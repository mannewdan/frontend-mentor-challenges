import { FormStepProps } from "./Form";

export default function FormStepInfo({ formData, setFormData }: FormStepProps) {
  return (
    <div className="step">
      <header>
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </header>

      <div className="input-group">
        <label>Name</label>
        <span className="required-text">This field is required</span>
        <input className="" type="text" placeholder="e.g. Bob Bobson"></input>
      </div>

      <div className="input-group">
        <label>Email Address</label>
        <span className="required-text">This field is required</span>
        <input
          className=""
          type="text"
          placeholder="e.g. bobbobson@bob.com"
        ></input>
      </div>

      <div className="input-group">
        <label>Phone Number</label>
        <span className="required-text">This field is required</span>
        <input
          className=""
          type="text"
          placeholder="e.g. +1 234 567 890"
        ></input>
      </div>
    </div>
  );
}
