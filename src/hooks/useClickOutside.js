import { useEffect, useRef } from "react";

export const useClickOutside = (callback) => {
  const ref = useRef(null);

  const handleClick = (e) => {
    if (ref?.current && !ref?.current?.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick, true);

    return () => {
      document.removeEventListener("mousedown", handleClick, true);
    };
  }, [ref]);

  return ref;
};
