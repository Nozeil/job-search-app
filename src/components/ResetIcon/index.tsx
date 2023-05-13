import { SVGIconProps } from '@/types';

export default function ResetIcon({ className }: SVGIconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line className={className} x1="11.7425" y1="4.44219" x2="4.44197" y2="11.7427" />
      <line className={className} x1="11.9013" y1="11.7425" x2="4.60082" y2="4.44197" />
    </svg>
  );
}
