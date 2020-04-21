import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
const { useMemo } = React;

export interface WiredRadioProps extends BaseProps {
  /**
   * Check state of the radio button.
   * @default false
   */
  checked?: boolean;
  /**
   * Disable the radio button.
   * @default false
   */
  disabled?: boolean;
  /**
   * A name associated with the radio inside a radio-group.
   */

  name?: string;
  /**
   * Color of the label.
   * @default currentColor
   */
  color?: string;
  /**
   * Event fired when state of the radio changes, i.e. the user checks/unchecks the radio.
   */
  onChange?(e: CustomEvent): void;
  /**
   * The children- Use for the label.
   */
  children?: React.ReactNode;
}

export const WiredRadio = ({
  checked = false,
  disabled = false,
  name,
  color = 'currentColor',
  onChange,
  children,
  className,
  style,
}: WiredRadioProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: { checked, disabled, name },
      methods: { change: onChange },
      css: { '--wired-radio-icon-color': color },
    };
  }, [checked, disabled, name, color, onChange]);

  const register = useCustomElement(customValues);
  return (
    <wired-radio class={className} style={style} ref={register}>
      {children}
    </wired-radio>
  );
};
