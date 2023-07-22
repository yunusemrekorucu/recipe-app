import {RootStackNavigationProps} from './types';
import {BottomTabNavigation} from '../../bottom-tab/BottomTabNavigation';
import Routes from '../../Routes';
import AuthenticationStack from '../AuthStack';

import {SplashScreen} from '@/screens';
import WelcomePage from '@/screens/WelcomePage';
import {IScreen} from '@/utils';

const Screens = [
  {
    title: 'Splash Screen',
    name: Routes.SPLASH_SCREEN,
    component: SplashScreen,
    headerShown: false,
  },
  {
    title: 'Welcome Screen',
    name: Routes.WELCOME_SCREEN,
    component: WelcomePage,
    headerShown: false,
  },
  {
    title: 'Login Page',
    name: Routes.AUTHENTICATION_ROOT,
    component: AuthenticationStack,
    headerShown: false,
  },
  {
    title: 'Tab Menu',
    name: Routes.MAIN_TABS_ROOT,
    component: BottomTabNavigation,
    headerShown: false,
  },
] as Array<IScreen<RootStackNavigationProps>>;

export default Screens;
