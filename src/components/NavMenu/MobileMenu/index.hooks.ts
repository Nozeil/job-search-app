import { createStyles } from '@mantine/core';
import { SIZES } from '@/constants';

export const useStyles = createStyles((theme) => ({
  container: {
    display: 'none',
    height: '100%',

    [theme.fn.smallerThan('sm')]: {
      display: 'block',
    },
  },

  root: {
    position: 'relative',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: SIZES.HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    height: `calc(100vh - ${SIZES.HEADER_HEIGHT}px)`,
    minHeight: 200,
    padding: `20px 20px ${SIZES.HEADER_HEIGHT}px 20px`,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflowY: 'auto',
  },
}));
