import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import screens from './screens';
import {AuthenticationStackNavigationProps} from './types';
import {createNavigationOptions} from '../../components';

import {IScreen} from '@/utils';

const Stack = createStackNavigator<AuthenticationStackNavigationProps>();

const AuthenticationStack = () => {
  return (
    <Stack.Navigator>
      {screens.map((screen: IScreen<AuthenticationStackNavigationProps>, index: number) => (
        <Stack.Screen key={index} name={screen.name} component={screen.component} options={() => createNavigationOptions({title: screen.title, headerShown: screen.headerShown})} />
      ))}
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
