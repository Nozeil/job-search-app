import { Box } from '@mantine/core';
import Menu from '../Menu';
import { useStyles } from './index.hooks';

export default function DesktopMenu() {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Menu flexDirection="row" gap={60} />
    </Box>
  );
}
