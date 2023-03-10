import React from "react";
import FormProgress from "./FormProgress";
import FormStepInfo from "./FormStepInfo";
import FormStepPlan from "./FormStepPlan";
import FormStepAddons from "./FormStepAddons";
import FormStepSummary from "./FormStepSummary";
import ThankYou from "./ThankYou";

enum BillingIntervalE {
  Monthly = 1,
  Yearly = 12,
}
enum PlanTypeE {
  Arcade = "arcade",
  Advanced = "advanced",
  Pro = "pro",
}
type AddonsT = {
  onlineService: boolean;
  largerStorage: boolean;
  customizeProfile: boolean;
};
type FormDataT = {
  name: string;
  email: string;
  phone: string;
  planType: PlanTypeE;
  billingInterval: BillingIntervalE;
  addons: AddonsT;
};
export type FormStepProps = {
  formData: FormDataT;
  setFormData: React.Dispatch<React.SetStateAction<FormDataT>>;
};

export default function App() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formData, setFormData] = React.useState({} as FormDataT);

  function previousStep() {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  }
  function nextStep() {
    if (currentStep < 5) setCurrentStep((prev) => prev + 1);
  }

  //rendering
  function renderStep(step: number): JSX.Element {
    switch (step) {
      case 1:
        return <FormStepInfo formData={formData} setFormData={setFormData} />;
      case 2:
        return <FormStepPlan formData={formData} setFormData={setFormData} />;
      case 3:
        return <FormStepAddons formData={formData} setFormData={setFormData} />;
      case 4:
        return (
          <FormStepSummary formData={formData} setFormData={setFormData} />
        );
      case 5:
        return <ThankYou />;
      default:
        return <></>;
    }
  }
  return (
    <section className="form">
      <FormProgress currentStep={currentStep} />

      <div className="content">
        {renderStep(currentStep)}

        {currentStep < 5 && (
          <div className="form-nav">
            {currentStep > 1 && (
              <button onClick={() => previousStep()}>Go Back</button>
            )}
            <button
              className={`fancy ${currentStep >= 4 ? "confirm" : ""}`}
              onClick={() => nextStep()}
            >
              {currentStep >= 4 ? "Confirm" : "Next Step"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
