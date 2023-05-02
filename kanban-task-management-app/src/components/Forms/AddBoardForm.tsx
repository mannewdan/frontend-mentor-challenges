import React from "react";
import TextInput from "../TextInput";
import { BoardT, ColumnT, useDataContext } from "../../context/DataContext";
import crossIcon from "../../assets/icon-cross.svg";
import { v4 as uuid } from "uuid";
import FormTemplate from "./FormTemplate";
import Icon from "../Icon";

type AddBoardForm = {
  board?: BoardT;
  makeNewColumn?: boolean;
  submitAction?: () => void;
};

export default function AddBoardForm({
  board,
  submitAction,
  makeNewColumn,
}: AddBoardForm) {
  const [nameError, setNameError] = React.useState(false);
  const [columnErrors, setColumnErrors] = React.useState([] as Array<boolean>);
  const [originalName] = React.useState(board ? board.name : "");
  const [formData, setFormData] = React.useState<BoardT>(
    board
      ? board
      : {
          name: "",
          columns: [{ name: "Column 1", tasks: [], id: uuid() }],
          id: uuid(),
        }
  );
  const { data, addBoard, editBoard, setCurrentBoard } = useDataContext();
  const [focusLatestColumn, setFocusLatestColumn] = React.useState(false);

  //functions
  function newColumn(name?: string) {
    setFormData((prev) => {
      return {
        ...prev,
        columns: [
          ...prev.columns,
          {
            name:
              name === undefined ? `Column ${prev.columns.length + 1}` : name,
            tasks: [],
            id: uuid(),
          },
        ],
      };
    });
  }

  React.useEffect(() => {
    if (makeNewColumn) {
      makeNewColumn = false;
      newColumn("");
      setFocusLatestColumn(true);
    }
  }, []);

  //rendering
  const columnEls = formData.columns.map((item, index) => {
    return (
      <div key={item.id} className="list-item">
        <TextInput
          text={item.name}
          focus={index === formData.columns.length - 1 && focusLatestColumn}
          error={
            columnErrors.length > 0 && columnErrors[index]
              ? "Can't be empty"
              : undefined
          }
          setText={(text: string) => {
            if (columnErrors.length > index) {
              setColumnErrors((prev) => {
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
                columns: prev.columns.map((prevItem, prevIndex) => {
                  if (index === prevIndex) {
                    return { ...prevItem, name: text };
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
                columns: prev.columns.filter((prevItem, prevIndex) => {
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
      title={board ? "Edit Board" : "Add New Board"}
      className="add-board"
    >
      {/* Name */}
      <TextInput
        label={"Board Name"}
        placeholder="e.g. Web Design"
        error={
          nameError
            ? formData.name
              ? "Board name already exists"
              : ""
            : undefined
        }
        text={formData.name}
        setText={(text: string) => {
          setNameError(false);
          setFormData((prev) => {
            return { ...prev, name: text };
          });
        }}
      />

      {/* Columns */}
      <div className="list-section">
        {formData.columns.length > 0 && (
          <span className="text-b-m">Board Columns</span>
        )}

        {columnEls}

        <button
          type={"button"}
          onClick={(e) => {
            e.preventDefault();
            newColumn();
            setFocusLatestColumn(false);
          }}
          className="button-secondary"
        >
          + Add New Column
        </button>
      </div>

      {/* Submit */}
      <button
        type={"submit"}
        onClick={(e) => {
          e.preventDefault();

          const nameError =
            !formData.name ||
            (originalName !== formData.name &&
              data.boards.find((item) => {
                return item.name === formData.name;
              }));
          if (nameError) {
            setNameError(true);
          }
          let columnError = false;
          const columnErrors = formData.columns.map((item) => {
            if (!item.name) columnError = true;
            return !item.name;
          });
          if (columnError) {
            setColumnErrors(columnErrors);
          }

          if (!nameError && !columnError) {
            if (board) {
              editBoard(board.id, formData);
            } else {
              addBoard(formData);
              setTimeout(() => {
                setCurrentBoard(data.boards.length);
              }, 100);
            }

            if (submitAction) submitAction();
          }
        }}
        className="button-primary"
      >
        {board ? "Save Changes" : "Create New Board"}
      </button>
    </FormTemplate>
  );
}
