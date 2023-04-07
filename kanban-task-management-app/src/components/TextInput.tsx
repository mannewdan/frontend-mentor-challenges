type TextInputProps = {
  label: string;
  text: string;
  setText: (text: string) => void;
  placeholder?: string;
  empty?: boolean;
  isTextArea?: boolean;
};

export default function TextInput({
  label,
  text,
  setText,
  placeholder,
  empty,
  isTextArea,
}: TextInputProps) {
  return (
    <div className={`text-input ${empty ? "empty" : ""}`}>
      <label htmlFor={label}>{label}</label>

      {!isTextArea && (
        <input
          type="text"
          id={label}
          placeholder={placeholder ? placeholder : ""}
          onChange={(e) => {
            const value = e.target.value;
            setText(value);
          }}
          value={text}
        ></input>
      )}

      {isTextArea && (
        <textarea
          id={label}
          placeholder={placeholder ? placeholder : ""}
          onChange={(e) => {
            const value = e.target.value;
            setText(value);
          }}
          value={text}
        ></textarea>
      )}
    </div>
  );
}
