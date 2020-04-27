import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
import { useMemo } from 'react';

export interface WiredToggleProps extends BaseProps {
  /**
   * Rather the toggle is checked or not.
   * @default false
   */
  checked?: boolean;
  /**
   * Disable the toggle.
   * @default false
   */
  disabled?: boolean;
  /**
   * The active color of the toggle knob.
   * @default rgb(63, 81, 181)
   */
  activeColor?: string;
  /**
   * The inactive color of the toggle knob.
   * @default gray
   */
  inactiveColor?: string;
  /**
   * Event fired when state of the toggle changes.
   */
  onChange?(e: CustomEvent): void;
}

export const WiredToggle = ({
  checked = false,
  disabled = false,
  onChange,
  activeColor = 'rgb(63, 81, 181)',
  inactiveColor = 'gray',
  className,
  style,
}: WiredToggleProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: { checked, disabled },
      methods: { change: onChange },
      css: {
        '--wired-toggle-on-color': activeColor,
        '--wired-toggle-off-color': inactiveColor,
      },
    };
  }, [checked, disabled, onChange, activeColor, inactiveColor]);

  const register = useCustomElement(customValues);

  return (
    <wired-toggle class={className} style={style} ref={register}></wired-toggle>
  );
};
