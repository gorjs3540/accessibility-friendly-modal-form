import type { PropsWithChildren } from "react";

interface Props {
  open: boolean;
  onDimmerClick: () => void;

  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}

export default function Dialog({
  open,
  onDimmerClick,
  header,
  children,
  footer,
}: Props) {
  if (!open) {
    return null;
  }

  return (
    <>
      <DialogContainer>
        <Dimmer onClick={onDimmerClick} />
        <div className="w-[80vw] pb-0 opacity-100 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[2] bg-white rounded-[28px] overflow-hidden">
          {header}
          {children}
          <div className="h-8" />
          {footer}
        </div>
      </DialogContainer>
    </>
  );
}

function DialogContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed w-full h-full flex flex-col justify-center items-center inset-0 z-[1]">
      {children}
    </div>
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

Dialog.Header = function DialogHeader(props: PropsWithChildren) {
  return <div className="flex flex-col p-5 gap-2">{props.children}</div>;
};

Dialog.Footer = function DialogFooter(props: PropsWithChildren) {
  return <div className="flex p-5 gap-2">{props.children}</div>;
};
