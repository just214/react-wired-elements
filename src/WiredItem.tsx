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
   * The selected state of the item.
   * @default false
   */

  selected?: boolean;
  /**
   * The color text when not selected.
   * @default black
   */
  color?: string;
  /**
   * The background color when selected.
   * @default black
   */
  selectedBgColor?: string;
  /**
   * The text color when selected.
   * @default white
   */
  selectedColor?: string;
  /**
   * An event that fires when the item is clicked. Provides the current selected value as an argument.
   * @default white
   */
  onClick?(selected: boolean): void;
  /**
   * The children.
   */
  children?: React.ReactNode;
}

export const WiredItem = ({
  children,
  value,
  selectedBgColor = 'black',
  selectedColor = 'white',
  color = 'black',
  selected = false,
  onClick,
}: WiredItemProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: { value, selected },
      css: {
        '--wired-item-selected-color': selectedColor,
        '--wired-item-selected-bg': selectedBgColor,
      },
    };
  }, [value, selectedBgColor, selectedColor, selected]);

  const register = useCustomElement(customValues);
  return (
    <wired-item
      onClick={() => onClick && onClick(selected)}
      style={{ color: selected ? selectedColor : color }}
      ref={register}
    >
      {children}
    </wired-item>
  );
};
