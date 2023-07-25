import {ProfileStackNavigationProps} from './types';

import Routes from '@/navigation/Routes';
import Profile from '@/screens/Profile';
import {IScreen} from '@/utils';

const Screens = [
  {
    title: '',
    name: Routes.PROFILE,
    component: Profile,
    headerShown: false,
  },
] as Array<IScreen<ProfileStackNavigationProps>>;

export default Screens;
