import { TypographyStylesProvider, Paper } from '@mantine/core';
import { getXsSolidBorderStyles } from '@/utils';

interface Props {
  richText: string;
}

export default function Description({ richText }: Props) {
  return (
    <TypographyStylesProvider>
      <Paper
        dangerouslySetInnerHTML={{ __html: richText }}
        p={24}
        mb={7}
        sx={getXsSolidBorderStyles}
      />
    </TypographyStylesProvider>
  );
}
