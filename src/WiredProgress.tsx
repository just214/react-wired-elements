import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
const { useMemo, useState, useEffect } = React;

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
  /**
   * An optional value between 1 and 100 (%) which will cause the progress bar to be "stuck" at that value with an animated feel.
   * @default "14px"
   */
  stuckAt?: number;
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
  stuckAt,
}: WiredProgressProps) => {
  const [stuckAtValue, setStuckAtValue] = useState<number | null>(null);

  /**
   * The stuckAt prop sets an interval that alternates between the stuckAt prop value
   * and the same value + .01 every 750 milliseconds.
   * This is forces re-renders, which paints a new SVG each time, giving an animated look.
   */
  useEffect(() => {
    let interval: any;
    if (stuckAt) {
      interval = setInterval(() => {
        setStuckAtValue(s => (s === stuckAt ? s + 0.01 : stuckAt));
      }, 750);
    }

    return () => clearInterval(interval);
  }, [stuckAt]);

  const customValues = useMemo(() => {
    return {
      attributes: {
        value: stuckAtValue || value,
        min: stuckAtValue ? 0 : min,
        max: stuckAtValue ? 100 : max,
        percentage: showPercentage,
      },
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
    stuckAtValue,
  ]);

  const register = useCustomElement(customValues);
  return <wired-progress ref={register}></wired-progress>;
};
