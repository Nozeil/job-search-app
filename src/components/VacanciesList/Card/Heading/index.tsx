import { COLORS_KEYS } from '@/constants';
import { Title, TitleProps, rem, useMantineTheme } from '@mantine/core';

export default function Heading({ children }: TitleProps) {
  const theme = useMantineTheme();

  return (
    <Title size={rem(20)} weight={600} color={theme.colors[COLORS_KEYS.BLUE_SCALE][4]} lh={1.1}>
      {children}
    </Title>
  );
}
