import MobileMenu from './MobileMenu';
import Menu from './Menu';
import useSmallScreenMediaQuery from '@/hooks/useSmallScreenMediaQuery';

export default function NavMenu() {
  const { component: nav } = useSmallScreenMediaQuery(
    <Menu flexDirection="row" gap={60} />,
    <MobileMenu />
  );

  return nav;
}
