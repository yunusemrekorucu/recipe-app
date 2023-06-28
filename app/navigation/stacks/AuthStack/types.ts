import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {HomeStackNavigationProps, Routes} from '@/navigation';
import {Keyof} from '@/utils';

export type HomeScreen = {
  name: string;
};

export type AuthenticationStackNavigationProps = {
  [Routes.LOGIN_SCREEN]: undefined;
};

export type AuthenticationStackNavigationPropsNavigationPropsType = StackNavigationProp<AuthenticationStackNavigationProps>;

export type AuthenticationStackNavigationRouteType<TPageName extends Keyof<AuthenticationStackNavigationProps>> = RouteProp<HomeStackNavigationProps, TPageName>;
