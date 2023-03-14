import { FormStepProps, PlanTypeE, BillingIntervalE } from "./Form";

export default function FormStepPlan({ formData, setFormData }: FormStepProps) {
  const isYearly = formData.billingInterval === BillingIntervalE.Yearly;

  return (
    <div className="step">
      <header>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </header>

      <button
        className={formData.planType === PlanTypeE.Arcade ? "selected" : ""}
        onClick={(e) => {
          e.preventDefault();
          setFormData((prev) => {
            return { ...prev, planType: PlanTypeE.Arcade };
          });
        }}
      >
        <img src="images/icon-arcade.svg"></img>
        <p className="name">Arcade</p>
        <p className="price">{isYearly ? "$90/yr" : "$9/mo"}</p>
        {isYearly && <p className="savings">2 months free</p>}
      </button>

      <button
        className={formData.planType === PlanTypeE.Advanced ? "selected" : ""}
        onClick={(e) => {
          e.preventDefault();
          setFormData((prev) => {
            return { ...prev, planType: PlanTypeE.Advanced };
          });
        }}
      >
        <img src="images/icon-advanced.svg"></img>
        <p className="name">Advanced</p>
        <p className="price">{isYearly ? "$120/yr" : "$12/mo"}</p>
        {isYearly && <p className="savings">2 months free</p>}
      </button>

      <button
        className={formData.planType === PlanTypeE.Pro ? "selected" : ""}
        onClick={(e) => {
          e.preventDefault();
          setFormData((prev) => {
            return { ...prev, planType: PlanTypeE.Pro };
          });
        }}
      >
        <img src="images/icon-pro.svg"></img>
        <p className="name">Pro</p>
        <p className="price">{isYearly ? "$150/yr" : "$15/mo"}</p>
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
                billingInterval: !isYearly
                  ? BillingIntervalE.Yearly
                  : BillingIntervalE.Monthly,
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
