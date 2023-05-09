import { useMediaQuery } from '@mantine/hooks';
import NavMenu from '../NavMenu';
import MobileNav from '../MobileNav';

export default function ResponsiveNav() {
  const isSmallScreen = useMediaQuery('(max-width: 48em)');
  const nav = isSmallScreen ? <MobileNav /> : <NavMenu flexDirection="row" gap={60} />;

  return nav;
}
