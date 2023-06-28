import {AuthenticationStackNavigationProps} from './types';

import Routes from '@/navigation/Routes';
import {LoginScreen} from '@/screens';
import {IScreen} from '@/utils';

const Screens = [
  {
    title: 'Login',
    name: Routes.LOGIN_SCREEN,
    component: LoginScreen,
    headerShown: true,
  },
] as Array<IScreen<AuthenticationStackNavigationProps>>;

export default Screens;
