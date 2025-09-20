import { useCallback, useRef, useState } from "react";

export const useDialog = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = useCallback(() => {
    if (!dialogRef.current) return;
    dialogRef.current.showModal();
  }, [dialogRef]);

  const close = useCallback(() => {
    if (!dialogRef.current) return;
    dialogRef.current.close();
  }, [dialogRef]);

  return {
    dialogRef,
    open,
    close,
  };
};
