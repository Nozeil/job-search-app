import { Group, Text, TextProps, useMantineTheme } from '@mantine/core';
import { COLORS_KEYS } from '@/constants';
import type { ReactElement } from 'react';

interface Props {
  beforeBull: ReactElement<TextProps>;
  afterBull: ReactElement<TextProps>;
}

export default function CardInfo({ beforeBull, afterBull }: Props) {
  const theme = useMantineTheme();
  return (
    <Group spacing="sm" lh={1.31}>
      {beforeBull}
      <Text lh="inherit" color={theme.colors[COLORS_KEYS.GREY_SCALE][5]}>
        &bull;
      </Text>
      {afterBull}
    </Group>
  );
}
