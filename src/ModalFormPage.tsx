import { useFormDialog } from "./hooks";

const ModalFormPage = () => {
  const { open } = useFormDialog();

  return <button onClick={open}>신청 폼 작성하기</button>;
};

export default ModalFormPage;
