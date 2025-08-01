import { useEffect, useRef } from "react";

export function useAutoFocus() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const focusElement = () => {
      if (element !== document.activeElement) {
        element.focus();
      }
    };

    element.focus();
    element.addEventListener("blur", focusElement);

    return () => {
      element.removeEventListener("blur", focusElement);
    };
  }, []);

  return ref;
}
