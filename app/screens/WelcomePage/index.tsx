import React from 'react';

import {useNavigation} from '@react-navigation/native';

import images from '@/assets/images';
import {AppButton, AppIcon, AppScreen, Block, Text} from '@/components';
import {RootStackNavigationPropsType} from '@/navigation';
import {ICONS} from '@/utils';

const WelcomePage = () => {
  const navigation = useNavigation<RootStackNavigationPropsType>();
  return (
    <AppScreen safe backgroundImage={images.images['welcome-page-bg']}>
      <Block flex>
        <Block row center middle>
          <AppIcon name={ICONS.star} color={'#FFF'} />
          <Text ml-6 white text-center semibold>
            60+ Premium recipes
          </Text>
        </Block>
        <Block absolute flex w-full center style={{bottom: -40}}>
          <Text mb-20 text-center white fs-56 semibold>
            {'Let’s\nCooking'}
          </Text>
          <Text mb-40 white fs-16>
            Find best recipes for cooking
          </Text>
          <AppButton onPress={() => navigation.replace('AUTHENTICATION_ROOT')} w-199 type="primary" title={'Start Cooking'} icon={ICONS.arrowRight} iconColor="#fff" />
        </Block>
      </Block>
    </AppScreen>
  );
};

export default WelcomePage;
