import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
import { Icon } from './utils/icons';

const { useMemo } = React;

export interface WiredIconButtonProps extends BaseProps {
  /**
   * Disable the button.
   * @default false
   */
  disabled?: boolean;
  /**
   * Size of the icon.
   * @default 24
   */
  iconSize?: number;
  /**
   * The line color of the button.
   * @default #018786
   */
  lineColor?: string;
  /**
   * The color of the icon.
   * @default #018786
   */
  iconColor?: string;
  /**
   * Name of the icon (from Material icons)
   * @default favorite
   */
  icon?: Icon;

  /**
   * Event fired when button is clicked/submitted
   */
  onClick?(e: MouseEvent): void;

  /**
   * The children. Optionally pass in your own icon.
   */
  children?: React.ReactNode;
}

export const WiredIconButton = ({
  disabled = false,
  lineColor = '#018786',
  iconColor = '#018786',
  icon = 'favorite',
  iconSize = 24,
  onClick,
  children,
  className,
  style,
}: WiredIconButtonProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: { disabled },
      css: { color: lineColor, '--mdc-icon-size': iconSize },
    };
  }, [disabled, lineColor, iconSize]);

  const register = useCustomElement(customValues);
  return (
    <wired-icon-button
      onClick={onClick}
      class={className}
      style={style}
      ref={register}
    >
      <div style={{ height: '24px', width: '24px' }}>
        {children || (
          <span
            className="material-icons"
            style={{ fontSize: iconSize, color: iconColor }}
          >
            {icon}
          </span>
        )}
      </div>
    </wired-icon-button>
  );
};
