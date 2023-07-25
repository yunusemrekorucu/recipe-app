import React from 'react';

import {Controller} from 'react-hook-form';

import useRegisterForm from './useForm';

import {AppButton, AppInput, AppScreen, Block, Text} from '@/components';
import {ICONS} from '@/utils';

const RegisterScreen = () => {
  const {form} = useRegisterForm();

  const onSubmit = () => {
    console.log('aşsldkjf');
  };

  return (
    <AppScreen scroll>
      <Block mt-40>
        <Text fs-24 bold>
          Create Account
        </Text>
        <Text fs-12 light>
          Connect with , your friends today!
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
            E-Mail
          </Text>
          <Controller
            control={form?.control}
            render={({field: {onChange, value}, fieldState: {error}}) => <AppInput form={form} onChangeText={onChange} placeholder={'admin@admin.com'} error={error?.message} value={value} />}
            name={'email'}
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
        <Block mt-10>
          <Text medium fs-12 style={{marginBottom: -15}}>
            Repeat Password
          </Text>
          <Controller
            control={form?.control}
            render={({field: {onChange, value}, fieldState: {error}}) => (
              <AppInput form={form} iconRight={ICONS.plus} secureTextEntry={true} onChangeText={onChange} placeholder={'********'} error={error?.message} value={value} />
            )}
            name={'rePassword'}
          />
        </Block>
        <Block mt-10>
          <Text medium fs-12 style={{marginBottom: -15}}>
            Phone
          </Text>
          <Controller
            control={form?.control}
            render={({field: {onChange, value}, fieldState: {error}}) => <AppInput form={form} onChangeText={onChange} placeholder={'(___) ___ ____'} error={error?.message} value={value} />}
            name={'phone'}
          />
        </Block>
        <AppButton mt-20 loading={false} onPress={form.handleSubmit(onSubmit)} type="primary" title="Sign Up" />
      </Block>
    </AppScreen>
  );
};

export default RegisterScreen;
