import { SVGIconProps } from '@/types';

export default function UpIcon({ className }: SVGIconProps) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        d="M9.5 7.5L6.39047 4.83469C6.16578 4.6421 5.83422 4.6421 5.60953 4.83469L2.5 7.5"
      />
    </svg>
  );
}
