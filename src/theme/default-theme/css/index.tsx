import React from 'react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import 'react-datepicker/dist/react-datepicker.css';

import { AgTableStyle } from './ag-table';
import { Animations } from './animations';
import { DragDropStyle } from './dragdrop';
import { FlexLayoutStyle } from './flexlayout';
import { GlobalStyle } from './global';
import { RCDock } from './rc-dock';
import { DatepickerStyle } from './react-datepicker';
import { ResetStyle } from './reset';
import { StatusStyle } from './status';

export const Stylesheets = () => (
  <>
    <ResetStyle />
    <GlobalStyle />
    <DatepickerStyle />
    <Animations />
    <DragDropStyle />
    <FlexLayoutStyle />
    <AgTableStyle />
    <StatusStyle />
    <RCDock />
  </>
);
