import React, {memo, useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import LottieView from 'lottie-react-native';

import {RootStackNavigationProps, Routes} from '@/navigation';

const SplashScreen = () => {
  const navigation: StackNavigationProp<RootStackNavigationProps> = useNavigation();
  const progress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progress.current, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const navigationName = Routes.WELCOME_SCREEN;
      navigation.replace(navigationName);
    }, 2000);
  }, []);

  return (
    <View style={styles.view}>
      <LottieView source={require('./loading-circles.json')} progress={progress.current} loop={true} autoPlay={true} style={{width: 100, height: 200}} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default memo(SplashScreen);
