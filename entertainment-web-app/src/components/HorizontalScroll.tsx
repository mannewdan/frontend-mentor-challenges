import React from "react";
import useWindowResized from "../hooks/useWindowResized";

type HorizontalScrollProps = {
  children?: React.ReactNode;
};

export default function HorizontalScroll({ children }: HorizontalScrollProps) {
  const [posParams, setPosParams] = React.useState({ xOffset: 24, margin: 24 });
  const { windowWidth } = useWindowResized();
  const ref = React.useRef<HTMLDivElement>(null);

  //functions
  const handleWheelEvent = (e: WheelEvent) => {
    if (checkScrollable()) {
      e.preventDefault(); //disable vertical scroll
    } else {
      return;
    }

    //grab scroll amount & preserve x scroll behavior
    const delta = e.deltaY ? e.deltaY : e.deltaX;

    scrollHorizontally(delta);
  };
  const scrollHorizontally = (delta: number) => {
    setPosParams((prev) => {
      return {
        ...prev,
        xOffset: clampOffset(prev.xOffset - delta, prev.margin),
      };
    });
  };
  const checkScrollable = (): boolean => {
    if (!ref.current || !ref.current.firstElementChild) return false;
    const containerWidth = ref.current.clientWidth;
    const scrollerWidth = ref.current.firstElementChild.scrollWidth;
    return scrollerWidth >= containerWidth;
  };
  const clampOffset = (offset: number, margin: number): number => {
    if (!ref.current || !ref.current.firstElementChild) return offset;

    //calculate boundaries
    const containerWidth = ref.current.clientWidth;
    const scrollerWidth = ref.current.firstElementChild.scrollWidth;
    const max = margin;
    const min =
      !containerWidth || !scrollerWidth
        ? max
        : Math.min(max, containerWidth - scrollerWidth - margin);

    return Math.max(min, Math.min(max, offset));
  };

  //effects
  React.useEffect(() => {
    //set initial margin & offset
    const margin = parseFloat(
      getComputedStyle(ref.current as Element).fontSize
    );
    setPosParams({ xOffset: margin, margin });

    //manually add event listener this way to make it not passive
    ref.current?.addEventListener("wheel", handleWheelEvent, {
      passive: false,
    });
    return () => {
      ref.current?.removeEventListener("wheel", handleWheelEvent);
    };
  }, []);
  React.useEffect(() => {
    //on resize, recalculate margin
    const margin = parseFloat(
      getComputedStyle(ref.current as Element).fontSize
    );
    setPosParams((prev) => {
      //snap xOffset to the new margin if it's close
      const xOffset =
        prev.margin !== margin && Math.abs(prev.xOffset - margin) < 50
          ? margin
          : prev.xOffset;

      //on resize, clamp xOffset so that the content always fits on the page
      return { xOffset: clampOffset(xOffset, margin), margin };
    });
  }, [windowWidth]);

  //rendering
  return (
    <div ref={ref} className="x-scroll-container">
      <div
        className="x-scroller"
        style={{ transform: `translateX(${posParams.xOffset}px)` }}
      >
        {children}
      </div>
    </div>
  );
}
