import { Group, Image, TextProps } from '@mantine/core';
import LocationIcon from '@/assets/locationIcon.svg';
import { ReactElement } from 'react';

interface Props {
  afterIcon: ReactElement<TextProps>;
}

export default function Location({ afterIcon }: Props) {
  return (
    <Group spacing={8}>
      <Image width={20} height={20} src={LocationIcon} />
      {afterIcon}
    </Group>
  );
}
