import { useDataContext } from "../context/DataContext";

export default function Content() {
  const { data } = useDataContext();

  return (
    <div className="content">
      <div
        className={`sidebar-offsetter suppress-transitions ${
          data.showSidebar ? "" : "hide"
        }`}
      ></div>
      <div className="content-container">
        <div style={{ width: "1500px", height: "1000px" }}>
          Test Quasi at eum officia nemo. Aut veritatis aliquid eos magni qui
          minus non quidem. Quasi voluptatem commodi sed quisquam. Minus nam
          omnis aut. Sunt reprehenderit qui omnis similique nostrum. Cumque
          numquam voluptatum eum minima in quae accusantium enim. Voluptas ut
          tempore tempora et rerum laboriosam quidem asperiores. Voluptatem
          occaecati et omnis facilis commodi voluptate laudantium. Fugiat qui
          qui ducimus qui sint et et mollitia.
        </div>
      </div>
    </div>
  );
}
