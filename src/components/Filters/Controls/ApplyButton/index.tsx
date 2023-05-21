import { BUTTON_VARIANTS } from '@/constants';
import { useAppDispatch } from '@/hooks/redux';
import { setShouldSearchTrue } from '@/redux/slices/controls';
import { Button } from '@mantine/core';

export default function ApplyButton() {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(setShouldSearchTrue());
  };

  return (
    <Button data-elem="search-button" variant={BUTTON_VARIANTS.PRIMARY} h={40} onClick={onClick}>
      Примeнить
    </Button>
  );
}
