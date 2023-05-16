import { getXsSolidBorderStyles } from '@/utils';
import { Card as MantineCard, Text, Stack } from '@mantine/core';
import Button from './Button';
import Heading from './Heading';
import Info from './Info';
import Location from './Location';
import { createSalary } from './index.utils';

interface Props {
  id: number;
  profession: string;
  town: string;
  typeOfWork: string;
  paymentTo: number;
  paymentFrom: number;
  currency: string;
}

export default function Card({
  profession,
  town,
  typeOfWork,
  paymentFrom,
  paymentTo,
  currency,
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
      <Button />
    </MantineCard>
  );
}
