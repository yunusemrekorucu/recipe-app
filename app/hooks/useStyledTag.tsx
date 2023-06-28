/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {NamedExoticComponent, ReactElement} from 'react';
import {TextStyle, ViewStyle} from 'react-native';

interface CombinedStyle extends ViewStyle, TextStyle {}

const useStyledTag = (tag: React.ReactNode | React.ComponentType | NamedExoticComponent, style?: string, objectStyle?: (props: object | never | any) => CombinedStyle) => {
  const Component = {
    element: ({children = <React.Fragment />, ...props}: {children?: ReactElement | string} | any): React.ReactElement => {
      const ReactComponent = tag as React.ElementType;
      return (
        <ReactComponent s={style} {...props} style={objectStyle ? objectStyle(props) : {}}>
          {children}
        </ReactComponent>
      );
    },
  };
  return Component.element;
};

export default useStyledTag;
