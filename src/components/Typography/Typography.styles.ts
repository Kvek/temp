import MuiTypography from '@material-ui/core/Typography';

import styled from 'styled-components';

import { CssGridCell } from '../Grid';

export const Description = styled(MuiTypography)`
  && {
    color: ${({ theme }) => theme.transparentInverse[500]};
    font-size: ${({ theme }) => theme.fontRg};
    font-style: italic;
    font-weight: ${({ theme }) => theme.fontWeightL};
    text-align: left;
  }
`;

export const UnderlineContainer = styled(CssGridCell)`
  && {
    border-bottom: 1px solid ${({ theme }) => theme.transparentInverse[100]};
    box-sizing: border-box;
    padding-bottom: 4px;
  }
`;

export const HeaderText = styled(MuiTypography)`
  && {
    color: ${({ theme }) => theme.black[200]};
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 11;
    font-weight: ${({ theme }) => theme.fontWeightR};
    letter-spacing: 0.2em;
    line-height: 1;
    text-transform: uppercase;
  }
`;
