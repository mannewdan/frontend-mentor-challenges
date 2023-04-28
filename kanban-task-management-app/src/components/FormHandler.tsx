import AddBoardForm from "./Forms/AddBoardForm";
import ViewTaskForm from "./Forms/ViewTaskForm";
import DeleteForm from "./Forms/DeleteForm";
import AddTaskForm from "./Forms/AddTaskForm";
import ModalFade from "./ModalFade";
import { FormInfoT, FormStyleE } from "../App";

type FormHandlerProps = {
  formInfo: FormInfoT;
  setFormInfo: (info: FormInfoT | ((prev: FormInfoT) => FormInfoT)) => void;
};

export default function FormHandler({
  formInfo,
  setFormInfo,
}: FormHandlerProps) {
  const closeForm = () => {
    setFormInfo({ style: FormStyleE.None });
  };
  function selectFormEl() {
    switch (formInfo.style) {
      case FormStyleE.AddBoard:
        return <AddBoardForm submitAction={closeForm} />;
      case FormStyleE.EditBoard:
        if (!formInfo.board) return null;
        return <AddBoardForm board={formInfo.board} submitAction={closeForm} />;
      case FormStyleE.DeleteBoard:
        if (!formInfo.board) return null;
        return (
          <DeleteForm
            board={formInfo.board}
            submitAction={closeForm}
            cancelAction={closeForm}
          />
        );
      case FormStyleE.ViewTask:
        //validate board & task
        return <ViewTaskForm />;
      case FormStyleE.AddTask:
        if (!formInfo.board) return null;
        return <AddTaskForm board={formInfo.board} submitAction={closeForm} />;
      case FormStyleE.EditTask:
        //validate board & task
        return <>edit task</>;
      case FormStyleE.DeleteTask:
        //validate board & task
        return <>delete task</>;
      default:
        return null;
    }
  }

  const formEl = selectFormEl();
  return (
    <>
      {formEl !== null && (
        <ModalFade
          fullscreen={true}
          skipBGFade={formInfo.skipBGFade}
          action={() => {
            if (
              formInfo.style === FormStyleE.EditTask ||
              formInfo.style === FormStyleE.DeleteTask
            ) {
              setFormInfo((prev: FormInfoT) => {
                return { ...prev, style: FormStyleE.ViewTask };
              });
            } else {
              setFormInfo({ style: FormStyleE.None });
            }
          }}
        />
      )}
      {formEl !== null && <div className="form-positioner">{formEl}</div>}
    </>
  );
}
