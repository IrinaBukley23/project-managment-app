import React from 'react';
import * as Styled from './LoginForm.style';
import { useDispatch, useSelector } from 'react-redux';
import {
  setLoginError,
  setLoginPasswordError,
  setUserAlreadyExists,
  setUserLogin,
  setUserLoginPassword,
} from '../../store/actions/actionCreators';
import { AnyAction } from 'redux';
import { State } from '../../store/utils';
import { apiLoginUser } from '../../Api';
import { useTranslation } from 'react-i18next';

const LoginForm = () => {
  const { t } = useTranslation();
  const { userLogin, userLoginPassword } = useSelector((state: State) => state.login);
  const error = useSelector((state: State) => state.error);
  const dispatch = useDispatch();
  const loginErrorTransl = t('LoginForm.loginError');
  const passwordErrorTransl = t('LoginForm.passwordError');
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (value: string) => AnyAction
  ) => {
    dispatch(callback(e.target.value));
  };
  const handleUserSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginUser = {
      login: userLogin,
      password: userLoginPassword,
    };
    apiLoginUser(loginUser);
    setTimeout(() => {
      const token = localStorage.getItem('token');
      if (token) {
        location.replace('/main');
      }
      const errors = JSON.parse(localStorage.getItem('Login_Error_msg') || '');
      if (errors !== 'User was not founded!') {
        const loginError = errors.filter((el: string) => el.includes('login'));
        const passwordError = errors.filter((el: string) => el.includes('password'));
        dispatch(setLoginError(loginError));
        dispatch(setLoginPasswordError(passwordError));
      } else {
        dispatch(setLoginError(''));
        dispatch(setLoginPasswordError(''));
        const userNotFoundError = JSON.parse(localStorage.getItem('Login_Error_msg') || '');
        dispatch(setUserAlreadyExists(userNotFoundError));
      }
    }, 2000);
  };
  return (
    <Styled.Login_Form_main>
      <Styled.Login_Form_container>
        <Styled.Login_Form onSubmit={handleUserSubmit}>
          <label>
            {t('LoginForm.login')}
            <Styled.Login_Form_input
              data-testid="name-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setUserLogin)}
              placeholder={t('LoginForm.login')}
              type="text"
              pattern="[a-zA-ZА-Яа-яЁё][a-zA-ZА-Яа-яЁё0-9]{1,15}"
              title=" A-z min-2, max-15"
            />
            <br />
          </label>
          <Styled.errors>{error.loginError ? `${loginErrorTransl}` : ''}</Styled.errors>
          <br />
          <label>
            {t('LoginForm.password')}
            <Styled.Login_Form_input
              data-testid="name-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e, setUserLoginPassword)
              }
              placeholder={t('LoginForm.password')}
              type="password"
              pattern="[0-9]{8,}"
              title="min 8 digits"
            />
            <br />
          </label>
          <Styled.errors>{error.loginPasswordError ? `${passwordErrorTransl}` : ''}</Styled.errors>
          <Styled.errors>{error.userExitsError}</Styled.errors>
          <br />
          <Styled.Login_Form_input_submit type="submit" value={t('LoginForm.btn')} />
        </Styled.Login_Form>
      </Styled.Login_Form_container>
    </Styled.Login_Form_main>
  );
};

export default LoginForm;
