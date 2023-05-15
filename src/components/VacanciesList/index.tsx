import { Stack } from '@mantine/core';
import Card from './Card';

export default function VacanciesList() {
  const data = [
    {
      id: 0,
      title: 'Менеджер-дизайнер',
      salary: 'з/п от 70000 rub',
      type: 'Полный рабочий день',
      location: 'Новый Уренгой',
    },
    {
      id: 1,
      title: 'Ведущий графический дизайнер НЕ УДАЛЕННО',
      salary: 'з/п от 80000 rub',
      type: 'Полный рабочий день',
      location: 'Москва',
    },
    {
      id: 2,
      title: 'Работник декорации, дизайнер (ТЦ Амбар)',
      salary: 'з/п 29000 rub',
      type: 'Сменный график работы',
      location: 'Самара',
    },
    {
      id: 3,
      title: 'Менеджер-дизайнер',
      salary: 'з/п 55000 - 95000 rub',
      type: 'Полный рабочий день',
      location: 'Тюмень',
    },
  ];
  return (
    <Stack spacing={16}>
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          salary={item.salary}
          type={item.type}
          location={item.location}
        />
      ))}
    </Stack>
  );
}
