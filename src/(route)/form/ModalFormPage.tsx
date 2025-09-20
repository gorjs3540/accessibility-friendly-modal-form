import { Button } from "../../components";
import { useFormDialog } from "./hooks";

const ModalFormPage = () => {
  const { open } = useFormDialog();

  return (
    <div className="flex justify-center items-center h-screen">
      <Button tabIndex={0} onClick={open}>
        신청 폼 작성하기
      </Button>
    </div>
  );
};

export default ModalFormPage;
