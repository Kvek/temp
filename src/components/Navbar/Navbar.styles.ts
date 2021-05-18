import styled from 'styled-components';

import { CssGridCell } from '../Grid';

export const NavBar = styled(CssGridCell)`
  && {
    background-color: ${({ theme }) => theme.navBg};
    box-sizing: content-box;
    height: ${({ theme }) => theme.navHeight}px;
    &.navbar-compact {
      border-bottom: ${({ theme }) => theme.navButtonBorderWidth}px solid
        ${({ theme }) => theme.navButtonBorder};
    }
  }
`;

export const CompanyStamp = styled.div`
  background-image: url(${({ theme }) => theme.navLogoBg});
  background-position: center left;
  background-repeat: no-repeat;
  background-size: contain;
  height: ${({ theme }) => theme.navHeight}px;
  position: relative;
  width: ${({ theme }) => theme.navLogoWidth}px;
`;

export const SubTB = styled(CssGridCell)`
  && {
    background-color: ${({ theme }) => theme.transparent[300]};
    height: auto;
  }
`;
