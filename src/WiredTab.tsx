import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
const { useMemo } = React;

export interface WiredTabProps extends BaseProps {
  /**
   * Unique identifier for that tab. Used for selection.
   */
  name?: string;
  /**
   * Text to show in the tab. Defaults to the name property.
   */
  label?: string;
  /**
   * The children.
   */
  children?: React.ReactNode;
}

export const WiredTab = ({
  children,
  name,
  label,
  className,
  style,
}: WiredTabProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: { name, label },
    };
  }, [name, label]);

  const register = useCustomElement(customValues);
  const appliedStyle = { ...style, minWidth: '200px' };
  return (
    <wired-tab class={className} style={appliedStyle} ref={register}>
      {children}
    </wired-tab>
  );
};
