import { TypographyProps } from '@material-ui/core';

import React, { FC } from 'react';

import { GridCellInterface } from '../Grid';
import {
  Description as TypeDescription,
  HeaderText,
  UnderlineContainer,
} from './Typography.styles';

export interface TypographyDefaultPropsType {}

export interface TypographyPropsType extends TypographyProps {}

export const Header: FC<TypographyPropsType> = ({ children, ...props }) => (
  <UnderlineContainer>
    <HeaderText {...props}>{children}</HeaderText>
  </UnderlineContainer>
);

export const UnderlineWrapper: FC<GridCellInterface> = (props) => (
  <UnderlineContainer {...props} />
);

export const Description: FC<TypographyPropsType> = ({
  children,
  ...props
}) => <TypeDescription {...props}>{children}</TypeDescription>;
