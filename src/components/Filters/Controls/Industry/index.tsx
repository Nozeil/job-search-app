import Label from '../Label';
import ControlWrapper from '../ControlWrapper';
import SelectWithQuery from './SelectWithQuery';

export default function Industry() {
  return (
    <ControlWrapper>
      <Label>Отрасль</Label>
      <SelectWithQuery />
    </ControlWrapper>
  );
}
