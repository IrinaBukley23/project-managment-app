import React from 'react';
import * as Styled from './teamCard.style';

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
interface IProps {
  member: IMember;
}

const TeamCard = (props: IProps) => {
  const { name, src, role, telegram, github, linkedin, hrefTelegtam, hrefGithub, hrefLinkedin } =
    props.member;
  return (
    <>
      <Styled.Card>
        <Styled.Photo>
          <img src={src} alt={name} />
        </Styled.Photo>
        <Styled.Name>{name}</Styled.Name>
        <Styled.Role>{role}</Styled.Role>
        <Styled.Social>
          <li>
            <a href={hrefTelegtam}>
              <img src={telegram} />
            </a>
          </li>
          <li>
            <a href={hrefGithub}>
              <img src={github} />
            </a>
          </li>
          <li>
            <a href={hrefLinkedin}>
              <img src={linkedin} />
            </a>
          </li>
        </Styled.Social>
      </Styled.Card>
    </>
  );
};

export default TeamCard;
