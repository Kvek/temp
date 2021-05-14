import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import { Styles } from '@material-ui/core/styles/withStyles';
import MuiSwitch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

import styled from 'styled-components';

export const SwitchLabel = styled(Typography)`
  && {
    color: ${({ theme }) => theme.black[0]};
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontSm};
  }
`;

export const SwitchTableStyles = () =>
  createStyles({
    checked: {},
    root: {
      display: 'flex',
      height: 16,
      padding: 0,
      width: 28,
    },
    switchBase: {
      '&$checked': {
        '& + $track': {
          opacity: 1,
        },
      },
      padding: 2,
    },
    thumb: {
      boxShadow: 'none',
      height: 12,
      width: 12,
    },
    track: {
      borderRadius: 16 / 2,
      opacity: 1,
    },
  });

export const StyledSwitchTable = withStyles(
  SwitchTableStyles as Styles<Theme, {}, string>,
  {
    withTheme: true,
  }
)(MuiSwitch);

export const SwitchSmallStyles = () =>
  createStyles({
    bar: {},
    checked: {},
    icon: {
      height: '17px',
      width: '17px',
    },
    root: {
      display: 'block',
      height: '17px',
      justifySelf: 'center',
      margin: '0 5px',
      transform: 'scale(0.6)',
      width: '40px',
    },
    switchBase: {
      height: 'auto',
      marginLeft: '-14px',
    },
  });

export const SwitchSmall = withStyles(
  SwitchSmallStyles as Styles<Theme, {}, string>,
  {
    withTheme: true,
  }
)(MuiSwitch);
