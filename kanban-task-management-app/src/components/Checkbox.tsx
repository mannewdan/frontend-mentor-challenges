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
        <span>{name}</span>
        <span className="checkmark"></span>
      </label>
    </div>
  );
}
