import { BoardT, ColumnT } from "../context/DataContext";
import { FormInfoT, FormStyleE } from "../App";

type ColumnProps = {
  board: BoardT;
  column: ColumnT;
  formInfo: FormInfoT;
  setFormInfo: (info: FormInfoT) => void;
  offset?: number;
};

export default function Column({
  board,
  column,
  formInfo,
  setFormInfo,
  offset,
}: ColumnProps) {
  const taskEls = column.tasks.map((item) => {
    return (
      <div
        key={item.title}
        onClick={() => {
          setFormInfo({
            style: FormStyleE.ViewTask,
            board,
            task: item,
          });
        }}
        className={`task suppress-transitions ${
          board.id === formInfo.board?.id && item.id === formInfo.task?.id
            ? "active"
            : ""
        }`}
      >
        <h4 className="text-h-m">{item.title}</h4>
        <p className="text-b-m c-text-neutral">{`${item.subtasks.reduce(
          (acc, item) => {
            if (item.isCompleted) return acc + 1;
            return acc;
          },
          0
        )} of ${item.subtasks.length} subtasks`}</p>
      </div>
    );
  });

  return (
    <div
      className="column"
      style={{ animationDelay: `${(offset ? offset : 0) * 75}ms` }}
    >
      <div className="title">
        <div className="dot"></div>
        <h3 className="text-h-s c-text-neutral">{`${column.name} (${column.tasks.length})`}</h3>
      </div>

      {taskEls}
    </div>
  );
}
