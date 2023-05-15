import { getXsSolidBorderStyles } from '@/utils';
import { Card as MantineCard, Text, Stack } from '@mantine/core';
import Button from './Button';
import Heading from './Heading';
import Info from './Info';
import Location from './Location';

interface Props {
  title: string;
  salary: string;
  type: string;
  location: string;
}

export default function Card({ title, salary, type, location }: Props) {
  return (
    <MantineCard pos="relative" padding={24} sx={getXsSolidBorderStyles}>
      <Stack spacing="sm">
        <Heading>{title}</Heading>
        <Info
          beforeBull={
            <Text weight={600} lh="inherit">
              {salary}
            </Text>
          }
          afterBull={<Text lh="inherit">{type}</Text>}
        />
        <Location afterIcon={<Text lh={1.25}>{location}</Text>} />
      </Stack>
      <Button />
    </MantineCard>
  );
}
