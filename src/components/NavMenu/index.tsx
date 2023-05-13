import { useMediaQuery } from '@mantine/hooks';
import MobileMenu from './MobileMenu';
import Menu from './Menu';

export default function NavMenu() {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  const nav = isSmallScreen ? <MobileMenu /> : <Menu flexDirection="row" gap={60} />;

  return nav;
}
