import { useMemo } from 'react';

export function useTodaysDate(): { dayOfWeek: string; formattedDate: string } {
  return useMemo(() => {
    const now = new Date();

    const dayOfWeek = now.toLocaleDateString('en-GB', { weekday: 'long' });
    const formattedDate = now.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });

    return { dayOfWeek, formattedDate };
  }, []);
}
