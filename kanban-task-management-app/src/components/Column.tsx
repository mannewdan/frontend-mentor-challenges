import { ColumnT } from "../context/DataContext";

type ColumnProps = {
  column: ColumnT;
};

export default function Column({ column }: ColumnProps) {
  const taskEls = column.tasks.map((item) => {
    return (
      <div className="task">
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
    <div className="column">
      <div className="title">
        <div className="dot"></div>
        <h3 className="text-h-s c-text-neutral">{`${column.name} (${column.tasks.length})`}</h3>
      </div>

      {taskEls}
    </div>
  );
}
