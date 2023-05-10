import { ACTIVE_COLOR, DEFAULT_COLOR } from './index.constants';

export const setActiveLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? ACTIVE_COLOR : DEFAULT_COLOR,
  textDecoration: 'none',
  transition: '0.2s ease-in-out',
});
