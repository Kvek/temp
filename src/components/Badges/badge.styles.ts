import MuiBadge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

import styled from 'styled-components';

export const BadgeContainer = styled.span`
  && {
    align-items: center;
    background: ${({ theme }) => theme.badgeBg};
    border-radius: 50px;
    box-sizing: border-box;
    display: grid;
    height: 18px;
    justify-content: center;
    margin: 0 4px 0 2px;
    min-width: 18px;
    padding: 0 8px;
  }
`;

export const BadgeContent = styled.span`
  && {
    color: ${({ theme }) => theme.badgeText};
    transform: scale(1);
    transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;

export const Badge = () =>
  withStyles(
    {
      badge: {
        transform: 'scale(1)',
      },
    },
    { withTheme: true }
  )(MuiBadge);

export const CenterBadge = () =>
  withStyles(
    {
      badge: {
        transform: 'scale(1) translate(25%, 0) !important',
      },
    },
    { withTheme: true }
  )(MuiBadge);
