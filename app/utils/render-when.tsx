/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

type WhenProps = {
  children: React.ReactNode | JSX.Element[] | any;
  isTrue?: boolean;
  limit?: number;
};

const RenderWhen = ({limit = 0, isTrue, children}: WhenProps) => {
  const list: React.ReactNode[] = [];

  if (isTrue !== true) {
    return null;
  }

  React.Children.map(children, (child: React.ReactElement) => {
    const {isTrue: isChildTrue} = child?.props || {};

    if (isChildTrue === true && list.length < limit) {
      list.push(child);
    }
  });

  return <>{list}</>;
};

RenderWhen.defaultProps = {
  limit: 1,
  isTrue: true,
};

RenderWhen.If = ({children}: WhenProps) => children;

export {RenderWhen};
