import classnames from 'classnames';
import styled from 'styled-components';

import { GridCellInterface, LinedGridType } from '.';

const justify = (property: string) => `justify-items: ${property}`;
const align = (property: string) => `align-items: ${property}`;

export const CssGridCell = styled.div<GridCellInterface>`
  align-content: ${({ alignBottom, alignCenter, alignContent, alignTop }) => {
    if (alignTop) return 'flex-start';
    if (alignCenter) return 'center';
    if (alignBottom) return 'flex-end';
    if (alignContent) return alignContent;
    return 'stretch';
  }};
  box-sizing: border-box;
  display: ${({ display = 'grid' }) => display};
  grid-auto-columns: ${({ autoColumns = '1fr' }) => autoColumns};
  grid-auto-flow: ${({ flow, horizontal, vertical }) => {
    if (vertical) return 'row';
    if (horizontal) return 'column';
    if (flow) return flow;
    return 'row';
  }};
  grid-auto-rows: ${({ autoRows = 'minmax(auto, auto)' }) => autoRows};
  grid-gap: ${({ cell, gap }) => {
    if (gap) return gap;
    if (cell) return '0px';
    return '8px';
  }};
  height: ${({ cell, height }) => {
    if (height) return height;
    if (cell) return '100%';
    return 'auto';
  }};
  justify-content: ${({
    justifyCenter,
    justifyContent,
    justifyLeft,
    justifyRight,
  }) => {
    if (justifyLeft) return 'flex-start';
    if (justifyCenter) return 'center';
    if (justifyRight) return 'flex-end';
    if (justifyContent) return justifyContent;
    return 'stretch';
  }};
  ${({ columnGap }) => columnGap && `column-gap: ${columnGap}`};
  ${({ rowGap }) => rowGap && `row-gap: ${rowGap}`};

  margin: ${({ margin = '0px' }) => margin};

  ${({ alignBottom, alignCenter, alignItems, alignTop }) =>
    (alignItems && align(alignItems)) ||
    (alignTop && align('flex-start')) ||
    (alignCenter && align('center')) ||
    (alignBottom && align('flex-end'))};

  padding: ${({ padding = '0px' }) => padding};

  ${({ justifyCenter, justifyItems, justifyLeft, justifyRight }) =>
    (justifyItems && justify(justifyItems)) ||
    (justifyLeft && justify('flex-start')) ||
    (justifyCenter && justify('center')) ||
    (justifyRight && justify('flex-end'))};

  position: ${({ position = 'relative' }) => position};
  width: ${({ cell, width }) => {
    if (width) return width;
    if (cell) return '100%';
    return 'auto';
  }};

  ${({ rows }) => rows && `grid-template-rows: ${rows}`};
  ${({ columns }) => columns && `grid-template-columns: ${columns}`};
  ${({ rowPosition }) => rowPosition && `grid-row: ${rowPosition}`};
  ${({ rowStart }) => rowStart && `grid-row-start: ${rowStart}`};
  ${({ rowSpan }) => rowSpan && `grid-row-end: span ${rowSpan}`};
  ${({ columnPosition }) => columnPosition && `grid-column: ${columnPosition}`};
  ${({ columnStart }) => columnStart && `grid-column-start: ${columnStart}`};
  ${({ columnSpan }) => columnSpan && `grid-column-end: span ${columnSpan}`};
  ${({ areas }) => areas && `grid-template-areas: '${areas}'`};
  ${({ scroll }) => scroll && 'overflow: auto'};
  ${({ left }) => left && `grid-column-start: ${left}`};
  ${({ top }) => top && `grid-row-start: ${top}`};
  ${({ cell }) => cell && 'min-width: 0;'};

  ${({ middle }) =>
    middle &&
    `
      display: inline-flex;
      flex-flow: column wrap;
      justify-content: center;
      justify-self: stretch;
  `};

  ${({ noDividerRight }) => noDividerRight && '&:after { display: none; }'};

  ${({ noDividerBottom }) => noDividerBottom && '&:before { display: none; }'};

  &.container-xl {
    ${({ xl }) => xl && `grid-template-columns: repeat(${xl}, 1fr);`};
  }

  &.container-lg {
    ${({ lg }) => lg && `grid-template-columns: repeat(${lg}, 1fr);`};
  }
  &.container-md {
    ${({ md }) => md && `grid-template-columns: repeat(${md}, 1fr);`};
  }

  &.container-sm {
    ${({ sm }) => sm && `grid-template-columns: repeat(${sm}, 1fr);`};
  }

  &.container-xs {
    ${({ xs }) => xs && `grid-template-columns: repeat(${xs}, 1fr);`};
  }

  ${({ col }) => col && `grid-template-columns: repeat(${col}, 1fr);`};

  &.container-xl {
    ${({ xlSpan }) => xlSpan && `grid-column-end: span ${xlSpan};`};
  }

  &.container-lg {
    ${({ lgSpan }) => lgSpan && `grid-column-end: span ${lgSpan};`};
  }

  &.container-md {
    ${({ mdSpan }) => mdSpan && `grid-column-end: span ${mdSpan};`};
  }

  &.container-sm {
    ${({ smSpan }) => smSpan && `grid-column-end: span ${smSpan};`};
  }

  &.container-xs {
    ${({ xsSpan }) => xsSpan && `grid-column-end: span ${xsSpan};`};
  }
`;

export const LinedGrid = styled(CssGridCell)<LinedGridType>`
  border-color: ${({ isDark, isLight, theme, widget }) => {
    if (isDark) return theme.gridBorderDark;
    if (isLight) return theme.gridBorderLight;
    if (widget) return theme.gridBorderWidget;
    return theme.gridBorder;
  }};
  border-style: solid;
  border-width: ${({ fullWidth, gap }) => {
    if (fullWidth) return classnames(gap, '0px 0px 0px');
    return gap;
  }};
  box-sizing: border-box;

  & > ${CssGridCell} {
    position: relative;

    &:before {
      background-color: ${({ isDark, isLight, theme, widget }) => {
        if (isDark) return theme.gridBorderDark;
        if (isLight) return theme.gridBorderLight;
        if (widget) return theme.gridBorderWidget;
        return theme.gridBorder;
      }};
      height: ${({ gap = '0px' }) => gap};
      content: '';
      left: 0px;
      ${({ gap }) => gap && `bottom: calc(-${gap} / 2)`};
      position: absolute;
      width: 100%;
    }

    &:after {
      background-color: ${({ isDark, isLight, theme, widget }) => {
        if (isDark) return theme.gridBorderDark;
        if (isLight) return theme.gridBorderLight;
        if (widget) return theme.gridBorderWidget;
        return theme.gridBorder;
      }};
      content: '';
      height: 100%;
      position: absolute;
      ${({ gap }) => gap && `right: calc(-${gap} / 2)`};
      top: 0px;
      width: ${({ gap = '0px' }) => gap};
    }

    &:last-child:after {
      display: none;
    }
  }
`;
