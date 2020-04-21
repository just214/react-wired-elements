import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
import { useMemo } from 'react';

export interface WiredDividerProps extends BaseProps {
  /**
   * Gives the button a sketchy height.
   * @default 1
   */
  elevation?: 1 | 2 | 3 | 4 | 5;
}

export const WiredDivider = ({
  elevation = 1,
  className,
  style,
}: WiredDividerProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: { elevation },
    };
  }, [elevation]);

  const register = useCustomElement(customValues);

  return (
    <wired-divider
      class={className}
      style={style}
      ref={register}
    ></wired-divider>
  );
};
