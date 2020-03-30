import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
import { useMemo } from 'react';

export interface WiredLinkProps extends BaseProps {
  /**
   * Gives the button a sketchy height.
   * @default 1
   */
  elevation?: 1 | 2 | 3 | 4 | 5;
  /**
   * URL of the page to navigate to
   */
  href?: string;
  /**
   * The native target attribute. "_blank" automatically applies "rel='noopener noreferrer'""
   */
  target?: '_blank' | '_self' | '_parent' | '_top' | 'framename';
  /**
   * The color of the text.
   * @default "black"
   */
  color?: string;
  /**
   * The color of the text underline.
   * @default "black"
   */
  lineColor?: string;
  /**
   * The children.
   */
  children?: React.ReactNode;
}

export const WiredLink = ({
  elevation = 1,
  href = '',
  target,
  color = 'black',
  lineColor = 'black',
  children,
}: WiredLinkProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: { elevation, href, target },
      css: { '--wired-link-decoration-color': lineColor, color },
    };
  }, [elevation, href, target, color, lineColor]);

  const register = useCustomElement(customValues);

  return <wired-link ref={register}>{children}</wired-link>;
};
