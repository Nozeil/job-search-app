import RedirectButton from '@/components/RedirectButton';
import { Title, Text, Group, Stack } from '@mantine/core';
import { useStyles } from './index.hooks';

export function NotFoundPage() {
  const { classes } = useStyles();

  return (
    <Stack justify="center">
      <div className={classes.label}>404</div>
      <Title className={classes.title}>Вы нашли секретное место.</Title>
      <Text color="dimmed" size="lg" align="center" className={classes.description}>
        К сожалению, это всего лишь страница 404. Возможно, вы опечатались в адресе или страница
        былa перемещенa на другой URL.
      </Text>
      <Group position="center">
        <RedirectButton />
      </Group>
    </Stack>
  );
}
