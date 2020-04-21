import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
import { debounce } from './utils/debounce';
const { useMemo } = React;

export interface WiredSliderProps extends BaseProps {
  /**
   * The numeric value of the slider.
   * @default 30
   */
  value?: number;
  /**
   *  The minimum value.
   * @default 0
   */
  min?: number;
  /**
   *  The maximum value.
   * @default 100
   */
  max?: number;
  /**
   *  Color of the knob when the value is at minimum.
   * @default black
   */
  knobZeroColor?: string;
  /**
   *  Color of the knob when the value is not at minimum.
   *  @default rgba(0, 0, 200, 0.8)
   */
  knobColor?: string;
  /**
   *  Color of the bar on which the knob slides.
   * @default currentColor
   */

  barColor?: string;
  /**
   *  Event fired when the user changes the slider value.
   */
  onChange?(e: CustomEvent): void;
}

export const WiredSlider = ({
  value = 30,
  min = 0,
  max = 100,
  knobZeroColor = 'black',
  knobColor = 'rgba(0, 0, 200, 0.8)',
  barColor = 'currentColor',
  onChange,
  className,
  style,
}: WiredSliderProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: { value, min, max },
      css: {
        // '--wired-slider-knob-zero-color': knobZeroColor,
        '--wired-slider-knob-color': value === min ? knobZeroColor : knobColor,
        '--wired-slider-bar-color': barColor,
      },
      methods: { change: debounce(onChange, 500) },
    };
  }, [value, min, max, knobZeroColor, knobColor, barColor, onChange]);

  const register = useCustomElement(customValues);
  return (
    <wired-slider class={className} style={style} ref={register}></wired-slider>
  );
};
