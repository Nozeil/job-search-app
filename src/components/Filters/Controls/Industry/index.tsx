import IndustrySelect from './Select';
import Label from '../Label';
import ControlWrapper from '../ControlWrapper';

export default function Industry() {
  return (
    <ControlWrapper>
      <Label>Отрасль</Label>
      <IndustrySelect />
    </ControlWrapper>
  );
}
