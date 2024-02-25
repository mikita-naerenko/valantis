import { useRef } from 'react';

function useDebounce(func, delay) {
  const debounceTimeout = useRef(null);

  function debouncedFunction(...args) {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      func(...args);
    }, delay);
  }

  return debouncedFunction;
}

export default useDebounce;