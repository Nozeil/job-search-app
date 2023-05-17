import { ComponentPropsWithoutRef, forwardRef, MouseEvent } from 'react';
import { useAppDispatch } from '@/hooks';
import { setItemKey } from '@/redux/slices/select';

interface ItemProps extends ComponentPropsWithoutRef<'div'> {
  itemKey: number;
  label: string;
}

const Item = forwardRef<HTMLDivElement, ItemProps>(
  ({ itemKey, label, ...rest }: ItemProps, ref) => {
    const dispatch = useAppDispatch();

    const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
      if (rest.onMouseDown) {
        rest.onMouseDown(e);
      }
      dispatch(setItemKey(itemKey));
    };

    return (
      <div ref={ref} {...rest} onMouseDown={onMouseDown}>
        {label}
      </div>
    );
  }
);

export default Item;
