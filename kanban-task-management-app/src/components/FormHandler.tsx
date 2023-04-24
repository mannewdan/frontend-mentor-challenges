import AddBoardForm from "./Forms/AddBoardForm";
import ViewTaskForm from "./Forms/ViewTaskForm";
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
  function selectFormEl() {
    switch (formInfo.style) {
      case FormStyleE.AddBoard:
        return <AddBoardForm />;
      case FormStyleE.EditBoard:
        //validate board
        return <>edit board</>;
      case FormStyleE.DeleteBoard:
        //validate board
        return <>delete board</>;
      case FormStyleE.ViewTask:
        //validate board & task
        return <ViewTaskForm />;
      case FormStyleE.AddTask:
        //validate board
        return <>add task</>;
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
