import React from "react";
import FormProgress from "./FormProgress";
import FormStepInfo from "./FormStepInfo";
import FormStepPlan from "./FormStepPlan";
import FormStepAddons from "./FormStepAddons";
import FormStepSummary from "./FormStepSummary";
import ThankYou from "./ThankYou";

export const PlanInfo: {
  [key: string]: { id: string; name: string; price: number };
} = {
  arcade: { id: "arcade", name: "Arcade", price: 9 },
  advanced: { id: "advanced", name: "Advanced", price: 12 },
  pro: { id: "pro", name: "Pro", price: 15 },
};
export const AddonInfo: {
  [key: string]: { id: string; name: string; price: number };
} = {
  onlineService: { id: "onlineService", name: "Online service", price: 1 },
  largerStorage: { id: "largerStorage", name: "Larger storage", price: 2 },
  customizableProfile: {
    id: "customizableProfile",
    name: "Customizable profile",
    price: 2,
  },
};

type FormDataT = {
  name: string;
  email: string;
  phone: string;
  planType: string;
  isYearly: boolean;
  addons: { [key: string]: boolean };
};
const defaultFormData = {
  name: "",
  email: "",
  phone: "",
  planType: PlanInfo.arcade.id,
  isYearly: false,
  addons: {},
} as FormDataT;
const defaultRequiredFields = {
  name: false,
  email: false,
  phone: false,
};
export type FormStepProps = {
  formData: FormDataT;
  setFormData: React.Dispatch<React.SetStateAction<FormDataT>>;
};

export default function App() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formData, setFormData] = React.useState({ ...defaultFormData });
  const [requiredFields, setRequiredFields] = React.useState({
    ...defaultRequiredFields,
  });

  function previousStep() {
    if (currentStep <= 1) return;
    setCurrentStep((prev) => prev - 1);
  }
  function nextStep() {
    if (currentStep >= 5) return;

    //validate inputs before moving on
    switch (currentStep) {
      case 1:
        const newFields = {
          name: !formData.name,
          email: !formData.email,
          phone: !formData.phone,
        };
        setRequiredFields(newFields);
        if (newFields.name || newFields.email || newFields.phone) return;
    }

    setCurrentStep((prev) => prev + 1);
  }

  //rendering
  function renderStep(step: number): JSX.Element {
    switch (step) {
      case 1:
        return (
          <FormStepInfo
            stepProps={{ formData, setFormData }}
            requiredFields={requiredFields}
          />
        );
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

      <form className="content">
        {renderStep(currentStep)}

        {currentStep < 5 && (
          <div className="form-nav">
            {currentStep > 1 && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  previousStep();
                }}
              >
                Go Back
              </button>
            )}
            <button
              className={`fancy ${currentStep >= 4 ? "confirm" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                nextStep();
              }}
            >
              {currentStep >= 4 ? "Confirm" : "Next Step"}
            </button>
          </div>
        )}
      </form>
    </section>
  );
}
