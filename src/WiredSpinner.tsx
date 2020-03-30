import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
import { useMemo } from 'react';

export interface WiredSpinnerProps extends BaseProps {
  /**
   * Is the spinner spinning?
   * @default false
   */
  spinning?: boolean;
  /**
   * Time in milliseconds to complete one complete spin.
   * @default 1500
   */
  duration?: number;
  /**
   * The color of the spinner.
   * @default black
   */
  color?: string;
}

export const WiredSpinner = ({
  spinning = false,
  duration = 1500,
  color = 'black',
}: WiredSpinnerProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: { spinning, duration },
      css: { color },
    };
  }, [spinning, duration, color]);

  const register = useCustomElement(customValues);

  return <wired-spinner ref={register}></wired-spinner>;
};
