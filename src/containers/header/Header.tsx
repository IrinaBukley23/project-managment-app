import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Outlet } from 'react-router-dom';
import Button from '../../components/button/Button';
import Select from '../../components/select/Select';
import * as Styled from './header.style';

const Header = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };
  const setLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('Login_Error_msg');
  };
  return (
    <>
      <Styled.Header>
        <Styled.HeaderNavLinkWwrapper>
          <Styled.Ul>
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/'}>
              {t('Headerlinks.welcome')}
            </NavLink>
          </Styled.Ul>
          <Styled.Ul>
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/edit'}>
              {t('Headerlinks.editProfile')}
            </NavLink>
          </Styled.Ul>
          <Styled.Ul>
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/main'}>
              {t('Headerlinks.CreateNewBoard')}
            </NavLink>
          </Styled.Ul>
        </Styled.HeaderNavLinkWwrapper>
        <Styled.Btns_block>
          <Select
            onChange={changeLanguage}
            options={[
              { text: 'en', value: 'en' },
              { text: 'ru', value: 'ru' },
            ]}
          />
          <Button
            className="header-log-out-tn"
            onClick={setLogout}
            textButton={t('Headerlinks.logOut')}
          ></Button>
        </Styled.Btns_block>
      </Styled.Header>
      <Outlet />
    </>
  );
};

export default Header;
