import { Flex, Title, rem } from '@mantine/core';
import ResetButton from './ResetButton';
import { useStyles } from './index.hooks';

export default function Heading() {
  const { classes } = useStyles();

  return (
    <Flex className={classes.container}>
      <Title size={rem(20)} fw="bold" lh={1}>
        Фильтры
      </Title>
      <ResetButton />
    </Flex>
  );
}
