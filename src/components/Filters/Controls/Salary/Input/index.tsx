import { useRef } from 'react';
import { NumberInput, NumberInputHandlers, type NumberInputProps } from '@mantine/core';
import Controls from './Controls';
import type { NumberInputValue } from '@/types';

interface Props extends NumberInputProps {
  changeHandler: (value: NumberInputValue) => void;
  testId: string;
}

export default function Input({ testId, value, placeholder, changeHandler }: Props) {
  const handlers = useRef<NumberInputHandlers>();

  const onUpClick = () => handlers.current?.increment();
  const onDownClick = () => handlers.current?.decrement();

  return (
    <NumberInput
      data-elem={testId}
      type="number"
      placeholder={placeholder}
      hideControls
      value={value}
      onChange={(val) => changeHandler(val)}
      handlersRef={handlers}
      size="md"
      min={0}
      rightSection={<Controls onUpClick={onUpClick} onDownClick={onDownClick} />}
    />
  );
}
