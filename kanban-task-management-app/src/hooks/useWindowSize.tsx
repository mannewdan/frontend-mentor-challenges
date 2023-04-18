import React from "react";

export default function useWindowSize() {
  const [isMedium, setIsMedium] = React.useState(false);
  const [isLarge, setIsLarge] = React.useState(false);
  const [isXLarge, setIsXLarge] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      const med = parseFloat(
        window
          .getComputedStyle(document.body)
          .getPropertyValue("--breakpoint-medium")
      );
      const lg = parseFloat(
        window
          .getComputedStyle(document.body)
          .getPropertyValue("--breakpoint-large")
      );
      const xlg = parseFloat(
        window
          .getComputedStyle(document.body)
          .getPropertyValue("--breakpoint-xlarge")
      );
      const fontSize = parseFloat(
        window.getComputedStyle(document.body).getPropertyValue("font-size")
      );

      setIsMedium(window.innerWidth >= med * fontSize);
      setIsLarge(window.innerWidth >= lg * fontSize);
      setIsXLarge(window.innerWidth >= xlg * fontSize);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return { isMedium, isLarge, isXLarge };
}
