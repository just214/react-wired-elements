import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
const { useMemo } = React;

export interface WiredRadioGroupProps extends BaseProps {
  /**
   * Name of the selected radio button.
   */
  selected?: string;
  /**
   *  Event fired when user changes selection.
   */
  onSelect?(): void;
  /**
   * Should be one or more WiredRadio components.
   */
  children?: React.ReactNode;
}

export const WiredRadioGroup = ({
  children,
  selected,
  onSelect,
  className,
  style,
}: WiredRadioGroupProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: { selected },
      methods: { selected: onSelect },
    };
  }, [selected, onSelect]);

  const register = useCustomElement(customValues);
  return (
    <wired-radio-group class={className} style={style} ref={register}>
      {children}
    </wired-radio-group>
  );
};
