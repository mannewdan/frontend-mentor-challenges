import { FormStepProps } from "./Form";

type FormStepInfoProps = {
  stepProps: FormStepProps;
  requiredFields: { name: boolean; email: boolean; phone: boolean };
};

export default function FormStepInfo({
  stepProps,
  requiredFields,
}: FormStepInfoProps) {
  const { formData, setFormData } = stepProps;

  return (
    <div className="step">
      <header>
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </header>

      <div className="input-group">
        <label htmlFor="name">Name</label>
        <span
          className={`required-text ${requiredFields.name ? "required" : ""}`}
        >
          This field is required
        </span>
        <input
          className={requiredFields.name ? "required" : ""}
          type="text"
          id="name"
          placeholder="e.g. Bob Bobson"
          onChange={(e) => {
            const val = e.target.value;
            setFormData((prev) => {
              return { ...prev, name: val };
            });
          }}
          value={formData.name}
        ></input>
      </div>

      <div className="input-group">
        <label htmlFor="email">Email Address</label>
        <span
          className={`required-text ${requiredFields.email ? "required" : ""}`}
        >
          This field is required
        </span>
        <input
          className={requiredFields.email ? "required" : ""}
          type="text"
          id="email"
          placeholder="e.g. bobbobson@bob.com"
          onChange={(e) => {
            const val = e.target.value;
            setFormData((prev) => {
              return { ...prev, email: val };
            });
          }}
          value={formData.email}
        ></input>
      </div>

      <div className="input-group">
        <label htmlFor="phone">Phone Number</label>
        <span
          className={`required-text ${requiredFields.phone ? "required" : ""}`}
        >
          This field is required
        </span>
        <input
          className={requiredFields.phone ? "required" : ""}
          type="text"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          onChange={(e) => {
            const val = e.target.value;
            setFormData((prev) => {
              return { ...prev, phone: val };
            });
          }}
          value={formData.phone}
        ></input>
      </div>
    </div>
  );
}
