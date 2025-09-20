import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

export const Button = ({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={clsx(
        "flex px-3 py-2 rounded-md bg-blue-500 text-white",
        "active:bg-blue-600 active:scale-95",
        "disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed",
        className,
      )}
      {...props}
    />
  );
};
