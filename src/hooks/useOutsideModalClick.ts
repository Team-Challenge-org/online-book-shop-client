import { useEffect, useRef } from "react";

export function useOutsideModalClick(handlerFunction: () => void) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const mouseDownTarget = useRef<EventTarget | null>(null);

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      mouseDownTarget.current = event.target;
    };

    const handleMouseUp = (event: MouseEvent) => {
      if (
        mouseDownTarget.current === overlayRef.current &&
        event.target === overlayRef.current
      ) {
        handlerFunction();
      }
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handlerFunction]);

  return overlayRef;
}
