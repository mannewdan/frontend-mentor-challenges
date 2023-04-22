import { useDataContext } from "../context/DataContext";
import Column from "./Column";
import { FormInfoT } from "../App";

type ContentProps = {
  formInfo: FormInfoT;
  setFormInfo: (info: FormInfoT) => void;
};

export default function Content({ formInfo, setFormInfo }: ContentProps) {
  const { data } = useDataContext();

  let columnEls = [<></>];
  if (data.boards && data.boards.length > data.currentBoard) {
    columnEls = data.boards[data.currentBoard].columns.map((item) => {
      return (
        <Column
          key={item.name}
          boardName={data.boards[data.currentBoard].name}
          column={item}
          formInfo={formInfo}
          setFormInfo={setFormInfo}
        />
      );
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
