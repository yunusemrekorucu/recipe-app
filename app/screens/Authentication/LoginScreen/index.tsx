import React from 'react';
import {TouchableOpacity} from 'react-native';

import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import * as Yup from 'yup';

import {AppButton, AppScreen, Block, fields, Form, Text} from '@/components';
import {RootStackNavigationPropsType} from '@/navigation';

const LoginScreen = () => {
  const navigation = useNavigation<RootStackNavigationPropsType>();
  const initial = {
    email: '',
    password: null,
  };

  const schema = Yup.object({
    email: fields.text.label('Text Example').required('Bu alan zorunludur'),
    password: fields.password.label('Password').min(6, 'En az 6 karakter olmalı').required('Lütfen parola giriniz'),
  });

  const form = useForm({
    defaultValues: initial,
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    navigation.replace('MAIN_TABS_ROOT');
  };

  return (
    <AppScreen>
      <Block flex>
        <Form schema={schema} form={form} />
        <AppButton mt-20 onPress={form.handleSubmit(onSubmit)} type="primary" title="Login" />
        <Block center mt-8>
          <TouchableOpacity>
            <Text>Forgot Password ?</Text>
          </TouchableOpacity>
        </Block>
        <Block flex bottom center>
          <Text>or continue with</Text>
          <AppButton mt-10 type="outline" title="Login with Google" />
          <AppButton mt-10 type="outline" title="Login with Facebook" />
        </Block>
      </Block>
    </AppScreen>
  );
};

export default LoginScreen;
