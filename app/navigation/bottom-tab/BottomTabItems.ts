import {BottomTabStackNavigationProps} from './types';
import {ICONS} from '../../utils/icon-enums';
import Routes from '../Routes';
import HomeStack from '../stacks/HomeStack';
import ProfileStack from '../stacks/ProfileStack';

import {IScreen} from '@/utils';

export const Screens = [
  {
    title: 'home',
    name: Routes.HOME_ROOT,
    component: HomeStack,
    icon: ICONS.home,
    headerShown: false,
  },
  {
    title: 'home',
    name: Routes.PROFILE_ROOT,
    component: ProfileStack,
    icon: ICONS.profile,
    headerShown: false,
  },
] as IScreen<BottomTabStackNavigationProps>[];
