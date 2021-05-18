import React, { FC } from 'react';

import { GridCellInterface } from '../Grid';
import { CollapseContainer, ExpansionContainer } from './ExpansionPanel.styles';

export const ExpansionPanel: FC<GridCellInterface> = (props) => (
  <ExpansionContainer {...props} />
);

export const CollapseHorizontal: FC<GridCellInterface> = (props) => (
  <CollapseContainer {...props} />
);
