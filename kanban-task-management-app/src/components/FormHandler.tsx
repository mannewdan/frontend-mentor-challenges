import ViewTaskForm from "./Forms/ViewTaskForm";
import ModalFade from "./ModalFade";
import { FormInfoT, FormStyleE } from "../App";

type FormHandlerProps = {
  formInfo: FormInfoT;
  setFormInfo: (info: FormInfoT) => void;
};

export default function FormHandler({
  formInfo,
  setFormInfo,
}: FormHandlerProps) {
  console.log(formInfo);

  function selectFormEl() {
    switch (formInfo.style) {
      case FormStyleE.AddBoard:
        return <>add board</>;
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
        return <>add board</>;
      default:
        return null;
    }
  }

  const formEl = selectFormEl();
  return (
    <>
      {formEl !== null && (
        <ModalFade action={() => setFormInfo({ style: FormStyleE.None })} />
      )}
      {formEl !== null && <div className="form-positioner">{formEl}</div>}
    </>
  );
}
