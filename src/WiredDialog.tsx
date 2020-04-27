import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
const { useMemo } = React;

export interface WiredDialogProps extends BaseProps {
  /**
   * Gives the button a sketchy height.
   * @default 1
   */
  elevation?: 1 | 2 | 3 | 4 | 5;
  /**
   * Whether the dialog is open or not.
   * @default 1
   */
  open?: boolean;
  /**
   * Sets the z-index of the dialog.
   * @default 1
   */
  zIndex?: number;
  /**
   * The children.
   */
  children?: React.ReactNode;
}

export const WiredDialog = ({
  children,
  elevation = 1,
  open = false,
  zIndex = 1,
  className,
  style,
}: WiredDialogProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: { open, elevation },
      css: { '--wired-dialog-z-index': zIndex },
    };
  }, [elevation, open, zIndex]);

  const register = useCustomElement(customValues);
  return (
    <wired-dialog class={className} style={style} ref={register}>
      {children}
    </wired-dialog>
  );
};
