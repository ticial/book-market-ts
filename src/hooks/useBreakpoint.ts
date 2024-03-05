import { useState, useEffect } from "react";

export default function useBreakpoint(condition: (value: number) => boolean) {
  const [breakpoint, setBreakpoint] = useState(condition(window.innerWidth));

  useEffect(() => {
    function handleResize() {
      const result = condition(window.innerWidth);
      if (result) {
        setBreakpoint(result);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}
