import React, { FC, ReactNode } from 'react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { AgGridReact, AgGridReactProps } from 'ag-grid-react';

import { TableIcons } from './table-icons';

export interface AGTablePropType {
  className?: string;
  style?: Record<string, any>;
}

export const AGTable: FC<AGTablePropType> = ({
  children,
  className,
  style,
}) => (
  <div
    className={className || 'ag-theme-material'}
    style={style || { height: '100%', width: '100%' }}>
    {children}
  </div>
);

interface AgGridPassedPropsType {
  children?: ReactNode;
}

export interface AgGridPropType
  extends AgGridPassedPropsType,
    AgGridReactProps {}

export const AgGrid: FC<AgGridPropType> = ({ children, ...rest }) => (
  <AgGridReact
    defaultColDef={{
      ...rest.defaultColDef,
      resizable: true,
      sortable: true,
    }}
    editType="fullRow"
    headerHeight={18}
    icons={TableIcons}
    rowHeight={20}
    rowMultiSelectWithClick
    rowSelection="multiple"
    skipHeaderOnAutoSize={false}
    suppressRowClickSelection
    {...rest}>
    {children}
  </AgGridReact>
);
