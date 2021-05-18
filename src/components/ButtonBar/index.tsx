import Typography from '@material-ui/core/Typography';

import React from 'react';

import { CssGridCell, GridCellInterface } from '../Grid';
import { ButtonBarContainer, SaveButtonBarContainer } from './ButtonBar.styles';

export const ButtonBar = ({ children, ...props }: GridCellInterface) => (
  <ButtonBarContainer
    columns="repeat(auto-fit, 100px)"
    flow="column"
    gap="8px"
    justifyContent="flex-end"
    padding="15px"
    width="100%"
    {...props}>
    {children}
  </ButtonBarContainer>
);

export const SaveButtonBar = ({ children, ...props }: GridCellInterface) => (
  <SaveButtonBarContainer
    alignContent="center"
    alignItems="center"
    columns="auto 1fr"
    flow="column"
    gap="8px"
    justifyContent="center"
    padding="5px 15px"
    width="100%"
    {...props}>
    <Typography style={{ lineHeight: 'normal' }}>
      Do you want to save your changes?
    </Typography>
    <CssGridCell
      autoColumns="auto"
      columns="auto"
      flow="column"
      gap="8px"
      justifyContent="flex-end"
      justifyItems="flex-end">
      {children}
    </CssGridCell>
  </SaveButtonBarContainer>
);
