import { useDataContext } from "../context/DataContext";
import Column from "./Column";
import { FormInfoT, FormStyleE } from "../App";

type ContentProps = {
  formInfo: FormInfoT;
  setFormInfo: (info: FormInfoT) => void;
};

export default function Content({ formInfo, setFormInfo }: ContentProps) {
  const { data } = useDataContext();
  const currentBoard =
    data.boards.length > data.currentBoard
      ? data.boards[data.currentBoard]
      : null;
  const hasColumns = currentBoard ? currentBoard.columns.length > 0 : false;

  let columnEls = [] as Array<JSX.Element>;
  if (data.boards && data.boards.length > data.currentBoard) {
    columnEls = data.boards[data.currentBoard].columns.map((item, index) => {
      return (
        <Column
          key={item.id}
          board={data.boards[data.currentBoard]}
          column={item}
          formInfo={formInfo}
          setFormInfo={setFormInfo}
          offset={index}
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
      <div className="content-container">
        {hasColumns && (
          <>
            {columnEls}
            <button
              className="column empty"
              onClick={() => {
                if (!currentBoard) return;
                setFormInfo({
                  style: FormStyleE.EditBoard,
                  board: currentBoard,
                  makeNewColumn: true,
                });
              }}
            >
              <p className="text-h-xl c-text-neutral">+ New Column</p>
            </button>
          </>
        )}
        {currentBoard && !hasColumns && (
          <div className="empty-notifier">
            <p className="text-h-l c-text-neutral">{`This board is empty. Create a new column to get started.`}</p>
            <button
              className="button-primary"
              onClick={() => {
                setFormInfo({
                  style: FormStyleE.EditBoard,
                  board: currentBoard,
                  makeNewColumn: true,
                });
              }}
            >
              + Add New Column
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
