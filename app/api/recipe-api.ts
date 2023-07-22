/* eslint-disable @typescript-eslint/no-explicit-any */
import {baseApi as api} from './base-api';
const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    postAuthLogin: build.mutation<PostAuthLoginApiResponse, PostAuthLoginApiArg>({
      query: queryArg => ({url: '/auth/login', method: 'POST', body: queryArg}),
    }),
    postAuthRegister: build.mutation<PostAuthRegisterApiResponse, PostAuthRegisterApiArg>({
      query: queryArg => ({url: '/auth/register', method: 'POST', body: queryArg}),
    }),
    getUser: build.query<GetUserApiResponse, GetUserApiArg>({
      query: () => ({url: '/user'}),
    }),
  }),
  overrideExisting: false,
});
export {injectedRtkApi as exampleApi};
export type PostAuthLoginApiResponse = unknown;
export type PostAuthLoginApiArg = {
  username?: any;
  password?: any;
};
export type PostAuthRegisterApiResponse = unknown;
export type PostAuthRegisterApiArg = {
  username?: any;
  password?: any;
  re_password?: any;
  email?: any;
  phone?: any;
};
export type GetUserApiResponse = unknown;
export type GetUserApiArg = void;
export const {usePostAuthLoginMutation, usePostAuthRegisterMutation, useGetUserQuery, useLazyGetUserQuery} = injectedRtkApi;
