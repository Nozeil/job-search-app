import { Flex, Text, TextProps } from '@mantine/core';
import type { ReactElement } from 'react';
import { useStyles } from './index.hooks';

interface Props {
  beforeBull: ReactElement<TextProps>;
  afterBull: ReactElement<TextProps>;
}

export default function CardInfo({ beforeBull, afterBull }: Props) {
  const { classes } = useStyles();

  return (
    <Flex className={classes.container}>
      {beforeBull}
      <Text className={classes.bull}>&bull;</Text>
      {afterBull}
    </Flex>
  );
}
