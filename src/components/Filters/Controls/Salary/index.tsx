import Label from '../Label';
import Input from './Input';
import ControlWrapper from '../ControlWrapper';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setSalaryFrom, setSalaryTo } from '@/redux/slices/controls';
import type { NumberInputValue } from '@/types';
import { selectSalaryFrom, selectSalaryTo } from '@/redux/selectors';

export default function Salary() {
  const from = useAppSelector(selectSalaryFrom);
  const to = useAppSelector(selectSalaryTo);
  const dispatch = useAppDispatch();

  const salaryFromHandler = (value: NumberInputValue) => {
    dispatch(setSalaryFrom(value));
  };
  const salaryToHandler = (value: NumberInputValue) => {
    dispatch(setSalaryTo(value));
  };

  return (
    <ControlWrapper spacing={8}>
      <Label>Оклад</Label>
      <Input value={from} placeholder="От" changeHandler={salaryFromHandler} />
      <Input value={to} placeholder="До" changeHandler={salaryToHandler} />
    </ControlWrapper>
  );
}
