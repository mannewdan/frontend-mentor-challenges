type CheckboxProps = {
  name: string;
  id: string;
  checked: boolean;
  toggleChecked: () => void;
};

export default function Checkbox({
  name,
  id,
  checked,
  toggleChecked,
}: CheckboxProps) {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => toggleChecked()}
      ></input>
      <label htmlFor={id}>
        <span>{name}</span>
        <span className="checkmark"></span>
      </label>
    </div>
  );
}
