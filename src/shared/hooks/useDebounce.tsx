import { useEffect, useState } from 'react';

export default function useDeounce<T>(value: T, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  });

  return debouncedValue;
}
