import { Select } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useStyles } from './index.hooks';
import DownIcon from '@/components/DownIcon';

export default function IndustrySelect() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles(opened);

  const data = [
    'IT, интернет, связь, телеком',
    'Кадры, управление персоналом',
    'Искусство, культура, развлечения',
    'Банки, инвестиции, лизинг',
    'Дизайн',
  ];

  const classNames = {
    dropdown: classes.dropdown,
    rightSection: classes.rightSection,
    item: classes.item,
  };

  return (
    <Select
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
