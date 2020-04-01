// TODO: knobRadius and zero color are not behaving correctly. See storybook.
import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
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
   *  The radius of the knob.
   * @default 100
   */
  knobRadius?: number;
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
  knobRadius,
  knobZeroColor = 'black',
  knobColor = 'rgba(0, 0, 200, 0.8)',
  barColor = 'currentColor',
  onChange,
}: WiredSliderProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: { value, min, max, knobradius: knobRadius },
      css: {
        '--wired-slider-knob-zero-color': knobZeroColor,
        '--wired-slider-knob-color': knobColor,
        '--wired-slider-bar-color': barColor,
      },
      methods: { change: onChange },
    };
  }, [
    value,
    min,
    max,
    knobRadius,
    knobZeroColor,
    knobColor,
    barColor,
    onChange,
  ]);

  const register = useCustomElement(customValues);
  return <wired-slider ref={register}></wired-slider>;
};
