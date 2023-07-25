import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import * as yup from 'yup';

const initial = {
  username: '',
  email: '',
  password: '',
  rePassword: '',
  phone: '',
};

const useRegisterForm = () => {
  const {t}: {t: (value: string) => string} = useTranslation();
  const registerSchema = yup.object({
    username: yup.string().required(t('validations.required')),
    email: yup.string().email(t('validations.valid_email')).required(t('validations.required')),
    password: yup.string().min(6, t('validations.min_characters')).max(20, t('validations.max_characters')).required(t('validations.required')),
    rePassword: yup
      .string()
      .min(6, t('validations.min_characters'))
      .max(20, t('validations.max_characters'))
      .required(t('validations.required'))
      .oneOf([yup.ref('password')], t('validations.doesnt_match_password')),
    phone: yup.string().required(t('validations.required')),
  });

  const form = useForm({
    defaultValues: initial,
    resolver: yupResolver(registerSchema),
  });

  return {form, FormData};
};

export default useRegisterForm;
