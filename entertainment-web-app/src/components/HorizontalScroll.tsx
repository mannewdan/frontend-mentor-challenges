import React from "react";

type HorizontalScrollProps = {
  children?: React.ReactNode;
};

export default function HorizontalScroll({ children }: HorizontalScrollProps) {
  const [xOffset, setXOffset] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  const scrollHorizontally = (e: WheelEvent) => {
    //disable vertical scroll
    e.preventDefault();

    //grab scroll amount & preserve x scroll behavior
    const delta = e.deltaY ? e.deltaY : e.deltaX;

    //calculate boundaries
    const containerWidth = ref.current?.clientWidth;
    const scrollerWidth = ref.current?.firstElementChild?.scrollWidth;
    const max = 0;
    const min =
      !containerWidth || !scrollerWidth
        ? max
        : Math.min(max, containerWidth - scrollerWidth);

    setXOffset((prev) => {
      return Math.max(min, Math.min(max, prev - delta));
    });
  };

  React.useEffect(() => {
    //manually add event listener this way to make it not passive
    ref.current?.addEventListener("wheel", scrollHorizontally, {
      passive: false,
    });
    return () => {
      ref.current?.removeEventListener("wheel", scrollHorizontally);
    };
  }, []);

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
