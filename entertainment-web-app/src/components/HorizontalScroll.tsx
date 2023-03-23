import React from "react";
import useWindowResized from "../hooks/useWindowResized";

type HorizontalScrollProps = {
  children?: React.ReactNode;
};

export default function HorizontalScroll({ children }: HorizontalScrollProps) {
  const [xOffset, setXOffset] = React.useState(24);
  const { windowWidth } = useWindowResized();
  const ref = React.useRef<HTMLDivElement>(null);

  //functions
  const handleWheelEvent = (e: WheelEvent) => {
    //disable vertical scroll
    e.preventDefault();

    //grab scroll amount & preserve x scroll behavior
    const delta = e.deltaY ? e.deltaY : e.deltaX;

    scrollHorizontally(delta);
  };
  const scrollHorizontally = (delta: number) => {
    //calculate boundaries
    const margin = parseFloat(
      getComputedStyle(ref.current as Element).fontSize
    );
    const containerWidth = ref.current?.clientWidth;
    const scrollerWidth = ref.current?.firstElementChild?.scrollWidth;
    const max = margin;
    const min =
      !containerWidth || !scrollerWidth
        ? max
        : Math.min(max, containerWidth - scrollerWidth - margin);

    setXOffset((prev) => {
      return Math.max(min, Math.min(max, prev - delta));
    });
  };

  //effects
  React.useEffect(() => {
    const margin = parseFloat(
      getComputedStyle(ref.current as Element).fontSize
    );
    setXOffset(margin);

    //manually add event listener this way to make it not passive
    ref.current?.addEventListener("wheel", handleWheelEvent, {
      passive: false,
    });
    return () => {
      ref.current?.removeEventListener("wheel", handleWheelEvent);
    };
  }, []);
  React.useEffect(() => {
    scrollHorizontally(0);
  }, [windowWidth]);

  //rendering
  return (
    <div ref={ref} className="x-scroll-container">
      <div
        className="x-scroller"
        style={{ transform: `translateX(${xOffset}px)` }}
      >
        {children}
      </div>
    </div>
  );
}
