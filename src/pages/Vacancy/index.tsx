import { Container } from '@mantine/core';
import { VacancyInfo } from '@/components/VacancyInfo';

export default function VacancyPage() {
  return (
    <Container size="md" p={0}>
      <VacancyInfo />
    </Container>
  );
}
