import * as React from 'react';
import { BaseProps } from './types';
import { useCustomElement } from './utils/useCustomElement';
const { useMemo } = React;

export interface WiredCalendarProps extends BaseProps {
  /**
   * Gives the button a sketchy height.
   * @default 1
   */
  elevation?: 1 | 2 | 3 | 4 | 5;
  /**
   * Optional value that will be parsed as Date. Pre selects a date highlighted in the calendar.
   */
  selectedDate?: string;
  /**
   * Optional value that will be parsed as Date. Lower limit of valid dates.
   */
  firstDate?: string;
  /**
   * Optional value that will be parsed as Date. Higher limit of valid dates.
   */
  lastDate?: string;
  /**
   * Optional string value to set locale used ONLY FOR RENDERING headers in calendar. Default to browser locale. Note: All internal and external dates handling are not affected by locale.
   */
  locale?: string;
  /**
   * Disables the calendar selector.
   * @default false
   */
  disabled?: boolean;
  /**
   * Use first letter only in weekday names.
   * @default false
   */
  initials?: boolean;
  value?: {};
  format?(): void;
  /**
   * Calendar sketch line color.
   * @default "black"
   */
  bgColor?: string;
  /**
   * Background color of the calendar.
   * @default "white"
   */
  lineColor?: string;
  /**
   * Background color of the calendar.
   * @default "white"
   */
  selectedColor?: string;
  /**
   * Selected date sketch line color.
   * @default "red"
   */
  dimmedColor?: string;
  /**
   * Event fired when a date is selected by the user.
   */
  onSelect?(e: CustomEvent): void;
}

export const WiredCalendar = ({
  elevation = 1,
  selectedDate,
  firstDate,
  lastDate,
  locale,
  disabled = false,
  initials = false,
  // value,
  // format,
  bgColor = 'white',
  lineColor = 'black',
  selectedColor = 'red',
  dimmedColor = 'gray',
  onSelect,
  className,
  style,
}: WiredCalendarProps) => {
  const customValues = useMemo(() => {
    return {
      attributes: {
        elevation,
        selected: selectedDate,
        firstdate: firstDate,
        lastdate: lastDate,
        locale,
        disabled,
        initials,
        // value,
        // format, TODO: See below
      },
      methods: { selected: onSelect },
      css: {
        '--wired-calendar-bg': bgColor,
        '--wired-calendar-color': lineColor,
        '--wired-calendar-selected-color': selectedColor,
        '--wired-calendar-dimmed-color': dimmedColor,
      },
    };
  }, [
    elevation,
    selectedDate,
    firstDate,
    lastDate,
    locale,
    disabled,
    initials,
    // value,
    // format,
    bgColor,
    lineColor,
    selectedColor,
    dimmedColor,
    onSelect,
  ]);

  const register = useCustomElement(customValues);
  return (
    <wired-calendar
      class={className}
      style={style}
      ref={register}
    ></wired-calendar>
  );
};

/*
Not sure what to do about these. Are they even needed for React?

value - javascript object that contains the selected Date object and the corresponing formated text.
format - gets/sets the javascript function to format a Date object into a formated text.

*/
