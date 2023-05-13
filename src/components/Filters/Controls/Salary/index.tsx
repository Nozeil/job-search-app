import Label from '../Label';
import Input from './Input';
import ControlWrapper from '../ControlWrapper';

export default function Salary() {
  return (
    <ControlWrapper spacing={8}>
      <Label>Оклад</Label>
      <Input placeholder="От" />
      <Input placeholder="До" />
    </ControlWrapper>
  );
}
