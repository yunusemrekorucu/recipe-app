import {AuthenticationStackNavigationProps} from './types';

import Routes from '@/navigation/Routes';
import {LoginScreen, RegisterScreen} from '@/screens';
import {IScreen} from '@/utils';

const Screens = [
  {
    title: 'Login',
    name: Routes.LOGIN_SCREEN,
    component: LoginScreen,
    headerShown: false,
  },
  {
    title: 'Register',
    name: Routes.REGISTER_SCREEN,
    component: RegisterScreen,
    headerShown: false,
  },
] as Array<IScreen<AuthenticationStackNavigationProps>>;

export default Screens;
