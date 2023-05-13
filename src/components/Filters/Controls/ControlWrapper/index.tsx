import { Stack, StackProps } from '@mantine/core';

export default function ControlWrapper({ children }: StackProps) {
  return <Stack spacing={8}>{children}</Stack>;
}
