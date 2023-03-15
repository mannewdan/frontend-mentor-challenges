import { FormStepProps, PlanInfo, AddonInfo } from "./Form";

type FormStepSummaryProps = {
  stepProps: FormStepProps;
  previousStep: () => void;
};

export default function FormStepSummary({
  stepProps,
  previousStep,
}: FormStepSummaryProps) {
  const { formData, setFormData } = stepProps;
  const { isYearly } = formData;

  //rendering
  const addonsEls = Object.keys(formData.addons)
    .filter((item) => formData.addons[item])
    .map((item) => {
      return (
        <div key={item} className="addon">
          <p className="name">{AddonInfo[item].name}</p>
          <p className="price">{`+$${
            AddonInfo[item].price * (isYearly ? 10 : 1)
          }/${isYearly ? "yr" : "mo"}`}</p>
        </div>
      );
    });
  return (
    <div className="step">
      <header>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </header>

      <div className="summary">
        <div className={`plan ${addonsEls.length > 0 ? "border" : ""}`}>
          <p className="name">{`${PlanInfo[formData.planType].name} (${
            isYearly ? "Yearly" : "Monthly"
          })`}</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              previousStep();
              previousStep();
            }}
          >
            Change
          </button>
          <p className="price">{`$${
            PlanInfo[formData.planType].price * (isYearly ? 10 : 1)
          }/${isYearly ? "yr" : "mo"}`}</p>
        </div>

        {addonsEls}
      </div>

      <div className="total">
        <p className="label">{"Total (per year)"}</p>
        <p className="total-price">{`$${
          (isYearly ? 10 : 1) *
          (PlanInfo[formData.planType].price +
            Object.keys(formData.addons)
              .filter((item) => formData.addons[item])
              .reduce((acc, item) => {
                return acc + AddonInfo[item].price;
              }, 0))
        }/${isYearly ? "yr" : "mo"}`}</p>
      </div>
    </div>
  );
}
