type HorizontalScrollProps = {
  children?: React.ReactNode;
};

export default function HorizontalScroll({ children }: HorizontalScrollProps) {
  return (
    <div
      onMouseEnter={() => {}}
      onWheel={(e) => {
        e.preventDefault();
      }}
      className="x-scroll"
    >
      {children}
    </div>
  );
}
