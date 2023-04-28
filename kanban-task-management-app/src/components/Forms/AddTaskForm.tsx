import React from "react";
import { BoardT, TaskT, SubtaskT } from "../../context/DataContext";
import FormTemplate from "./FormTemplate";
import TextInput from "../TextInput";
import crossIcon from "../../assets/icon-cross.svg";
import { v4 as uuid } from "uuid";
import Dropdown from "../Dropdown";
import Icon from "../Icon";

type AddTaskFormProps = {
  board: BoardT;
  task?: TaskT;
  submitAction?: () => void;
};

export default function AddTaskForm({
  board,
  task,
  submitAction,
}: AddTaskFormProps) {
  const [titleError, setTitleError] = React.useState(false);
  const [subtaskErrors, setSubtaskErrors] = React.useState(
    [] as Array<boolean>
  );
  const [formData, setFormData] = React.useState<TaskT>(
    task
      ? task
      : {
          title: "",
          description: "",
          status: board.columns.length > 0 ? board.columns[0].name : "",
          subtasks: [
            { title: "", isCompleted: false, id: uuid() },
            { title: "", isCompleted: false, id: uuid() },
          ],
          id: uuid(),
        }
  );

  const placeholderBank = [
    "e.g. Make coffee",
    "e.g. Drink coffee & smile",
    "e.g. Blow nose",
    "e.g. Go potty",
    "e.g. Walk the dog",
    "e.g. Get back to work",
  ];

  const subtaskEls = formData.subtasks.map((item, index) => {
    return (
      <div key={item.id} className="list-item">
        <TextInput
          text={item.title}
          placeholder={placeholderBank[index % placeholderBank.length]}
          error={
            subtaskErrors.length > index && subtaskErrors[index]
              ? "Can't be empty"
              : undefined
          }
          setText={(text: string) => {
            if (subtaskErrors.length > index) {
              setSubtaskErrors((prev) => {
                return prev.map((item, i) => {
                  if (i === index) {
                    return false;
                  } else return item;
                });
              });
            }

            setFormData((prev) => {
              return {
                ...prev,
                subtasks: prev.subtasks.map((prevItem, prevIndex) => {
                  if (index === prevIndex) {
                    return { ...prevItem, title: text };
                  } else return { ...prevItem };
                }),
              };
            });
          }}
        />
        <button
          type={"button"}
          onClick={(e) => {
            e.preventDefault();
            setFormData((prev) => {
              return {
                ...prev,
                subtasks: prev.subtasks.filter((prevItem, prevIndex) => {
                  return index !== prevIndex;
                }),
              };
            });
          }}
        >
          <Icon url={crossIcon} />
        </button>
      </div>
    );
  });

  return (
    <FormTemplate
      title={task ? "Edit Task" : "Add New Task"}
      className="add-task"
    >
      {/* Name */}
      <TextInput
        label={"Title"}
        placeholder="e.g. Take coffee break"
        error={
          titleError ? (formData.title ? "Duplicate title" : "") : undefined
        }
        text={formData.title}
        setText={(text: string) => {
          setTitleError(false);
          setFormData((prev) => {
            return { ...prev, title: text };
          });
        }}
      />

      {/* Description */}
      <TextInput
        label={"Description"}
        placeholder={`e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little.`}
        text={formData.description}
        setText={(text: string) => {
          setFormData((prev) => {
            return { ...prev, description: text };
          });
        }}
        isTextArea={true}
      />

      {/* Subtasks */}
      <div className="list-section">
        {formData.subtasks.length > 0 && (
          <span className="text-b-m">Subtasks</span>
        )}

        {subtaskEls}

        <button
          type={"button"}
          onClick={(e) => {
            e.preventDefault();
            setFormData((prev) => {
              return {
                ...prev,
                subtasks: [
                  ...prev.subtasks,
                  {
                    title: ``,
                    isCompleted: false,
                    id: uuid(),
                  },
                ],
              };
            });
          }}
          className="button-secondary"
        >
          + Add New Subtask
        </button>
      </div>

      {/* Status */}
      <Dropdown
        name={"Status"}
        options={board.columns.map((c) => c.name)}
        selection={formData.status}
        setSelection={(selection: string) => {
          setFormData((prev) => {
            return { ...prev, status: selection };
          });
        }}
      />

      {/* Submit */}
      <button
        type={"submit"}
        onClick={(e) => {
          e.preventDefault();

          const titleError = !formData.title;
          if (titleError) {
            setTitleError(true);
          }
          let subtaskError = false;
          const subtaskErrors = formData.subtasks.map((item) => {
            if (!item.title) subtaskError = true;
            return !item.title;
          });
          if (subtaskError) {
            setSubtaskErrors(subtaskErrors);
          }

          if (!titleError && !subtaskError) {
            console.log("No errors");
            if (task) {
              //edit task
            } else {
              //add task
            }

            if (submitAction) submitAction();
          }
        }}
        className="button-primary"
      >
        {task ? "Save Changes" : "Create Task"}
      </button>
    </FormTemplate>
  );
}
