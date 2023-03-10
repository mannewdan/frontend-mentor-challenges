type FormProgressMarkerProps = {
  step: number;
  name: string;
  current: number;
};

export default function FormProgressMarker({
  step,
  name,
  current,
}: FormProgressMarkerProps) {
  return (
    <div>
      <p>{step}</p>
      <p>Step {step}</p>
      <p>{name}</p>
      <p>current: {current === step ? "true" : "false"}</p>
    </div>
  );
}
