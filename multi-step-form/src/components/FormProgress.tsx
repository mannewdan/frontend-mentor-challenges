import FormProgressMarker from "./FormProgressMarker";

type FormProgressProps = {
  currentStep: number;
};

export default function FormProgress({ currentStep }: FormProgressProps) {
  return (
    <aside className="progress">
      <FormProgressMarker step={1} name={"Your Info"} current={currentStep} />
      <FormProgressMarker step={2} name={"Select Plan"} current={currentStep} />
      <FormProgressMarker step={3} name={"Add-Ons"} current={currentStep} />
      <FormProgressMarker
        step={4}
        name={"Summary"}
        current={Math.min(currentStep, 4)}
      />
    </aside>
  );
}
