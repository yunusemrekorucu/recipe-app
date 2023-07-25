import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Routes} from '@/navigation';
import {Keyof} from '@/utils';

export type BottomTabStackNavigationProps = {
  [Routes.HOME_ROOT]: {
    name: string;
  };
  [Routes.PROFILE_ROOT]: undefined;
};

export type BottomTabStackNavigationPropsType = StackNavigationProp<BottomTabStackNavigationProps>;

export type BottomTabStackNavigationRouteType<TPageName extends Keyof<BottomTabStackNavigationProps>> = RouteProp<BottomTabStackNavigationProps, TPageName>;
