import React from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from '../modalOverlay/ModalOverlay';
import '../cardModal/cardModal.scss';

type Props = { children: React.ReactNode };

const modalRoot = document.getElementById('modal');

const Modal: React.FC<Props> = ({ children }) => {
  return modalRoot
    ? ReactDOM.createPortal(
        <div data-testid="modal" className="modal">
          <ModalOverlay />
          {children}
          <div className="modal__wrapper">
            <button className="modal__close">&#10008;</button>
          </div>
        </div>,
        modalRoot
      )
    : null;
};

export default Modal;
