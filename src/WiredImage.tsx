import * as React from 'react';
import { Elevation, BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
const { useMemo } = React;

export interface WiredImageProps extends BaseProps {
  /**
   * Gives the button a sketchy height.
   * @default 1
   */
  elevation?: Elevation;
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
