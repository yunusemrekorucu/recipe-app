import {BottomTabStackNavigationProps} from './types';
import {ICONS} from '../../utils/icon-enums';
import Routes from '../Routes';
import HomeStack from '../stacks/HomeStack';

import {IScreen} from '@/utils';

export const Screens = [
  {
    title: 'home',
    name: Routes.HOME_ROOT,
    component: HomeStack,
    icon: ICONS.home,
    headerShown: false,
  },
] as IScreen<BottomTabStackNavigationProps>[];
