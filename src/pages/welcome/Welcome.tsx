import React from 'react';
import { NavLink } from 'react-router-dom';
import TeamCard from '../../components/teamCard/TeamCard';
import * as Styled from './welcome.style';
import { Team } from '../../team';
import { useTranslation } from 'react-i18next';

interface IMember {
  name: string;
  src: string;
  role: string;
  telegram: string;
  github: string;
  linkedin: string;
  hrefTelegtam: string;
  hrefGithub: string;
  hrefLinkedin: string;
}

const Welcome = () => {
  const { t } = useTranslation();
  const token = localStorage.getItem('token');
  return (
    <Styled.Welcome>
      <Styled.Layout>
        {token == null ? (
          <Styled.SingBtnWrapper>
            <Styled.Ul>
              <NavLink to={'/login'}>{t('welcomeRoute.btns.login')}</NavLink>
            </Styled.Ul>
            <Styled.Ul>
              <NavLink to={'/auth'}>{t('welcomeRoute.btns.registration')}</NavLink>
            </Styled.Ul>
          </Styled.SingBtnWrapper>
        ) : (
          <Styled.main_Page_Link_wrapper>
            <Styled.Ul>
              <NavLink to={'/main'}>{t('welcomeRoute.btns.mainPage')}</NavLink>
            </Styled.Ul>
          </Styled.main_Page_Link_wrapper>
        )}
        <Styled.H1>{t('welcomeRoute.title')}</Styled.H1>
        <Styled.Container>
          {Team.map((item: IMember, i: number) => {
            return <TeamCard key={i} member={item} />;
          })}
        </Styled.Container>
      </Styled.Layout>
    </Styled.Welcome>
  );
};
export default Welcome;
