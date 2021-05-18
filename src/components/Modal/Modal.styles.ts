import ReactModal from 'react-modal';

import styled from 'styled-components';

import { Wrapper as PhWrapper } from '../PanelHeader/PanelHeader.styles';
import { ModalInterface } from '.';

ReactModal.setAppElement('#root');

export const StyledModal = styled.div<ModalInterface>`
  ${({ width }) => width && `width: ${width}`};
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}`};
  ${({ height }) => height && `height: ${height}`};
  background-color: ${({ theme }) => theme.modalBg};
  border: ${({ theme }) => theme.modalBorderWidth}px solid
    ${({ theme }) => theme.modalBorder};
  border-radius: 4px;
  border-radius: ${({ theme }) => theme.modalBorderRadiusModal}px;
  box-shadow: ${({ theme }) => theme.modalShadow};
  left: 50%;
  max-height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Wrapper = styled(PhWrapper)`
  background: ${({ theme }) => theme.modalHeaderBg};
  border-bottom: ${({ theme }) => theme.modalHeaderBorderBottomWidth}px solid
    ${({ theme }) => theme.black.A200};
`;
