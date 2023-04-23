import React from "react";
import TextInput from "../TextInput";
import { BoardT, ColumnT } from "../../context/DataContext";
import crossIcon from "../../assets/icon-cross.svg";

export default function AddBoardForm() {
  const [formData, setFormData] = React.useState<BoardT>({
    name: "",
    columns: [{ name: "Column 1", tasks: [] }],
  });

  console.log(formData);

  const columnEls = formData.columns.map((item, index) => {
    return (
      <div key={item.name} className="column">
        <TextInput text={item.name} />
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
    <form className="form">
      {/* Title */}
      <h3 className="text-h-l">Add New Board</h3>

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
                  { name: `Column ${prev.columns.length + 1}`, tasks: [] },
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
    </form>
  );
}
