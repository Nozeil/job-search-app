import { Stack, Image, Title, rem, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import empty from '@/assets/empty.svg';
import { COLORS_KEYS, FONTS, PATHS } from '@/constants';

export default function EmptyPage() {
  const navigate = useNavigate();

  const onClick = () => navigate(PATHS.SEARCH_PAGE);

  return (
    <Stack mt={120} spacing={32} align="center">
      <Image src={empty} width={240} height={230} alt="empty" />
      <Title size={rem(24)} fw="bold" color="#343A40">
        Упс, здесь еще ничего нет!
      </Title>
      <Button
        onClick={onClick}
        variant="light"
        w={164}
        h={42}
        radius="md"
        ff={FONTS.EMPTY_STATE_BUTTON}
        sx={(theme) => ({
          backgroundColor: theme.colors[COLORS_KEYS.BLUE_SCALE][0],
          color: theme.colors[COLORS_KEYS.BLUE_SCALE][5],
        })}
      >
        Поиск Вакансий
      </Button>
    </Stack>
  );
}
