import { useOverlay } from "@toss/use-overlay";
import { useMemo } from "react";
import Dialog from "../../../components/Dialog";
import { Button, Input, Select } from "../../../components";
import { useEscapeKey } from "../../../hooks/useEscapeKey";
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Dialog
      open={isOpen}
      onDimmerClick={close}
      header={
        <Dialog.Header>
          <h2 className="text-2xl font-bold">신청 폼</h2>
          <p>이메일과 FE 경력 연차 등 간단한 정보를 입력해주세요.</p>
        </Dialog.Header>
      }
      footer={
        <Dialog.Footer className="flex justify-end">
          <Button className="bg-gray-300 active:bg-gray-400" onClick={close}>
            취소
          </Button>
          <Button type="submit" form="dialog-form">
            제출하기
          </Button>
        </Dialog.Footer>
      }
    >
      <Dialog.Content>
        <form
          id="dialog-form"
          className="flex flex-col gap-4"
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <Input
            label="이름 / 닉네임"
            error={errors.name?.message as string}
            autoFocus
            {...register("name", nameValidation)}
          />
          <Input
            label="이메일"
            error={errors.email?.message as string}
            {...register("email", emailValidation)}
          />
          <Select
            label="FE 경력 연차"
            options={[
              { label: "0-3년", value: "select-1" },
              { label: "4-7년", value: "select-2" },
              { label: "8년이상", value: "select-3" },
            ]}
            {...register("experience")}
          />
          <Input
            label="GitHub 링크 (선택)"
            placeholder="https://github.com/username"
            {...register("github")}
          />
        </form>
      </Dialog.Content>
    </Dialog>
  );
};

const nameValidation = {
  required: "이름 / 닉네임을 입력해주세요",
};

const emailValidation = {
  required: "이메일을 입력해주세요",
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "올바른 이메일 형식을 입력해주세요",
  },
};
