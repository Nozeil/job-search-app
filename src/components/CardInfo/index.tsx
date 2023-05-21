import { Flex, Text, TextProps, useMantineTheme } from '@mantine/core';
import { COLORS_KEYS } from '@/constants';
import type { ReactElement } from 'react';
import useSmallScreenMediaQuery from '@/hooks/useSmallScreenMediaQuery';

interface Props {
  beforeBull: ReactElement<TextProps>;
  afterBull: ReactElement<TextProps>;
}

export default function CardInfo({ beforeBull, afterBull }: Props) {
  const theme = useMantineTheme();
  const { isSmallScreen, component } = useSmallScreenMediaQuery(
    <Text lh="inherit" color={theme.colors[COLORS_KEYS.GREY_SCALE][5]}>
      &bull;
    </Text>,
    null
  );
  const direction = isSmallScreen ? 'column' : 'row';

  return (
    <Flex gap="sm" direction={direction} lh={1.31}>
      {beforeBull}
      {component}
      {afterBull}
    </Flex>
  );
}
