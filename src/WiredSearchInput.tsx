import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
const { useMemo } = React;

export interface WiredSearchInputProps extends BaseProps {
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

export const WiredSearchInput = ({
  placeholder,
  disabled = false,
  value,
  onChange,
  onBlur,
  onFocus,
}: WiredSearchInputProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: { placeholder, disabled, value },
      methods: { keyup: onChange, blur: onBlur, focus: onFocus },
    };
  }, [placeholder, disabled, value, onChange, onBlur, onFocus]);

  const register = useCustomElement(customValues);
  return <wired-search-input ref={register}></wired-search-input>;
};
