import { Flex, Title, rem } from '@mantine/core';
import ResetButton from './ResetButton';
import useSmallScreenMediaQuery from '@/hooks/useSmallScreenMediaQuery';

export default function Heading() {
  const { isSmallScreen } = useSmallScreenMediaQuery();
  const gap = isSmallScreen ? 20 : 67;

  return (
    <Flex gap={gap} justify="space-between" align="center">
      <Title size={rem(20)} fw="bold" lh={1}>
        Фильтры
      </Title>
      <ResetButton />
    </Flex>
  );
}
