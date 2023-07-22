import React, {FC, memo, ReactElement, ReactNode} from 'react';
import {ImageBackground, Pressable, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import {createImageProgress} from 'react-native-image-progress';

import style from '../AppInput/style';

import {useTheme} from '@/hooks';
import {IStyleShortcuts, setupSizeTypes, UseThemeType} from '@/utils';

type SetupSizeTypes = Omit<setupSizeTypes, 'setupSizeTypes'>;

interface Props extends SetupSizeTypes, IStyleShortcuts {
  If?: boolean;
  children?: ReactElement | ReactNode;
  pressable?: boolean;
  style?: StyleProp<ViewStyle> | ViewStyle;
  onPress?: () => void;
  backgroundImage?: string;
}

const Block: FC<Props> = ({children, If, backgroundImage, ...props}) => {
  const {styles} = useTheme(props as UseThemeType);
  const Image = createImageProgress(ImageBackground);
  const source = '';

  if (If === false) {
    return <></>;
  }

  if (props.pressable) {
    return (
      <Pressable {...props} style={[styles, props.style]}>
        {children}
      </Pressable>
    );
  }

  return (
    <>
      {backgroundImage ? (
        <Image source={typeof source === 'string' ? {uri: source} : source} resizeMode={'cover'} style={[styles.imageContainer]} imageStyle={style}>
          <View style={[styles, props.style]}>{children}</View>
        </Image>
      ) : (
        <View style={[styles, props.style]}>{children}</View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {flex: 1, width: '100%', height: '100%'},
});

export default memo(Block);
