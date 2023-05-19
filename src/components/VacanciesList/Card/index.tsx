import { getXsSolidBorderStyles } from '@/utils';
import { Card as MantineCard, Text, Stack } from '@mantine/core';
import Heading from './Heading';
import Info from './Info';
import Location from './Location';
import { createSalary } from './index.utils';
import { ReactElement } from 'react';

interface Props {
  id: number;
  profession: string;
  town: string;
  typeOfWork: string;
  paymentTo: number;
  paymentFrom: number;
  currency: string;
  button: ReactElement;
}

export default function Card({
  id,
  profession,
  town,
  typeOfWork,
  paymentFrom,
  paymentTo,
  currency,
  button,
}: Props) {
  const salary = createSalary(paymentFrom, paymentTo, currency);

  return (
    <MantineCard pos="relative" padding={24} sx={getXsSolidBorderStyles}>
      <Stack spacing="sm" pr={24}>
        <Heading>{profession}</Heading>
        <Info
          beforeBull={
            <Text weight={600} lh="inherit">
              {salary}
            </Text>
          }
          afterBull={<Text lh="inherit">{typeOfWork}</Text>}
        />
        <Location afterIcon={<Text lh={1.25}>{town}</Text>} />
      </Stack>
      {button}
    </MantineCard>
  );
}
