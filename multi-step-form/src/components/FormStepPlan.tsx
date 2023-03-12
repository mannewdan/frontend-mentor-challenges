import { FormStepProps } from "./Form";

export default function FormStepPlan({ formData, setFormData }: FormStepProps) {
  function select(index: number) {}

  return (
    <div className="step">
      <header>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </header>

      <button
        onClick={(e) => {
          e.preventDefault();
          select(0);
        }}
      >
        <img src="images/icon-arcade.svg"></img>
        <p className="name">Arcade</p>
        <p className="price">$9/mo</p>
      </button>

      <button
        onClick={(e) => {
          e.preventDefault();
          select(1);
        }}
      >
        <img src="images/icon-advanced.svg"></img>
        <p className="name">Advanced</p>
        <p className="price">$12/mo</p>
      </button>

      <button
        onClick={(e) => {
          e.preventDefault();
          select(2);
        }}
      >
        <img src="images/icon-pro.svg"></img>
        <p className="name">Pro</p>
        <p className="price">$15/mo</p>
      </button>
    </div>
  );
}
