import { Select as MantineSelect, SelectProps } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useStyles } from './index.hooks';
import DownIcon from '../Icons/DownIcon';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getSelectValue, setSelectValue } from '@/redux/slices/Select';

export default function Select({ data, itemComponent }: SelectProps) {
  const value = useAppSelector(getSelectValue);
  const dispatch = useAppDispatch();
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles(opened);

  const classNames = {
    dropdown: classes.dropdown,
    rightSection: classes.rightSection,
    item: classes.item,
  };

  const onChange = (value: string) => {
    dispatch(setSelectValue(value));
  };

  return (
    <MantineSelect
      value={value}
      onChange={onChange}
      itemComponent={itemComponent}
      data={data}
      classNames={classNames}
      placeholder="Выберете отрасль"
      size="md"
      radius="md"
      shadow="none"
      maxDropdownHeight={188}
      rightSection={<DownIcon className={classes.icon} />}
      transitionProps={{
        transition: 'scale',
        duration: 300,
      }}
      onDropdownClose={toggle}
      onDropdownOpen={toggle}
    />
  );
}
