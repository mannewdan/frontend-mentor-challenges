import React from "react";

type TextInputProps = {
  label?: string;
  text: string;
  setText: (text: string) => void;
  placeholder?: string;
  error?: string;
  isTextArea?: boolean;
  focus?: boolean;
};

export default function TextInput({
  label,
  text,
  setText,
  placeholder,
  error,
  isTextArea,
  focus,
}: TextInputProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    if (focus && inputRef.current) {
      inputRef.current.focus();
      focus = false;
    }
    if (focus && textAreaRef.current) {
      textAreaRef.current.focus();
      focus = false;
    }
  }, []);

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
          ref={inputRef}
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
          ref={textAreaRef}
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
