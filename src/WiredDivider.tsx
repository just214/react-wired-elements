import * as React from 'react';
import { Elevation, BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
import { useMemo } from 'react';

export interface WiredDividerProps extends BaseProps {
  /**
   * Gives the button a sketchy height.
   * @default 1
   */
  elevation?: Elevation;
}

export const WiredDivider = ({ elevation = 1 }: WiredDividerProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: { elevation },
    };
  }, [elevation]);

  const register = useCustomElement(customValues);

  return <wired-divider ref={register}></wired-divider>;
};
