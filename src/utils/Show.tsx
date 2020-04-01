import * as React from 'react';

export interface ShowProps {
  when?: boolean;
}

export const Show: React.FC<ShowProps> = ({ when, children }) => {
  return <>{when && children}</>;
};
