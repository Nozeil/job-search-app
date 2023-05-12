import { createStyles } from '@mantine/core';
import { SIZES } from '@/constants';

export const useStyles = createStyles(() => ({
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
    height: '50vh',
    minHeight: 200,
    padding: 20,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflowY: 'auto',
  },
}));
