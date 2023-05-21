import { type PropsWithChildren, useEffect } from 'react';
import { Stack, Text } from '@mantine/core';
import CardWrapper from './CardWrapper';
import { setInitialFavoriteIds } from './index.utils';
import type { VacancysResponse } from '@/models';
import useEmptyStateRedirect from '@/hooks/useEmptyStateRedirect';
import Card from '../Card';
import StarButton from '../StarButton';
import Heading from './CardHeading';
import CardInfo from '../CardInfo';
import { createSalary } from '@/utils';

interface Props {
  data: VacancysResponse;
}

export default function VacanciesList({ data, children }: PropsWithChildren<Props>) {
  useEmptyStateRedirect(data);
  useEffect(setInitialFavoriteIds, []);

  const cards = data.map((item) => {
    const salary = createSalary(item.payment_from, item.payment_to, item.currency);

    return (
      <CardWrapper
        id={item.id}
        key={item.id}
        card={
          <Card
            heading={<Heading>{item.profession}</Heading>}
            info={
              <CardInfo
                beforeBull={
                  <Text weight={600} lh="inherit">
                    {salary}
                  </Text>
                }
                afterBull={<Text lh="inherit">{item.type_of_work.title}</Text>}
              />
            }
            town={item.town.title}
            button={<StarButton id={item.id} />}
          />
        }
      />
    );
  });

  return (
    <Stack spacing={16}>
      {cards}
      {children}
    </Stack>
  );
}
