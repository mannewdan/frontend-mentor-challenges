import FormTemplate from "./FormTemplate";
import { BoardT, TaskT, useDataContext } from "../../context/DataContext";

type DeleteFormProps = {
  board: BoardT;
  task?: TaskT;
  submitAction?: () => void;
  cancelAction: () => void;
};

export default function DeleteForm({
  board,
  task,
  submitAction,
  cancelAction,
}: DeleteFormProps) {
  const { deleteBoard, deleteTask } = useDataContext();

  return (
    <FormTemplate
      title={`Delete this ${task ? "task" : "board"}?`}
      className="delete"
      danger={true}
    >
      {!task && (
        <p className="text-b-l">
          {`Are you sure you want to delete the ‘${board.name}’ board? This action will remove all columns and tasks and cannot be reversed.`}
        </p>
      )}
      {task && (
        <p className="text-b-l">{`Are you sure you want to delete the ‘${task.title}’ task and its subtasks? This action cannot be reversed.`}</p>
      )}

      <div className="button-container">
        <button
          className="button-danger"
          onClick={(e) => {
            e.preventDefault();

            if (task) {
              deleteTask(board.id, task);
            } else {
              deleteBoard(board.id);
            }

            if (submitAction) submitAction();
          }}
        >
          Delete
        </button>
        <button
          className="button-secondary"
          onClick={(e) => {
            e.preventDefault();
            if (cancelAction) cancelAction();
          }}
        >
          Cancel
        </button>
      </div>
    </FormTemplate>
  );
}
