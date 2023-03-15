import { FormStepProps, PlanInfo } from "./Form";

export default function FormStepPlan({ formData, setFormData }: FormStepProps) {
  const { isYearly } = formData;

  console.log(formData);

  return (
    <div className="step">
      <header>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </header>

      <button
        className={formData.planType === PlanInfo.arcade.id ? "selected" : ""}
        onClick={(e) => {
          e.preventDefault();
          setFormData((prev) => {
            return { ...prev, planType: PlanInfo.arcade.id };
          });
        }}
      >
        <img src="images/icon-arcade.svg"></img>
        <p className="name">Arcade</p>
        <p className="price">{`$${
          PlanInfo.arcade.price * (isYearly ? 10 : 1)
        }/${isYearly ? "yr" : "mo"}`}</p>
        {isYearly && <p className="savings">2 months free</p>}
      </button>

      <button
        className={formData.planType === PlanInfo.advanced.id ? "selected" : ""}
        onClick={(e) => {
          e.preventDefault();
          setFormData((prev) => {
            return { ...prev, planType: PlanInfo.advanced.id };
          });
        }}
      >
        <img src="images/icon-advanced.svg"></img>
        <p className="name">Advanced</p>
        <p className="price">{`$${
          PlanInfo.advanced.price * (isYearly ? 10 : 1)
        }/${isYearly ? "yr" : "mo"}`}</p>
        {isYearly && <p className="savings">2 months free</p>}
      </button>

      <button
        className={formData.planType === PlanInfo.pro.id ? "selected" : ""}
        onClick={(e) => {
          e.preventDefault();
          setFormData((prev) => {
            return { ...prev, planType: PlanInfo.pro.id };
          });
        }}
      >
        <img src="images/icon-pro.svg"></img>
        <p className="name">Pro</p>
        <p className="price">{`$${PlanInfo.pro.price * (isYearly ? 10 : 1)}/${
          isYearly ? "yr" : "mo"
        }`}</p>
        {isYearly && <p className="savings">2 months free</p>}
      </button>

      <div className="interval-toggle">
        <span className={!isYearly ? "active" : ""}>Monthly</span>
        <button
          onClick={(e) => {
            e.preventDefault();
            setFormData((prev) => {
              return {
                ...prev,
                isYearly: !isYearly,
              };
            });
          }}
          className="toggler"
        >
          <div className={`circle ${isYearly ? "active" : ""}`}></div>
        </button>
        <span className={isYearly ? "active" : ""}>Yearly</span>
      </div>
    </div>
  );
}
