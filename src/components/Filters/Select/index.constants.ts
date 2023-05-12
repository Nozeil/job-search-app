export const SELECTORS = {
  THUMB: {
    VERTICAL: '[data-orientation="vertical"] .mantine-ScrollArea-thumb',
    HORIZONTAL: '[data-orientation="horizontal"] .mantine-ScrollArea-thumb',
    both() {
      return `${this.VERTICAL}, ${this.HORIZONTAL}`;
    },
  } as const,
  ITEM: {
    SELECTED: '&[data-selected]',
    HOVERED: '&[data-hovered]',
    both() {
      return `${this.SELECTED} , ${this.HOVERED}`;
    },
  },
} as const;
