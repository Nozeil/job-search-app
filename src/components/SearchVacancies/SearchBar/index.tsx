import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { TextInput } from '@mantine/core';
import SearchIcon from './Icons/SearchIcon';
import Button from './Button';
import { useStyles } from './index.hooks';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectSearchValue } from '@/redux/selectors';
import { setSearchValue } from '@/redux/slices/controls';

export default function SearchBar() {
  const defaultValue = useAppSelector(selectSearchValue);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(defaultValue);

  const { classes } = useStyles(value);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      dispatch(setSearchValue(e.currentTarget.value));
    }
  };

  const onClick = () => {
    dispatch(setSearchValue(value));
  };

  return (
    <TextInput
      value={value}
      onChange={onChange}
      classNames={{
        input: classes.input,
      }}
      type="search"
      onKeyUp={onKeyUp}
      placeholder="Введите название вакансии"
      size="md"
      icon={<SearchIcon />}
      iconWidth={35}
      rightSection={<Button onClick={onClick} />}
      rightSectionWidth={106}
    />
  );
}
