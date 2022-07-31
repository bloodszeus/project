import { useEffect, useRef } from "react";

export const useClickOutside = (callback) => {
  const ref = useRef();

  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
    console.log(ref.current.contains(e.target));
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick, true);

    return () => {
      document.removeEventListener("mousedown", handleClick, true);
    };
  }, [ref]);

  return ref;
};
