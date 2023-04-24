import React from "react";
import TextInput from "../TextInput";
import { BoardT, ColumnT } from "../../context/DataContext";
import crossIcon from "../../assets/icon-cross.svg";
import { v4 as uuid } from "uuid";
import FormTemplate from "./FormTemplate";

export default function AddBoardForm() {
  const [formData, setFormData] = React.useState<BoardT>({
    name: "",
    columns: [{ name: "Column 1", tasks: [], id: uuid() }],
  });

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
        text={formData.name}
        setText={(text: string) => {
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
        onClick={(e) => {
          e.preventDefault();
          console.log("Create New Board");
        }}
        className="button-primary"
      >
        Create New Board
      </button>
    </FormTemplate>
  );
}
