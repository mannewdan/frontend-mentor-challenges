import AddBoardForm from "./AddBoardForm";
import ViewTaskForm from "./ViewTaskForm";
import DeleteForm from "./DeleteForm";
import AddTaskForm from "./AddTaskForm";
import ModalFade from "../ModalFade";
import { FormInfoT, FormStyleE } from "../../App";

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
        return (
          <AddBoardForm
            board={formInfo.board}
            submitAction={closeForm}
            makeNewColumn={formInfo.makeNewColumn}
          />
        );
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
        if (!formInfo.board || !formInfo.task) return null;
        return (
          <ViewTaskForm
            board={formInfo.board}
            task={formInfo.task}
            setFormInfo={setFormInfo}
          />
        );
      case FormStyleE.AddTask:
        if (!formInfo.board) return null;
        return (
          <AddTaskForm
            board={formInfo.board}
            submitAction={closeForm}
            setFormInfo={setFormInfo}
          />
        );
      case FormStyleE.EditTask:
        if (!formInfo.board || !formInfo.task) return null;
        return (
          <AddTaskForm
            board={formInfo.board}
            task={formInfo.task}
            setFormInfo={setFormInfo}
          />
        );
      case FormStyleE.DeleteTask:
        if (!formInfo.board || !formInfo.task) return null;
        return (
          <DeleteForm
            board={formInfo.board}
            task={formInfo.task}
            submitAction={closeForm}
            cancelAction={() => {
              setFormInfo((prev: FormInfoT) => {
                return { ...prev, style: FormStyleE.ViewTask };
              });
            }}
          />
        );
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
