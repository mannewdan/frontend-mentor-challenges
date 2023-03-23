import React from "react";

export default function useWindowResized() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { windowWidth };
}
