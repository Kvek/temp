import React, { FC } from 'react';

import { CssGridCell, GridCellInterface } from '../Grid';
import { CompanyStamp, NavBar, SubTB } from './Navbar.styles';

export const NavbarCompact: FC<GridCellInterface> = ({
  children,
  ...props
}) => (
  <NavBar
    alignCenter
    className="navbar navbar-compact"
    columns="[logo] auto [application-name] auto [left] 1fr [right] auto"
    gap="16px"
    horizontal
    padding="0px 5px 0px 8px"
    {...props}>
    <CssGridCell alignContent="center" cell left="logo" padding="0px 0px">
      <CompanyStamp className="company-logo" />
    </CssGridCell>
    {children}
  </NavBar>
);

export const SubToolbar: FC<GridCellInterface> = ({ children, ...props }) => (
  <SubTB id="sub-toolbar" padding=" 0px 8px" {...props}>
    {children}
  </SubTB>
);
