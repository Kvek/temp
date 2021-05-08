import styled from 'styled-components';

import { CssGridCell } from '../Grid';

export const ButtonBarContainer = styled(CssGridCell)`
  background-color: rgba(0, 0, 0, 0.15);
  border-top: 1px solid ${({ theme }) => theme.black.A200};
  box-shadow: inset ${({ theme }) => theme.shadows[2]};

  p {
    color: ${({ theme }) => theme.black[900]};
  }
`;

export const SaveButtonBarContainer = styled(CssGridCell)`
  background-color: ${({ theme }) => theme.success[500]};
  box-shadow: 0px -3px 23px 0px rgba(0, 210, 152, 0.2),
    0px -4px 9px 0px rgba(0, 0, 0, 0.5);
`;
