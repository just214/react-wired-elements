import * as React from 'react';
import { BaseProps } from './types';
import { WiredItem } from './WiredItem';

const { useState, useRef } = React;

export interface WiredTabsProps extends BaseProps {
  /**
   * Name of the currently selected tab.
   */
  initialSelected?: string;
  /**
   * Text color of the selected tab.
   * @default white
   */
  selectedColor?: string;
  /**
   * Background color of the selected tab.
   * @default black
   */
  selectedBgColor?: string;
  /**
   * The children. Must be one or more WiredTab components.
   */
  children?: React.ReactNode;
}

export const WiredTabs = ({
  children,
  initialSelected,
  selectedColor = 'white',
  selectedBgColor = 'black',
}: WiredTabsProps) => {
  const [selectedValue, setSelectedValue] = useState(initialSelected);
  const tabsRef = useRef<HTMLDivElement>(null!);

  function handleSelected(e: any) {
    setSelectedValue(e);
  }

  return (
    <div>
      <div ref={tabsRef}>
        {(children as any[]).map(child => {
          return (
            <WiredItem
              selectedColor={selectedColor}
              selectedBgColor={selectedBgColor}
              onClick={() => handleSelected(child.props.name)}
              selected={selectedValue === child.props.name}
              key={child.props.name}
              value={child.props.name}
            >
              {child.props.name}
            </WiredItem>
          );
        })}
      </div>
      <div>
        {(children as any[]).map((Child: any) => {
          if (Child.props.name === selectedValue) {
            return (
              <div
                key={Child}
                style={{
                  width: tabsRef?.current
                    ? tabsRef?.current.clientWidth
                    : 'auto',
                }}
              >
                {Child}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
