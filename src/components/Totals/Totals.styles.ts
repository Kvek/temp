import MuiTypography from '@material-ui/core/Typography';

import styled from 'styled-components';

import { CssGridCell } from '../Grid';
import { Description } from '../Typography';

export const Figure = styled(MuiTypography)`
  && {
    color: ${({ theme }) => theme.black[0]};
    font-size: ${({ theme }) => theme.fontLg};
    font-weight: ${({ theme }) => theme.fontWeightB};
    letter-spacing: ${({ theme }) => theme.letterSpacingLg};
    &.success {
      color: ${({ theme }) => theme.success[400]};
    }
    &.warning {
      color: ${({ theme }) => theme.warning[400]};
    }
    &.important {
      color: ${({ theme }) => theme.important[400]};
    }
    &.information {
      color: ${({ theme }) => theme.information[400]};
    }
  }
`;

export const TotalsFooter = styled(CssGridCell)`
  && {
    background-color: ${({ theme }) => theme.layoutFooterBg};
    border-top: ${({ theme }) => theme.layoutFooterBorderWidth}px solid
      ${({ theme }) => theme.layoutFooterBorder};
  }
`;

export const TotalsFooterDescription = styled(Description)`
  && {
    color: ${({ theme }) => theme.layoutFooterDescription};
  }
`;

export const TotalsFooterValue = styled(Description)`
  && {
    color: ${({ theme }) => theme.layoutFooterValue};
  }
`;
