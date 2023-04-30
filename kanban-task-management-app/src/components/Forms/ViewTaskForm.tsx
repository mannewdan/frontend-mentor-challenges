import React from "react";
import { BoardT, TaskT, useDataContext } from "../../context/DataContext";
import FormDropdown from "./FormDropdown";
import FormTemplate from "./FormTemplate";
import Checkbox from "../Checkbox";

type ViewTaskFormProps = {
  board: BoardT;
  task: TaskT;
};

export default function ViewTaskForm({ board, task }: ViewTaskFormProps) {
  const [formData, setFormData] = React.useState(task);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { editTask } = useDataContext();

  const subtaskEls = formData.subtasks.map((subtask) => {
    return (
      <Checkbox
        name={subtask.title}
        checked={subtask.isCompleted}
        toggleChecked={() => {
          //update formData
          console.log("checked");

          setFormData((prev) => {
            return {
              ...prev,
              subtasks: prev.subtasks.map((item) => {
                if (item.id === subtask.id) {
                  return { ...item, isCompleted: !item.isCompleted };
                } else return item;
              }),
            };
          });
        }}
      />
    );
  });

  React.useEffect(() => {
    editTask(board.id, formData);
  }, [formData]);

  return (
    <div ref={containerRef}>
      <FormTemplate
        title={formData.title}
        className="view-task"
        dotButtons={[
          {
            name: "Edit Task",
            onClick: () => {
              console.log("edit task");
            },
          },
          {
            name: "Delete Task",
            onClick: () => {
              console.log("delete task");
            },
            danger: true,
          },
        ]}
      >
        {formData.description && (
          <p className="description text-b-l c-text-neutral">
            {formData.description}
          </p>
        )}

        {formData.subtasks.length && (
          <>
            <p className="subtasks-label text-b-m">{`Subtasks (${formData.subtasks.reduce(
              (acc, item) => {
                if (item.isCompleted) return acc + 1;
                return acc;
              },
              0
            )} of ${formData.subtasks.length})`}</p>
            {subtaskEls}
          </>
        )}

        <FormDropdown
          name={"Status"}
          options={board.columns.map((c) => ({ name: c.name, id: c.id }))}
          selection={formData.column}
          setSelection={(selection: { name: string; id: string }) => {
            setFormData((prev) => {
              return { ...prev, column: selection };
            });
          }}
          formTemplateContainer={containerRef}
        />
      </FormTemplate>
    </div>
  );
}
