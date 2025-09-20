import React from "react";

export const useEscapeKey = (onEsc?: () => void, enabled: boolean = true) => {
  React.useEffect(() => {
    if (!enabled || !onEsc) {
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onEsc();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onEsc, enabled]);
};
