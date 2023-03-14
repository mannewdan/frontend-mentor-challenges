import { FormStepProps, BillingIntervalE } from "./Form";

export default function FormStepAddons({
  formData,
  setFormData,
}: FormStepProps) {
  const isYearly = formData.billingInterval === BillingIntervalE.Yearly;

  return (
    <div className="step">
      <header>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </header>

      <button
        className={`addons-button ${
          formData.addons.onlineService ? "selected" : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          setFormData((prev) => {
            return {
              ...prev,
              addons: {
                ...prev.addons,
                onlineService: !prev.addons.onlineService,
              },
            };
          });
        }}
      >
        <div
          className={`img-container ${
            formData.addons.onlineService ? "active" : ""
          }`}
        >
          <img src="images/icon-checkmark.svg"></img>
        </div>

        <p className="name">Online service</p>
        <p className="addition">{isYearly ? "+$10/yr" : "+$1/mo"}</p>
        <p className="description">Access to multiplayer games</p>
      </button>

      <button
        className={`addons-button ${
          formData.addons.largerStorage ? "selected" : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          setFormData((prev) => {
            return {
              ...prev,
              addons: {
                ...prev.addons,
                largerStorage: !prev.addons.largerStorage,
              },
            };
          });
        }}
      >
        <div
          className={`img-container ${
            formData.addons.largerStorage ? "active" : ""
          }`}
        >
          <img src="images/icon-checkmark.svg"></img>
        </div>

        <p className="name">Larger storage</p>
        <p className="addition">{isYearly ? "+$20/yr" : "+$2/mo"}</p>
        <p className="description">Extra 1TB of cloud save</p>
      </button>

      <button
        className={`addons-button ${
          formData.addons.customizeProfile ? "selected" : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          setFormData((prev) => {
            return {
              ...prev,
              addons: {
                ...prev.addons,
                customizeProfile: !prev.addons.customizeProfile,
              },
            };
          });
        }}
      >
        <div
          className={`img-container ${
            formData.addons.customizeProfile ? "active" : ""
          }`}
        >
          <img src="images/icon-checkmark.svg"></img>
        </div>

        <p className="name">Customizable profile</p>
        <p className="addition">{isYearly ? "+$20/yr" : "+$2/mo"}</p>
        <p className="description">Custom theme on your profile</p>
      </button>
    </div>
  );
}
