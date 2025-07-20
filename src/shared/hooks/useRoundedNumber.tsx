import { useMemo } from 'react';

export function useRoundedNumber(n?: number): number | undefined {
  return useMemo(() => {
    return typeof n === 'number' && n ? Math.floor(n) : n;
  }, [n]);
}
