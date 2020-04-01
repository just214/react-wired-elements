import * as React from 'react';
import { BaseProps } from './types';
import { WiredItem } from './WiredItem';
import { Show } from './utils/Show';

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
        <Show when={Array.isArray(children)}>
          {(children as any[]) &&
            (children as any[]).map(child => {
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
        </Show>
      </div>
      <div>
        <Show when={Array.isArray(children)}>
          {(children as any[]) &&
            (children as any[]).map(child => {
              if (child.props.name === selectedValue) {
                return (
                  <div
                    key={child}
                    style={{
                      width: tabsRef?.current
                        ? tabsRef?.current.clientWidth
                        : 'auto',
                    }}
                  >
                    {child}
                  </div>
                );
              }
              return null;
            })}
        </Show>
      </div>
    </div>
  );
};
