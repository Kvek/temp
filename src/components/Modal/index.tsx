import React, { FC, ReactNode } from 'react';

import { GridCellInterface } from '../Grid';
import { StyledModal } from './Modal.styles';

export interface ModalInterface {
  height: string;
  maxWidth: string;
  width: string;
}

export interface ModalHeaderInterface extends GridCellInterface {
  children?: ReactNode;
  padding?: string;
  subtitle: string;
  title: string;
  titleColor: string;
}

export const Modal: FC<ModalInterface> = ({ height, maxWidth, width }) => (
  <StyledModal height={height} maxWidth={maxWidth} width={width} />
);

// export const ModalHeader: FC<ModalHeaderInterface> = ({
//   children,
//   ...props
// }) => (
//   <Wrapper
//     alignCenter
//     columns="[title] auto [content] 1fr"
//     gap="0px"
//     height="26px"
//     horizontal
//     padding="0 0 0 8px"
//     style={{ placeItems: 'center' }}
//     {...props}>
//     <CssGridCell
//       columns="[left] 1fr [right] auto"
//       gap="0px"
//       horizontal
//       width="100%">
//       {children}
//     </CssGridCell>
//   </Wrapper>
// );
