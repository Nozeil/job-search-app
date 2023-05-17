import Label from '../Label';
import Input from './Input';
import ControlWrapper from '../ControlWrapper';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { selectSalary, setSalaryFrom, setSalaryTo } from '@/redux/slices/Salary';
import { NumberInputValue } from './index.types';

export default function Salary() {
  const { from, to } = useAppSelector(selectSalary);
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
