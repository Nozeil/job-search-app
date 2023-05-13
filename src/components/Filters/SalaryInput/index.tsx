import { NumberInput, NumberInputHandlers, type NumberInputProps } from '@mantine/core';
import { useState, useRef } from 'react';
import Controls from './Controls';

export default function SalaryInput({ placeholder }: NumberInputProps) {
  const [value, setValue] = useState<number | ''>('');
  const handlers = useRef<NumberInputHandlers>();

  const onUpClick = () => handlers.current?.increment();
  const onDownClick = () => handlers.current?.decrement();

  return (
    <NumberInput
      placeholder={placeholder}
      hideControls
      value={value}
      onChange={(val) => setValue(val)}
      handlersRef={handlers}
      size="md"
      min={0}
      rightSection={<Controls onUpClick={onUpClick} onDownClick={onDownClick} />}
    />
  );
}
