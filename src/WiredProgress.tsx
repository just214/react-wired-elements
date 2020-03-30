import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
const { useMemo } = React;

export interface WiredProgressProps extends BaseProps {
  /**
   * The completion value (0-100)
   * @default 30
   */
  value?: number; // 1-100
  /**
   *  The minimum value
   * @default 0
   */
  min?: number;
  /**
   *  The maximum value
   * @default 100
   */
  max?: number;
  /**
   * Show the percentage sign (%) next to the value.
   * @default false
   */
  showPercentage?: boolean;
  /**
   * Color of the label.
   * @default "black"
   */
  labelColor?: string;
  /**
   * Color of the label background.
   * @default "rgba(255,255,255,0.9)"
   */
  labelBgColor?: string;
  /**
   * Color of the progress bar.
   * @default 'rgba(0, 0, 200, 0.8)'
   */
  progressBarColor?: string;
  /**
   * The size of the text.
   * @default "14px"
   */
  fontSize?: number;
}

export const WiredProgress = ({
  value = 30,
  min = 0,
  max = 100,
  showPercentage = false,
  labelColor = 'black',
  labelBgColor = 'rgba(255,255,255,0.9)',
  progressBarColor = 'rgba(0, 0, 200, 0.8)',
  fontSize = 14,
}: WiredProgressProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: { value, min, max, percentage: showPercentage },
      css: {
        '--wired-progress-label-color': labelColor,
        '--wired-progress-label-background': labelBgColor,
        '--wired-progress-color': progressBarColor,
        '--wired-progress-font-size': fontSize,
      },
    };
  }, [
    value,
    min,
    max,
    showPercentage,
    labelColor,
    labelBgColor,
    progressBarColor,
    fontSize,
  ]);

  const register = useCustomElement(customValues);
  return <wired-progress ref={register}></wired-progress>;
};
