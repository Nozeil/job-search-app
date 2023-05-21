import { type ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '@/constants';
import { Box } from '@mantine/core';

interface Props {
  id: number;
  card: ReactElement;
}

export default function CardWrapper({ id, card }: Props) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`${PATHS.VACANCY_PAGE}/${id}`);
  };

  return (
    <Box data-elem={`vacancy-${id}`} onClick={onClick} sx={{ cursor: 'pointer' }}>
      {card}
    </Box>
  );
}
