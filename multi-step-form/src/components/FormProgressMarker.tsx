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
    <div className="marker">
      <p className={`number ${current === step ? "active" : ""}`}>{step}</p>
      <p className="label">Step {step}</p>
      <p className="name">{name}</p>
    </div>
  );
}
