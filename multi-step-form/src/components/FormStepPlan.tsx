import { FormStepProps, PlanTypeE, BillingIntervalE } from "./Form";

export default function FormStepPlan({ formData, setFormData }: FormStepProps) {
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
        <p className="price">$9/mo</p>
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
        <p className="price">$12/mo</p>
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
        <p className="price">$15/mo</p>
      </button>

      <div className="interval-toggle">
        <span
          className={
            formData.billingInterval === BillingIntervalE.Monthly
              ? "active"
              : ""
          }
        >
          Monthly
        </span>
        <button
          onClick={(e) => {
            e.preventDefault();
            setFormData((prev) => {
              return {
                ...prev,
                billingInterval:
                  prev.billingInterval === BillingIntervalE.Monthly
                    ? BillingIntervalE.Yearly
                    : BillingIntervalE.Monthly,
              };
            });
          }}
          className="toggler"
        >
          <div
            className={`circle ${
              formData.billingInterval === BillingIntervalE.Yearly
                ? "active"
                : ""
            }`}
          ></div>
        </button>
        <span
          className={
            formData.billingInterval === BillingIntervalE.Yearly ? "active" : ""
          }
        >
          Yearly
        </span>
      </div>
    </div>
  );
}
