import React, { CSSProperties, FC, ReactNode } from 'react';
import { applyContainerQuery } from 'react-container-query';

import classnames from 'classnames';

import {
  CssGridCell as StyledGridCell,
  LinedGrid as LGrid,
} from './Grid.styles';

const query = {
  'container-lg': {
    maxWidth: 1920,
    minWidth: 1281,
  },
  'container-md': {
    maxWidth: 1280,
    minWidth: 691,
  },
  'container-sm': {
    maxWidth: 960,
    minWidth: 501,
  },
  'container-xl': {
    minWidth: 1921,
  },
  'container-xs': {
    maxWidth: 500,
  },
};

export interface GridCellInterface {
  alignBottom?: boolean;
  alignCenter?: boolean;
  alignContent?: string;
  alignItems?: string;
  alignTop?: boolean;
  areas?: string;
  autoColumns?: string;
  autoRows?: string;
  cell?: boolean;
  children?: ReactNode;
  className?: string;
  col?: string;
  columnGap?: string;
  columnPosition?: string;
  columnSpan?: string;
  columnStart?: string;
  columns?: string;
  containerQuery?: string;
  display?: 'initial' | 'block' | 'inline' | 'gap';
  flow?: string;
  gap?: string;
  height?: string;
  horizontal?: boolean;
  id?: string;
  justifyCenter?: boolean;
  justifyContent?: string;
  justifyItems?: string;
  justifyLeft?: boolean;
  justifyRight?: boolean;
  left?: string;
  lg?: string;
  lgSpan?: string;
  margin?: string;
  md?: string;
  mdSpan?: string;
  middle?: boolean;
  noDividerBottom?: boolean;
  noDividerRight?: boolean;
  padding?: string;
  position?: string;
  rowGap?: string;
  rowPosition?: string;
  rowSpan?: string;
  rowStart?: string;
  rows?: string;
  scroll?: boolean;
  sm?: string;
  smSpan?: string;
  style?: CSSProperties;
  top?: string;
  vertical?: boolean;
  width?: string | number;
  xl?: string;
  xlSpan?: string;
  xs?: string;
  xsSpan?: string;
}

interface LinedGridDefaultPropsType {
  fullWidth?: boolean;
  gap?: string;
  isDark?: boolean;
  isLight?: boolean;
  widget?: boolean;
}

export interface LinedGridType
  extends LinedGridDefaultPropsType,
    GridCellInterface {}

export const CssGridCell = applyContainerQuery((props: GridCellInterface) => {
  const { children, className, containerQuery, lg, md, sm, xl, xs } = props;

  if (xs || sm || md || lg || xl) {
    return (
      <StyledGridCell
        className={classnames(containerQuery, className)}
        {...props}>
        {children}
      </StyledGridCell>
    );
  }

  return <StyledGridCell {...props}>{children}</StyledGridCell>;
}, query);

export const LinedGrid: FC<LinedGridType> = (props) => {
  const { children } = props;
  return <LGrid {...props}>{children}</LGrid>;
};
