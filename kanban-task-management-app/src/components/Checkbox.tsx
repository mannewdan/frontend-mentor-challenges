type CheckboxProps = {
  name: string;
  checked: boolean;
  toggleChecked: () => void;
};

export default function Checkbox({
  name,
  checked,
  toggleChecked,
}: CheckboxProps) {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={name}
        checked={checked}
        onChange={() => toggleChecked()}
      ></input>
      <label htmlFor={name}>
        <span>
          Label apibus id, otenti. Sed egestas, ante et vulputate volutpat, eros
          pede semper est, vitae luctus metus libero eu augue. Morbi purus
          libero, fauci
        </span>
        <span className="checkmark"></span>
      </label>
    </div>
  );
}
