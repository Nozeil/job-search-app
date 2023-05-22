import { type ChangeEvent, type KeyboardEvent } from 'react';
import { TextInput } from '@mantine/core';
import SearchIcon from './Icons/SearchIcon';
import Button from './Button';
import { useStyles } from './index.hooks';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectSearchValue } from '@/redux/selectors';
import { setSearchValue, setSearchData } from '@/redux/slices/controls';

export default function SearchBar() {
  const value = useAppSelector(selectSearchValue);
  const dispatch = useAppDispatch();

  const { classes } = useStyles(value);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.currentTarget.value));
  };

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      dispatch(setSearchData(e.currentTarget.value));
    }
  };

  const onClick = () => {
    dispatch(setSearchData(value));
  };

  return (
    <TextInput
      data-elem="search-input"
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
