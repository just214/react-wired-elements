import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
import { InputType } from './utils/inputTypes';
const { useMemo } = React;

export interface WiredInputProps extends BaseProps {
  /**
   * Placeholder text for the input.
   */
  placeholder?: string;
  /**
   * Disable the input.
   * @default false
   */
  disabled?: boolean;
  /**
   * The native input type, i.e. input, email, password.
   * @default false
   */
  type?: InputType;
  /**
   * The value of the input.
   * @default "text"
   */
  value?: string;
  /**
   * Event that fires any time the input text is changed.
   */
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  /**
   * Event that fires any time the input is blurred.
   */
  onBlur?(e: React.ChangeEvent<HTMLInputElement>): void;
  /**
   * Event that fires any time the input is focused.
   */
  onFocus?(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const WiredInput = ({
  placeholder = '',
  disabled = false,
  type = 'text',
  value = '',
  onChange,
  onBlur,
  onFocus,
}: WiredInputProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: { placeholder, disabled, type, value },
      methods: { input: onChange, blur: onBlur, focus: onFocus },
    };
  }, [placeholder, disabled, type, value, onChange, onBlur, onFocus]);

  const register = useCustomElement(customValues);
  return <wired-input ref={register}></wired-input>;
};
