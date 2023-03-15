import { FormStepProps, AddonInfo } from "./Form";

export default function FormStepAddons({
  formData,
  setFormData,
}: FormStepProps) {
  const { isYearly } = formData;

  console.log(formData);

  return (
    <div className="step">
      <header>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </header>

      <button
        className={`addons-button ${
          formData.addons[AddonInfo.onlineService.id] ? "selected" : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          setFormData((prev) => {
            const id = AddonInfo.onlineService.id;
            return {
              ...prev,
              addons: {
                ...prev.addons,
                [id]: !prev.addons[id],
              },
            };
          });
        }}
      >
        <div
          className={`img-container ${
            formData.addons[AddonInfo.onlineService.id] ? "active" : ""
          }`}
        >
          <img src="images/icon-checkmark.svg"></img>
        </div>

        <p className="name">Online service</p>
        <p className="addition">{formData.isYearly ? "+$10/yr" : "+$1/mo"}</p>
        <p className="description">Access to multiplayer games</p>
      </button>

      <button
        className={`addons-button ${
          formData.addons[AddonInfo.largerStorage.id] ? "selected" : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          setFormData((prev) => {
            const id = AddonInfo.largerStorage.id;
            return {
              ...prev,
              addons: {
                ...prev.addons,
                [id]: !prev.addons[id],
              },
            };
          });
        }}
      >
        <div
          className={`img-container ${
            formData.addons[AddonInfo.largerStorage.id] ? "active" : ""
          }`}
        >
          <img src="images/icon-checkmark.svg"></img>
        </div>

        <p className="name">Larger storage</p>
        <p className="addition">{formData.isYearly ? "+$20/yr" : "+$2/mo"}</p>
        <p className="description">Extra 1TB of cloud save</p>
      </button>

      <button
        className={`addons-button ${
          formData.addons[AddonInfo.customizableProfile.id] ? "selected" : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          setFormData((prev) => {
            const id = AddonInfo.customizableProfile.id;
            return {
              ...prev,
              addons: {
                ...prev.addons,
                [id]: !prev.addons[id],
              },
            };
          });
        }}
      >
        <div
          className={`img-container ${
            formData.addons[AddonInfo.customizableProfile.id] ? "active" : ""
          }`}
        >
          <img src="images/icon-checkmark.svg"></img>
        </div>

        <p className="name">Customizable profile</p>
        <p className="addition">{formData.isYearly ? "+$20/yr" : "+$2/mo"}</p>
        <p className="description">Custom theme on your profile</p>
      </button>
    </div>
  );
}
