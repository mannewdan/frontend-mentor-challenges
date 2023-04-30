import React from "react";
import { BoardT, TaskT, useDataContext } from "../../context/DataContext";
import FormDropdown from "./FormDropdown";
import FormTemplate from "./FormTemplate";
import Checkbox from "../Checkbox";
import { FormInfoT, FormStyleE } from "../../App";

type ViewTaskFormProps = {
  board: BoardT;
  task: TaskT;
  setFormInfo: (info: FormInfoT | ((prev: FormInfoT) => FormInfoT)) => void;
};

export default function ViewTaskForm({
  board,
  task,
  setFormInfo,
}: ViewTaskFormProps) {
  const [formData, setFormData] = React.useState(task);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { editTask } = useDataContext();

  console.log(formData);

  const subtaskEls = formData.subtasks.map((subtask) => {
    return (
      <Checkbox
        key={subtask.id}
        name={subtask.title}
        id={subtask.id}
        checked={subtask.isCompleted}
        toggleChecked={() => {
          console.log(subtask.id);
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
              setFormInfo({
                style: FormStyleE.EditTask,
                board,
                task: formData,
              });
            },
          },
          {
            name: "Delete Task",
            onClick: () => {
              setFormInfo({ style: FormStyleE.DeleteTask });
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
