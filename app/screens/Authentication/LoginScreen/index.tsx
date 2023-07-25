import React from 'react';
import {TouchableOpacity} from 'react-native';

import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {Controller, useForm} from 'react-hook-form';
import * as Yup from 'yup';

import {usePostAuthLoginMutation} from '@/api/recipe-api';
import {AppButton, AppCheckbox, AppInput, AppScreen, Block, fields, Text} from '@/components';
import {useStyledTag} from '@/hooks';
import {RootStackNavigationPropsType} from '@/navigation';
import {AuthenticationStackNavigationPropsType} from '@/navigation/stacks/AuthStack/types';
import {COLORS} from '@/theme';
import {ICONS, showToast, ToastType} from '@/utils';

const LoginScreen = () => {
  const rootNavigation = useNavigation<RootStackNavigationPropsType>();
  const navigation = useNavigation<AuthenticationStackNavigationPropsType>();
  const [loginRequest, {isLoading}] = usePostAuthLoginMutation();

  const initial = {
    username: 'selmankorucu',
    password: '12345678',
  };

  const schema = Yup.object({
    username: fields.text.label('Username').required('Bu alan zorunludur'),
    password: fields.password.label('Password').min(6, 'En az 6 karakter olmalı').required('Lütfen parola giriniz'),
  });

  const form = useForm({
    defaultValues: initial,
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: {username: string; password: string}) => {
    const {error} = await loginRequest(values);
    if (!error) {
      rootNavigation.replace('MAIN_TABS_ROOT');
    } else {
      showToast({
        type: ToastType.error,
        title: 'Hata',
        message: error?.data?.message,
      });
    }
  };

  const Divider = useStyledTag(Block, 'flex border h-1', () => ({
    borderColor: COLORS.neutral30,
  }));

  return (
    <AppScreen>
      <Block mt-40>
        <Text fs-24 bold>
          Hi, Welcome Back! 👋
        </Text>
        <Text fs-12 light>
          Hello again , you`ve been missed!
        </Text>
      </Block>
      <Block flex p-2 mt-40>
        <Block>
          <Text medium fs-12 style={{marginBottom: -15}}>
            Username
          </Text>
          <Controller
            control={form?.control}
            render={({field: {onChange, value}, fieldState: {error}}) => <AppInput form={form} onChangeText={onChange} placeholder={'admin'} error={error?.message} value={value} />}
            name={'username'}
          />
        </Block>
        <Block mt-10>
          <Text medium fs-12 style={{marginBottom: -15}}>
            Password
          </Text>
          <Controller
            control={form?.control}
            render={({field: {onChange, value}, fieldState: {error}}) => (
              <AppInput form={form} iconRight={ICONS.plus} secureTextEntry={true} onChangeText={onChange} placeholder={'********'} error={error?.message} value={value} />
            )}
            name={'password'}
          />
        </Block>
        <Block row justify-between mt-8>
          <Block row center>
            <AppCheckbox mr-6 onPress={() => {}} checked={true} />
            <Text>Remember Me ?</Text>
          </Block>
          <TouchableOpacity>
            <Text fs-12>Forgot Password ?</Text>
          </TouchableOpacity>
        </Block>
        <AppButton mt-20 loading={isLoading} onPress={form.handleSubmit(onSubmit)} type="primary" title="Login" />
        <Block row center mt-16>
          <Divider />
          <Text px-20>Or login with</Text>
          <Divider />
        </Block>
      </Block>
      <Block absolute center bottom-20 mx-20 style={{width: '100%'}}>
        <Block row center>
          <Text>Don`t have an acount? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('REGISTER_SCREEN')} style={{marginTop: -2}}>
            <Text semibold>Sign up</Text>
          </TouchableOpacity>
        </Block>
      </Block>
    </AppScreen>
  );
};

export default LoginScreen;
