import DefaultLoader from '@/components/DefaultLoader';
import { forwardRef } from 'react';

const Loader = forwardRef<HTMLDivElement, void>((_, ref) => {
  return (
    <div ref={ref}>
      <DefaultLoader />
    </div>
  );
});

export default Loader;
