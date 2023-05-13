import { TextInput } from '@mantine/core';
import SearchIcon from './Icons/SearchIcon';
import Button from './Button';
import { ChangeEvent, useState } from 'react';
import { useStyles } from './index.hooks';

export default function SearchBar() {
  const [value, setValue] = useState('');
  const { classes } = useStyles(value);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <TextInput
      classNames={{
        input: classes.input,
      }}
      type="search"
      value={value}
      onChange={onChange}
      placeholder="Введите название вакансии"
      size="md"
      icon={<SearchIcon />}
      iconWidth={35}
      rightSection={<Button />}
      rightSectionWidth={106}
    />
  );
}
