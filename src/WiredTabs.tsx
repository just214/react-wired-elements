import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
const { useMemo } = React;

// TODO: Get this working and figure out and document default colors.

export interface WiredTabsProps extends BaseProps {
  /**
   * Name of the currently selected tab.
   */
  selected?: string;
  /**
   * Text color of the selected tab.
   */
  selectedColor?: string;
  /**
   * Background color of the selected tab.
   */
  selectedBgColor?: string;
  /**
   * The children. Must be one or more WiredTab components.
   */
  children?: React.ReactNode;
}

export const WiredTabs = ({
  children,
  selected,
  selectedColor,
  selectedBgColor,
}: WiredTabsProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: { selected },
      css: {
        '--wired-item-selected-bg': selectedBgColor,
        '--wired-item-selected-color': selectedColor,
      },
    };
  }, [selected, selectedColor, selectedBgColor]);

  const register = useCustomElement(customValues);
  return <wired-tabs ref={register}>{children}</wired-tabs>;
};
