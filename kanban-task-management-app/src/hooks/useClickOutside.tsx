import React from "react";

export default function useClickOutside(
  action: () => void,
  containerRef: React.RefObject<HTMLElement>
) {
  React.useEffect(() => {
    const handleClick = (e: Event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as HTMLElement)
      ) {
        action();
      }
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
}
