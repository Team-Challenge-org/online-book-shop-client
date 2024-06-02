import { useEffect, useRef } from "react";

export function useOutsideModalClick(handlerFunction: () => void) {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOverlayClick = (event: MouseEvent) => {
      if (event.target === overlayRef.current) {
        handlerFunction();
      }
    };

    document.addEventListener("click", handleOverlayClick);

    return () => {
      document.removeEventListener("click", handleOverlayClick);
    };
  }, [handlerFunction]);

  return overlayRef;
}
