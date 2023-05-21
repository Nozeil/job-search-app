import { Stack, Text } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useSearchVacancyByIdQuery } from '@/services';
import { createSalary } from '@/utils';
import CardInfo from '../CardInfo';
import StarButton from '../StarButton';
import Card from '../Card';
import Heading from './Heading';
import AbsoluteLoader from '../AbsoluteLoader';
import Description from './Description';

export function VacancyInfo() {
  const { id } = useParams();

  const { data, isFetching, isError, error } = useSearchVacancyByIdQuery(id ?? skipToken);

  let content = null;

  if (isFetching) {
    content = <AbsoluteLoader />;
  } else if (isError) {
    console.error(error);
  } else if (data) {
    const salary = createSalary(data.payment_from, data.payment_to, data.currency);

    content = (
      <>
        <Card
          heading={<Heading>{data.profession}</Heading>}
          info={
            <CardInfo
              beforeBull={
                <Text size="xl" weight={700} lh="inherit">
                  {salary}
                </Text>
              }
              afterBull={
                <Text size="xl" lh="inherit">
                  {data.type_of_work.title}
                </Text>
              }
            />
          }
          button={<StarButton id={data.id} />}
          town={data.town.title}
        />
        <Description richText={data.vacancyRichText} />
      </>
    );
  }

  return <Stack spacing={20}>{content}</Stack>;
}
