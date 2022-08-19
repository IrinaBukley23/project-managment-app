import React from 'react';
import * as Styled from './footer.style';
import imgRsSchool from '../../assets/svg/rs_school_js.svg';
import gitHubLogo from '../../assets/svg/github.svg';

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.GitLinksContainer>
        <Styled.GitLink href="https://github.com/Metanix777" target="_blank" rel="noreferrer">
          <Styled.GitImg src={gitHubLogo} alt="" />
          Ivan
        </Styled.GitLink>
        <Styled.GitLink href="https://github.com/irinabukley23" target="_blank" rel="noreferrer">
          <Styled.GitImg src={gitHubLogo} alt="" />
          Irina
        </Styled.GitLink>
        <Styled.GitLink href="https://github.com/JMSBRN" target="_blank" rel="noreferrer">
          <Styled.GitImg src={gitHubLogo} alt="" />
          Alex
        </Styled.GitLink>
      </Styled.GitLinksContainer>
      <Styled.RsSchoolLink href="https://rs.school/react/" target="_blank" rel="noreferrer">
        <img src={imgRsSchool} alt="rsSchool_Logo.png"></img>
      </Styled.RsSchoolLink>
      <div className="footer-copyright">
        ©<span>2022 q1 react-team</span>
      </div>
    </Styled.Footer>
  );
};
export default Footer;
