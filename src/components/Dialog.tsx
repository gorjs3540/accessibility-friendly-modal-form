import type { HTMLAttributes, RefObject, ReactNode } from "react";
import clsx from "clsx";

interface Props {
  dialogRef: RefObject<HTMLDialogElement | null>;
  header: ReactNode;
  children: ReactNode;
  footer: ReactNode;
  onDimmerClick: () => void;
}

export default function Dialog({
  dialogRef,
  header,
  children,
  footer,
  onDimmerClick,
}: Props) {
  return (
    <DialogContainer dialogRef={dialogRef}>
      <Dimmer onClick={onDimmerClick} />
      <div className="w-[80vw] pb-0 opacity-100 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[2] bg-white rounded-[28px] overflow-hidden">
        {header}
        {children}
        {footer}
      </div>
    </DialogContainer>
  );
}

function DialogContainer({
  children,
  dialogRef,
}: {
  children: ReactNode;
  dialogRef: RefObject<HTMLDialogElement | null>;
}) {
  return (
    <dialog ref={dialogRef} className="backdrop:bg-black/20" aria-modal="true">
      <div className="fixed w-full h-full flex flex-col justify-center items-center inset-0 z-[1]">
        {children}
      </div>
    </dialog>
  );
}

function Dimmer({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="fixed w-full h-full flex flex-col justify-end items-center inset-0 z-[1] bg-black/20"
    />
  );
}

Dialog.Header = function DialogHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx("flex flex-col p-5 gap-2", className)} {...props}>
      {props.children}
    </div>
  );
};

Dialog.Content = function DialogContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "flex flex-col p-5 gap-2 max-h-[50vh] overflow-y-auto",
        className,
      )}
      {...props}
    >
      {props.children}
    </div>
  );
};

Dialog.Footer = function DialogFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx("flex p-5 gap-2", className)} {...props}>
      {props.children}
    </div>
  );
};
