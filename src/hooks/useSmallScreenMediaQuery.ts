import { MEDIA_QUERIES } from '@/constants';
import { useMediaQuery } from '@mantine/hooks';
import { ReactElement } from 'react';

export default function useSmallScreenMediaQuery(
  desktopComponent?: ReactElement,
  mobileComponent?: ReactElement | null
) {
  const isSmallScreen = useMediaQuery(MEDIA_QUERIES.SMALL);
  const component = isSmallScreen ? mobileComponent : desktopComponent;

  return { isSmallScreen, component };
}
