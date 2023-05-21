import { getXsSolidBorderStyles } from '@/utils';
import { Card as MantineCard, Text, Stack } from '@mantine/core';
import Location from './Location';
import { type ReactElement } from 'react';

interface Props {
  town: string;
  heading: ReactElement;
  info: ReactElement;
  button: ReactElement;
}

export default function Card({ town, button, heading, info }: Props) {
  return (
    <MantineCard pos="relative" padding={24} sx={getXsSolidBorderStyles}>
      <Stack spacing="sm" pr={30}>
        {heading}
        {info}
        <Location afterIcon={<Text lh={1.25}>{town}</Text>} />
      </Stack>
      {button}
    </MantineCard>
  );
}
