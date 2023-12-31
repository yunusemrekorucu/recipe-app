import React, {memo} from 'react';
import {ImageBackground, ImageResizeMode, StyleSheet} from 'react-native';

import PropTypes from 'prop-types';
import {createImageProgress} from 'react-native-image-progress';
const Image = createImageProgress(ImageBackground);

const AppImageBackground = ({children = <></>, source = '', resizeMode = 'cover' as ImageResizeMode, style = {}, containerStyle = {}}) => (
  <Image source={typeof source === 'string' ? {uri: source} : source} resizeMode={resizeMode} style={[styles.imageContainer, containerStyle]} imageStyle={style}>
    {children}
  </Image>
);

AppImageBackground.protoTypes = {
  children: PropTypes.node,
  source: PropTypes.any,
  resizeMode: PropTypes.string,
  style: PropTypes.object,
};

AppImageBackground.defaultProps = {
  children: <></>,
  source: '',
  resizeMode: 'cover',
  style: {},
};

const styles = StyleSheet.create({
  imageContainer: {flex: 1, width: '100%', height: '100%'},
});

export default memo(AppImageBackground);
