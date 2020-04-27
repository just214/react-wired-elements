import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
const { useMemo } = React;

export interface WiredComboProps extends BaseProps {
  /**
   * Disable the combo.
   * @default false
   */
  disabled?: boolean;
  /**
   * Value of the selected wired-item.
   */
  value?: any;

  /**
   * Background color of the dropdown when combo selector is open.
   * @default "white"
   */
  popupBgColor?: string;
  /**
   * Background color of the selected item.
   * @default "white"
   */
  selectedBgColor?: string;
  /**
   * Event fired when an item is selected by the user.
   * @default false
   */
  onSelect?(e: CustomEvent): void;
  /**
   * The children.
   */
  children?: React.ReactNode;
}

export const WiredCombo = ({
  children,
  disabled = false,
  value,
  onSelect,
  popupBgColor = 'white',
  selectedBgColor = 'gray',
  className,
  style,
}: WiredComboProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: { disabled, value },
      methods: { selected: onSelect },
      css: {
        '--wired-combo-popup-bg': popupBgColor,
        '--wired-item-selected-bg': selectedBgColor,
      },
    };
  }, [disabled, value, onSelect, popupBgColor, selectedBgColor]);

  const register = useCustomElement(customValues);
  return (
    <wired-combo class={className} style={style} ref={register}>
      {children}
    </wired-combo>
  );
};
