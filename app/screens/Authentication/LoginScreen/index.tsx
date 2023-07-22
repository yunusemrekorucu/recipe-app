import React from 'react';
import {TouchableOpacity} from 'react-native';

import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import * as Yup from 'yup';

import {usePostAuthLoginMutation} from '@/api/recipe-api';
import {AppButton, AppScreen, Block, fields, Form, Text} from '@/components';
import {RootStackNavigationPropsType} from '@/navigation';
import {showToast, ToastType} from '@/utils';

const LoginScreen = () => {
  const navigation = useNavigation<RootStackNavigationPropsType>();
  const [loginRequest, {isLoading}] = usePostAuthLoginMutation();

  const initial = {
    username: '',
    password: null,
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
      navigation.replace('MAIN_TABS_ROOT');
    } else {
      showToast({
        type: ToastType.error,
        title: 'Hata',
        message: error?.data?.message,
      });
    }
  };

  return (
    <AppScreen p-0>
      <Block flex p-20 middle>
        <Form schema={schema} form={form} />
        <AppButton mt-20 loading={isLoading} onPress={form.handleSubmit(onSubmit)} type="primary" title="Login" />
        <Block center mt-8>
          <TouchableOpacity>
            <Text>Forgot Password ?</Text>
          </TouchableOpacity>
        </Block>
      </Block>
      <Block absolute center bottom-20 style={{width: '100%'}}>
        <Block row center>
          <Text>Don`t have an acount? </Text>
          <TouchableOpacity style={{marginTop: -2}}>
            <Text semibold>Sign up</Text>
          </TouchableOpacity>
        </Block>
      </Block>
    </AppScreen>
  );
};

export default LoginScreen;
