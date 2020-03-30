import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
const { useMemo } = React;

export interface WiredItemProps extends BaseProps {
  /**
   * The value property used by the WiredCombo and WiredListBox components
   */
  value?: any;
  /**
   * The children.
   */
  children?: React.ReactNode;
}

export const WiredItem = ({ children, value }: WiredItemProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: { value },
    };
  }, [value]);

  const register = useCustomElement(customValues);
  return <wired-item ref={register}>{children}</wired-item>;
};
