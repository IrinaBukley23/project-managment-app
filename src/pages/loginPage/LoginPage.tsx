import React from 'react';
import { Navigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import * as Styled from './LoginPage.style';
import { useTranslation } from 'react-i18next';

const LoginPage = () => {
  const { t } = useTranslation();
  const token = localStorage.getItem('token');
  return token ? (
    <Navigate to={'/main'} />
  ) : (
    <>
      <Styled.Main_title>{t('LoginPage.mainTitle')}</Styled.Main_title>
      <LoginForm />
    </>
  );
};

export default LoginPage;
