import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {HomeStackNavigationProps, Routes} from '@/navigation';
import {Keyof} from '@/utils';

export type ProfileStackNavigationProps = {
  [Routes.PROFILE]: undefined;
};

export type ProfileStackNavigationPropsType = StackNavigationProp<ProfileStackNavigationProps>;

export type ProfileStackNavigationRouteType<TPageName extends Keyof<ProfileStackNavigationProps>> = RouteProp<HomeStackNavigationProps, TPageName>;
