import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
const { useMemo } = React;

export interface WiredButtonProps extends BaseProps {
  /**
   * Disable the button.
   * @default false
   */
  disabled?: boolean;
  /**
   * Gives the button a sketchy height.
   * @default 1
   */
  elevation?: 1 | 2 | 3 | 4 | 5;
  /**
   * Method that fires when the button is clicked.
   * @default -
   */
  onClick?(e: MouseEvent): void;
  /**
   * The children.
   */
  children?: React.ReactNode;
}

export const WiredButton = ({
  className,
  style,
  onClick,
  elevation = 1,
  disabled = false,
  children = 'Click Me!',
}: WiredButtonProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: { disabled, elevation },
    };
  }, [elevation, disabled]);

  const register = useCustomElement(customValues);
  return (
    <wired-button
      onClick={onClick}
      class={className}
      style={style}
      ref={register}
    >
      {children}
    </wired-button>
  );
};
