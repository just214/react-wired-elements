import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
const { useMemo } = React;

export interface WiredImageProps extends BaseProps {
  /**
   * Gives the button a sketchy height.
   * @default 1
   */
  elevation?: 1 | 2 | 3 | 4 | 5;
  /**
   * URL of the image.
   * @default 'http://placekitten.com/200/300'
   */
  src?: string;
}

export const WiredImage = ({
  elevation = 1,
  src = 'http://placekitten.com/200/300',
}: WiredImageProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: { src, elevation },
    };
  }, [elevation, src]);

  const register = useCustomElement(customValues);
  return <wired-image ref={register}></wired-image>;
};
