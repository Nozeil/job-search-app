import { SVGIconProps } from '@/types';

export default function DownIcon({ className }: SVGIconProps) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        d="M2.5 4.5L5.60953 7.16531C5.83422 7.3579 6.16578 7.3579 6.39047 7.16531L9.5 4.5"
      />
    </svg>
  );
}
