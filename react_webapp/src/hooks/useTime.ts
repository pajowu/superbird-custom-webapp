import { useEffect, useState } from 'react';

export const useTime = (refreshCycle = 100): string => {
  const [now, setNow] = useState(new Date().toISOString());
  useEffect(() => {
    const intervalId = setInterval(() => setNow(new Date().toISOString()), refreshCycle);
    return () => clearInterval(intervalId);
  }, [refreshCycle, setInterval, clearInterval, setNow]);

  return now;
};
