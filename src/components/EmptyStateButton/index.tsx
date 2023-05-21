import { PATHS, FONTS, COLORS_KEYS } from '@/constants';
import { useAppDispatch } from '@/hooks/redux';
import { resetFilters } from '@/redux/slices/controls';
import { Button } from '@mantine/core';
import { useNavigate, useLocation } from 'react-router-dom';

export default function EmptyStateButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const onClick = () => {
    if (location.state === PATHS.SEARCH_PAGE) {
      dispatch(resetFilters());
    }
    navigate(PATHS.SEARCH_PAGE);
  };

  return (
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
  );
}
