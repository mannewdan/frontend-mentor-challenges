type InputFieldProps = {
  type: string;
  placeholder: string;
  errorText: string;
};

export default function InputField({
  type,
  placeholder,
  errorText,
}: InputFieldProps) {
  return (
    <div className={`input-field ${errorText ? "error" : ""}`}>
      <input
        aria-label={placeholder}
        type={type}
        className="text-b-m"
        placeholder={placeholder}
      ></input>
      <span className="text-b-s">{errorText}</span>
    </div>
  );
}
