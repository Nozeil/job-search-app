import { useEffect } from 'react';

export default function useLockOverflow(shouldLock: boolean) {
  useEffect(() => {
    shouldLock
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [shouldLock]);
}
