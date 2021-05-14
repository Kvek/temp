import MaterialFormControl from '@material-ui/core/FormControl';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction, {
  ListItemSecondaryActionProps,
} from '@material-ui/core/ListItemSecondaryAction';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles';

import styled from 'styled-components';

export const SideListContainer = styled(MaterialFormControl)`
  && {
    background-color: ${({ theme }) => theme.black[900]};
    box-shadow: ${({ theme }) => theme.shadows[5]};
    box-sizing: border-box;
  }
`;

export const SecondaryAction = styled(ListItemSecondaryAction)<
  ListItemSecondaryActionProps
>`
  && {
    right: 0px;
  }
`;

export const StyledSideListItem = () =>
  createStyles({
    dense: {
      padding: '4px 8px !important',
      transition:
        'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, padding 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0ms !important',
    },
  });

export const StyledListItem = withStyles(
  StyledSideListItem as Styles<Theme, {}, string>,
  {
    withTheme: true,
  }
)(ListItem);
