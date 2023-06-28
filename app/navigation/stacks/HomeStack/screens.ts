import {HomeStackNavigationProps} from './types';

import Routes from '@/navigation/Routes';
import HomeScreen from '@/screens/Home';
import {IScreen} from '@/utils';

const Screens = [
  {
    title: '',
    name: Routes.HOME_SCREEN,
    component: HomeScreen,
    headerShown: false,
  },
] as Array<IScreen<HomeStackNavigationProps>>;

export default Screens;
