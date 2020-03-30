import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
import { useMemo } from 'react';

export interface WiredCardProps extends BaseProps {
  /**
   * A color to fill the background of the card in a sketchy format.
   */
  fill?: string;
  /**
   * Gives the button a sketchy height.
   * @default 1
   */
  elevation?: 1 | 2 | 3 | 4 | 5;
  /**
   * Used internally to recompute the boundaries of the card when the children changes. This happens automatically.
   * @default
   */
  requestUpdate?(): void;
  /**
   * The children.
   */
  children?: React.ReactNode;
}

export const WiredCard = ({
  requestUpdate,
  elevation,
  fill,
  children,
}: WiredCardProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: { elevation, fill },
      methods: { requestUpdate },
    };
  }, [elevation, fill]);

  const register = useCustomElement(customValues);

  return <wired-card ref={register}>{children}</wired-card>;
};
