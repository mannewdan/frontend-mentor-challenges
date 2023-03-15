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
          <p>{AddonInfo[item].name}</p>
          <p>{`+$${AddonInfo[item].price * (isYearly ? 10 : 1)}/${
            isYearly ? "yr" : "mo"
          }`}</p>
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
        <div className="plan">
          <p>{`${PlanInfo[formData.planType].name} (${
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
          <p>{`$${PlanInfo[formData.planType].price * (isYearly ? 10 : 1)}/${
            isYearly ? "yr" : "mo"
          }`}</p>
        </div>

        {addonsEls.length > 0 && <hr></hr>}
        {addonsEls}
      </div>

      <div className="total">
        <p>{"Total (per year)"}</p>
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
