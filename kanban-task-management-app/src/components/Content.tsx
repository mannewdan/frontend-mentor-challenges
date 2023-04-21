import { useDataContext } from "../context/DataContext";
import Column from "./Column";

export default function Content() {
  const { data } = useDataContext();

  let columnEls = [<></>];
  if (data.boards && data.boards.length > data.currentBoard) {
    columnEls = data.boards[data.currentBoard].columns.map((item) => {
      return <Column column={item} />;
    });
  }
  return (
    <div className="content">
      <div
        className={`sidebar-offsetter suppress-transitions ${
          data.showSidebar ? "" : "hide"
        }`}
      ></div>
      <div className="content-container">{columnEls}</div>
    </div>
  );
}
