type TextInputProps = {
  label?: string;
  text: string;
  setText: (text: string) => void;
  placeholder?: string;
  error?: string;
  isTextArea?: boolean;
};

export default function TextInput({
  label,
  text,
  setText,
  placeholder,
  error,
  isTextArea,
}: TextInputProps) {
  return (
    <div
      className={`text-input ${error !== undefined ? "error" : ""}`}
      style={
        {
          "--content": `"${error ? error : "Can't be empty"}"`,
        } as React.CSSProperties
      }
    >
      {label && <label htmlFor={label}>{label}</label>}

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
