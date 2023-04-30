import React from "react";
import useClickOutside from "../../hooks/useClickOutside";

type FormDropdownProps = {
  name: string;
  options: Array<{ name: string; id: string }>;
  selection: { name: string; id: string };
  setSelection: (selection: { name: string; id: string }) => void;
  formTemplateContainer: React.RefObject<HTMLElement>;
};

const gapSize = 10;

export default function FormDropdown({
  name,
  options,
  selection,
  setSelection,
  formTemplateContainer,
}: FormDropdownProps) {
  const [expanded, setExpanded] = React.useState(false);
  const [yOffset, setYOffset] = React.useState(0);
  const [transitionDirection, setTransitionDirection] = React.useState(1);
  const labelRef = React.useRef<HTMLLabelElement>(null);
  const selectBoxRef = React.useRef<HTMLDivElement>(null);
  const optionsRef = React.useRef<HTMLDivElement>(null);

  useClickOutside(() => setExpanded(false), labelRef);

  function updateOffset() {
    if (!formTemplateContainer?.current) return;
    if (!selectBoxRef?.current) return;
    if (!optionsRef?.current) return;

    const formRect = formTemplateContainer.current.getBoundingClientRect();
    const selectRect = selectBoxRef.current.getBoundingClientRect();
    const optionsRect = optionsRef.current.getBoundingClientRect();
    const threshold = formRect.bottom + formRect.top * 0.75;

    if (selectRect.bottom + gapSize + optionsRect.height > threshold) {
      setYOffset(
        Math.min(
          selectRect.top - formRect.top - optionsRect.height - gapSize,
          threshold - optionsRect.height - formRect.top
        )
      );
      setTransitionDirection(-1);
    } else {
      setYOffset(selectRect.bottom - formRect.top + gapSize);
      setTransitionDirection(1);
    }
  }

  React.useEffect(() => {
    updateOffset();
  }, [expanded]);
  React.useEffect(() => {
    const scrollableArea =
      formTemplateContainer?.current?.firstChild?.firstChild;
    if (scrollableArea) {
      scrollableArea.addEventListener("scroll", updateOffset);
      return () => {
        scrollableArea.removeEventListener("scroll", updateOffset);
      };
    }
  }, [formTemplateContainer, expanded]);

  return (
    <label
      ref={labelRef}
      htmlFor={name}
      className={`dropdown-label ${expanded ? "expanded" : ""}`}
      onClick={() => setExpanded((prev) => !prev)}
    >
      <select
        className="hidden"
        onChange={(e) => {
          console.log(e.target.value);
          const matchingOption = options.find(
            (option) => option.id === e.target.value
          );
          setSelection(matchingOption ? matchingOption : { name: "", id: "" });
        }}
        value={selection.id}
        name={name}
      >
        {options.map((item) => {
          return (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>

      <span className="text-b-m c-text-neutral">{name}</span>
      <div ref={selectBoxRef} className="select-box">
        <div
          style={
            {
              "--rotationOffset": `${transitionDirection > 0 ? "0" : "180"}deg`,
            } as React.CSSProperties
          }
          className="selection text-b-l"
        >
          {selection.name}
        </div>
        <div className="options-container"></div>
        <div
          ref={optionsRef}
          style={
            {
              "--yOffset": `${yOffset}px`,
              transform: `translateY(${
                expanded ? 0 : -0.5 * transitionDirection
              }em) scaleY(1)`,
            } as React.CSSProperties
          }
          className={`options ${expanded ? "expanded" : ""}`}
        >
          {options.map((item) => {
            return (
              <span
                key={item.id}
                className={`text-b-l ${
                  item.id === selection.id ? "selected" : ""
                }`}
                onClick={() => setSelection(item)}
              >
                {item.name}
              </span>
            );
          })}
        </div>
      </div>
    </label>
  );
}
