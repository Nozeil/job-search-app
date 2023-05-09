import { COLORS } from '@/constants';
import { theme } from '@/theme';

export const setActiveLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? theme.colors[COLORS.BLUE_SCALE][5] : theme.black,
  textDecoration: 'none',
  transition: '0.2s ease-in-out',
});
