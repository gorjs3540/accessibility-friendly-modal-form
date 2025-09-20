import { useOverlay } from "@toss/use-overlay";
import { useMemo } from "react";
import Dialog from "../components/Dialog";
import { Input, Select } from "../components";
import { useEscapeKey } from "./useEscapeKey";

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
          <button>취소</button>
          <button>제출하기</button>
        </Dialog.Footer>
      }
    >
      <div className="flex flex-col p-5 gap-4">
        <Input label="이름 / 닉네임" autoFocus />
        <Input label="이메일" />
        <Select label="FE 경력 연차" />
        <Input label="GitHub 링크 (선택)" />
      </div>
    </Dialog>
  );
};
