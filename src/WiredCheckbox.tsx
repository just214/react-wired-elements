import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
import { useMemo } from 'react';

export interface WiredCheckBoxProps extends BaseProps {
  /**
   * Rather the checkbox is checked or not.
   * @default false
   */
  checked?: boolean;
  /**
   * Disable the checkbox.
   * @default false
   */
  disabled?: boolean;
  /**
   * The color of the checkbox.
   * @default "currentColor"
   */
  color?: string;
  /**
   * Event fired when state of the checkbox changes, i.e. The user checks/unchecks the box.
   */
  onChange?(e: CustomEvent): void;
}

export const WiredCheckBox = ({
  checked = false,
  color = 'currentColor',
  disabled = false,
  onChange,
}: WiredCheckBoxProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: { disabled, checked },
      methods: { change: onChange },
      css: { '--wired-checkbox-icon-color': color },
    };
  }, [checked, disabled, color, onChange]);

  const register = useCustomElement(customValues);

  return <wired-checkbox ref={register} />;
};
