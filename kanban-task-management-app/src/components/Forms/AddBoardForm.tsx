import React from "react";
import TextInput from "../TextInput";
import { BoardT, ColumnT, useDataContext } from "../../context/DataContext";
import crossIcon from "../../assets/icon-cross.svg";
import { v4 as uuid } from "uuid";
import FormTemplate from "./FormTemplate";

export default function AddBoardForm() {
  const [nameError, setNameError] = React.useState(false);
  const [columnError, setColumnError] = React.useState(false);
  const [formData, setFormData] = React.useState<BoardT>({
    name: "",
    columns: [{ name: "Column 1", tasks: [], id: uuid() }],
  });
  const { data } = useDataContext();

  const columnEls = formData.columns.map((item, index) => {
    return (
      <div key={item.id} className="column">
        <TextInput
          text={item.name}
          setText={(text: string) => {
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
          <img src={crossIcon}></img>
        </button>
      </div>
    );
  });

  return (
    <FormTemplate title={"Add New Board"}>
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
      <div className="column-section">
        {formData.columns.length > 0 && (
          <span className="text-b-m">Board Columns</span>
        )}

        {columnEls}

        <button
          type={"button"}
          onClick={(e) => {
            e.preventDefault();
            setFormData((prev) => {
              return {
                ...prev,
                columns: [
                  ...prev.columns,
                  {
                    name: `Column ${prev.columns.length + 1}`,
                    tasks: [],
                    id: uuid(),
                  },
                ],
              };
            });
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
            data.boards.find((item) => {
              return item.name === formData.name;
            });
          if (nameError) {
            setNameError(true);
          } else {
            console.log("Create New Board");
          }
        }}
        className="button-primary"
      >
        Create New Board
      </button>
    </FormTemplate>
  );
}
