import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
const { useMemo } = React;

export interface WiredListBoxProps extends BaseProps {
  /**
   * Lays out the items horizontally.
   * @default false
   */
  horizontal?: boolean;
  /**
   * Value of the selected item.
   */
  selected?: any;

  /**
   * Text color.
   * @default "black"
   */
  color?: string;
  /**
   * Background color.
   * @default "white"
   */
  bgColor?: string;
  /**
   * Event fired when an item is selected by the user
   */
  onSelect?(e: CustomEvent): void;
  /**
   * Must be one or more WiredItem components
   */
  children?: React.ReactNode;
}

export const WiredListBox = ({
  children,
  horizontal = false,
  selected,
  onSelect,
  color = 'black',
  bgColor = 'white',
  className,
  style,
}: WiredListBoxProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: { horizontal, selected },
      methods: { selected: onSelect },
      css: {
        '--wired-item-selected-color ': color,
        '--wired-item-selected-bg': bgColor,
      },
    };
  }, [horizontal, selected, onSelect, color, bgColor]);

  const register = useCustomElement(customValues);

  return (
    <wired-listbox class={className} style={style} ref={register}>
      {children}
    </wired-listbox>
  );
};
