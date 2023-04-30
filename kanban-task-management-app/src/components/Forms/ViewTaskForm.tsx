import { BoardT, TaskT } from "../../context/DataContext";
import FormTemplate from "./FormTemplate";

type ViewTaskFormProps = {
  board: BoardT;
  task: TaskT;
};

export default function ViewTaskForm({ board, task }: ViewTaskFormProps) {
  console.log(task);

  return (
    <FormTemplate
      title={task.title}
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
      <p className="text-b-l c-text-neutral">{task.description}</p>
    </FormTemplate>
  );
}
