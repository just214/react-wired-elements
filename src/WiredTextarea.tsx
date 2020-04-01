import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
const { useMemo } = React;

export interface WiredTextareaProps extends BaseProps {
  /**
   * Placeholder text for the textarea.
   */
  placeholder?: string;
  /**
   * Disable the textarea.
   * @default false
   */
  disabled?: boolean;

  /**
   * The value of the textarea.
   */
  value?: string;
  /**
   * Initial number of rows in textarea.
   * @default 3
   */
  rows?: number;
  /**
   * Maximum number of rows in textarea.
   * @default 20
   */
  maxRows?: number;
  /**
   * Event that fires any time the textarea text is changed.
   */
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  /**
   * Event that fires any time the textarea is blurred.
   */
  onBlur?(e: React.ChangeEvent<HTMLInputElement>): void;
  /**
   * Event that fires any time the textarea is focused.
   */
  onFocus?(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const WiredTextarea = ({
  placeholder,
  disabled,
  value,
  rows = 3,
  maxRows = 20,
  onChange,
  onBlur,
  onFocus,
}: WiredTextareaProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: { placeholder, disabled, value, rows, maxrows: maxRows },
      methods: { keyup: onChange, blur: onBlur, focus: onFocus },
    };
  }, [placeholder, disabled, value, rows, maxRows, onChange, onBlur, onFocus]);

  const register = useCustomElement(customValues);
  return <wired-textarea ref={register}></wired-textarea>;
};

/*
TODO: Not working-
maxrows - Max number of rows textarea grows to. Then scrollbars appear.
*/
