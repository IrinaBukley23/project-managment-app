import React from 'react';
import * as Styled from './ProfileForm.style';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUserName,
  setUserEmail,
  setUserPassword,
  setUserList,
} from '../../store/actions/actionCreators';
import { State } from '../../store/utils';
import { AnyAction } from 'redux';
import { useTranslation } from 'react-i18next';

const ProfileForm = () => {
  const { t } = useTranslation();
  const { userName, userEmail, userPassword, userList } = useSelector(
    (state: State) => state.profile
  );
  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (value: string) => AnyAction
  ) => {
    dispatch(callback(e.target.value));
  };

  const handleUserSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      setUserList([
        ...userList,
        {
          userName: userName,
          userEmail: userEmail,
          userPassword: userPassword,
        },
      ])
    );
    dispatch(setUserName(''));
    dispatch(setUserEmail(''));
    dispatch(setUserPassword(''));
  };

  return (
    <Styled.Profile_Form_main>
      <Styled.Profile_Form_container>
        <Styled.User_info>
          <img src="" alt="user-logo" />
          <div className="user-name">{t('ProfileForm.name')}</div>
          <div className="user-email">{t('ProfileForm.email')}</div>
          <div className="user-password">{t('ProfileForm.password')}</div>
        </Styled.User_info>
        <Styled.Profile_Form onSubmit={handleUserSubmit}>
          <label>
            {t('ProfileForm.name')}:
            <Styled.Profile_Form_input
              data-testid="name-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setUserName)}
              placeholder={t('ProfileForm.name')}
              type="text"
              pattern="[A-Za-z]{3}"
            />
            <br />
          </label>
          <span data-testid="error-name"></span>
          <label>
            {t('ProfileForm.email')}:
            <Styled.Profile_Form_input
              data-testid="name-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setUserEmail)}
              placeholder={t('ProfileForm.email')}
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
            <br />
          </label>
          <span data-testid="error-name"></span>
          <label>
            {t('ProfileForm.password')}:
            <Styled.Profile_Form_input
              data-testid="name-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e, setUserPassword)
              }
              placeholder={t('ProfileForm.password')}
              type="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
            <br />
          </label>
          <span data-testid="error-name"></span>
          <Styled.Profile_Form_btns_wrapper>
            <Styled.Profile_Form_input_submit type="submit" value={t('ProfileForm.btn')} />
          </Styled.Profile_Form_btns_wrapper>
        </Styled.Profile_Form>
      </Styled.Profile_Form_container>
    </Styled.Profile_Form_main>
  );
};

export default ProfileForm;
