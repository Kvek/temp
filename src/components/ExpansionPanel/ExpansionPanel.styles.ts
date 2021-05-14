import styled from 'styled-components';

import { CssGridCell } from '../Grid';

export const ExpansionContainer = styled(CssGridCell)`
  && {
    align-content: stretch;
    ${({ height, theme, vertical }) =>
      vertical &&
      `
      transition: all 0.3s ease;
      height: ${height || '0px'};
      border-bottom: 1px solid ${theme.transparentInverse[300]};
    `};

    ${({ horizontal, width }) =>
      horizontal &&
      `
      border-style: solid;
      border-color: rgba(255,255,255,0.3);
      transition: all 0.3s ease;
      width: ${width || '0px'};
      border-width: ${width && width > 1 ? '10px' : '0px'};
    `};
  }
`;

export const CollapseContainer = styled(CssGridCell)`
  && {
    align-content: stretch;
    overflow: hidden;
    transition: width 150ms ease;
    width: ${({ width }) => width || '0px'};
  }
`;
