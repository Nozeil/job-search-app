import { Box } from '@mantine/core';
import { PropsWithChildren } from 'react';

export default function AbsoluteCenter({ children }: PropsWithChildren) {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      {children}
    </Box>
  );
}
