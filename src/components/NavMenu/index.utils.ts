import { COLORS } from './index.constants';

export const setActiveLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? COLORS.ACTIVE : COLORS.DEFAULT,
  textDecoration: 'none',
  transition: '0.2s ease-in-out',
});
