import { FONTS } from '../constants';
import COLORS from './colors';
import CONTAINER from './components/Container';
import INPUT from './components/Input';
import BUTTON from './components/Button';

export const theme = {
  fontFamily: FONTS.MAIN,
  black: '#232134',
  colors: COLORS,
  components: {
    Container: CONTAINER,
    Input: INPUT,
    Button: BUTTON,
  },
  transitionTimingFunction: 'ease-in-out',
} as const;
