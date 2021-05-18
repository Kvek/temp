import Typography from '@material-ui/core/Typography';

import styled from 'styled-components';

import { CssGridCell } from '../Grid';

export const DisabledContainer = styled(CssGridCell)`
  && {
    background: url(${({ theme }) => theme.Disabled_bg})
      ${({ theme }) => theme.transparent[100]} center center repeat;
    background-size: 80px;
    color: ${({ theme }) => theme.transparentInverse[700]};
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontL};
    font-weight: 100 !important;
    letter-spacing: 0.2rem;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const SubText = styled(Typography)`
  && {
    color: ${({ theme }) => theme.transparentInverse[500]};
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontXS};
    font-style: italic;
    letter-spacing: 0.2rem;
    text-align: center;
    text-transform: capitalize;
  }
`;
