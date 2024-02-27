import { useState } from "react";

export default function useDebounce(delay: number) {
  const [searchTimeout, setSearchTimeout] = useState<
    NodeJS.Timeout | undefined
  >(undefined);

  const debounce = (action: () => void) => {
    clearTimeout(searchTimeout);

    setSearchTimeout(
      setTimeout(() => {
        action();
      }, delay)
    );
  };
  return debounce;
}
