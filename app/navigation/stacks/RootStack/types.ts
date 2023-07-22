import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Routes} from '@/navigation';
import {DialogProps, Keyof} from '@/utils';

export type RootStackNavigationProps = {
  [Routes.SPLASH_SCREEN]: undefined;
  [Routes.MAIN_TABS_ROOT]: undefined;
  [Routes.AUTHENTICATION_ROOT]: undefined;
  [Routes.WELCOME_SCREEN]: undefined;
  [Routes.ALERT]: DialogProps;
};

export type RootStackNavigationPropsType = StackNavigationProp<RootStackNavigationProps>;

export type RootStackNavigationRouteType<TPageName extends Keyof<RootStackNavigationProps>> = RouteProp<RootStackNavigationProps, TPageName>;
