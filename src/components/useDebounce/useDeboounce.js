import { useEffect, useState } from 'react';

export const useDebounce = (value, ms) => {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebounce(value);
    }, ms);

    return () => {
      clearTimeout(timerID);
    };
  }, [value]);

  return debounce;
};
