import { useOverlay } from "@toss/use-overlay";
import { useMemo } from "react";
import Dialog from "../components/Dialog";
import { Input, Select } from "../components";
import { useEscapeKey } from "./useEscapeKey";
import { useForm } from "react-hook-form";

export const useFormDialog = () => {
  const overlay = useOverlay();

  return useMemo(
    () => ({
      open: () =>
        overlay.open(({ isOpen, close }) => (
          <FormDialog isOpen={isOpen} close={close} />
        )),
      close: () => overlay.close(),
    }),
    [overlay],
  );
};

const FormDialog = ({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) => {
  useEscapeKey(close);

  const { register, handleSubmit } = useForm();

  return (
    <Dialog
      open={isOpen}
      onDimmerClick={close}
      header={
        <Dialog.Header>
          <h2>신청 폼</h2>
          <p>이메일과 FE 경력 연차 등 간단한 정보를 입력해주세요.</p>
        </Dialog.Header>
      }
      footer={
        <Dialog.Footer className="flex justify-end">
          <button onClick={close}>취소</button>
          <button type="submit" form="dialog-form">
            제출하기
          </button>
        </Dialog.Footer>
      }
    >
      <form
        id="dialog-form"
        className="flex flex-col p-5 gap-4"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <Input label="이름 / 닉네임" autoFocus {...register("name")} />
        <Input label="이메일" {...register("email")} />
        <Select
          label="FE 경력 연차"
          options={[
            { label: "0-3년", value: "select-1" },
            { label: "4-7년", value: "select-2" },
            { label: "8년이상", value: "select-3" },
          ]}
          {...register("experience")}
        />
        <Input label="GitHub 링크 (선택)" {...register("github")} />
      </form>
    </Dialog>
  );
};
