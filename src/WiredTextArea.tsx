import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
const { useMemo } = React;

export interface WiredTextAreaProps extends BaseProps {
  /**
   * Placeholder text for the TextArea.
   */
  placeholder?: string;
  /**
   * Disable the TextArea.
   * @default false
   */
  disabled?: boolean;

  /**
   * The value of the TextArea.
   */
  value?: string;
  /**
   * Initial number of rows in TextArea.
   * @default 3
   */
  rows?: number;
  /**
   * Maximum number of rows in TextArea.
   * @default 20
   */
  maxRows?: number;
  /**
   * Event that fires any time the TextArea text is changed.
   */
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  /**
   * Event that fires any time the TextArea is blurred.
   */
  onBlur?(e: React.ChangeEvent<HTMLInputElement>): void;
  /**
   * Event that fires any time the TextArea is focused.
   */
  onFocus?(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const WiredTextArea = ({
  placeholder,
  disabled,
  value,
  rows = 3,
  maxRows = 20,
  onChange,
  onBlur,
  onFocus,
  className,
  style,
}: WiredTextAreaProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: { placeholder, disabled, value, rows, maxrows: maxRows },
      methods: { keyup: onChange, blur: onBlur, focus: onFocus },
    };
  }, [placeholder, disabled, value, rows, maxRows, onChange, onBlur, onFocus]);

  const register = useCustomElement(customValues);
  return (
    <wired-textarea
      class={className}
      style={style}
      ref={register}
    ></wired-textarea>
  );
};

/*
TODO: Not working-
maxrows - Max number of rows TextArea grows to. Then scrollbars appear.
*/
