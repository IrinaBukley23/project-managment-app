import styled from 'styled-components';

const size = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1920px',
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(max-width: ${size.desktop})`,
};

export const Header = styled.header`
  max-width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  background-color: var(--color-background-dark);
`;

export const HeaderNavLinkWwrapper = styled.div`
  @media ${device.desktop} {
    max-width: 90%;
    display: flex;
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    font-size: 0.7rem;
  }
`;

export const Ul = styled.ul`
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    margin-right: 20px;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--color-text-white);
    transition: 0.5s ease-in;
    &:hover {
      color: var(--color-text-light);
    }

    &.active-link {
      color: var(--color-text-light);
    }
  }
`;

export const Btns_block = styled.div`
  display: flex;
`;
