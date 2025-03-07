import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ $isOpen }) => ($isOpen ? 'calc(100% - 462px)' : '0')};
  height: 100%;
  background: rgba(217, 217, 217, 0.6);
  transition: width 0.3s ease;
  z-index: ${({ $isOpen }) => ($isOpen ? '999' : '-1')};
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 462px;
  height: 100%;
  padding: 32px 20px;
  background-color: white;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
  z-index: 1000;
  overflow: scroll;
`;

export const ModalHeader = styled.header`
  display: flex;
  gap: 12px;
  align-items: center;
  border-bottom: 1px solid #DEDEDE;
  padding-bottom: 24px;
`

export const ModalTitle = styled.h2`
  color: #1C2531;
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`

const Modal = ({ $isOpen, children }) => (
  <>
    <Overlay $isOpen={$isOpen} />
    <ModalContainer $isOpen={$isOpen}>
      {children}
    </ModalContainer>
  </>
);

export default Modal;