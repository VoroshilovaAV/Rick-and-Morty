import React from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from '../modalOverlay/ModalOverlay';
import '../cardModal/cardModal.scss';

type Props = { children: React.ReactNode };

const Modal: React.FC<Props> = ({ children }) => {
  const modalRoot = document.getElementById('modal');

  return modalRoot
    ? ReactDOM.createPortal(
        <div className="modal">
          <ModalOverlay />
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
          <div className="modal__wrapper">
            <button className="modal__close">&#10008;</button>
          </div>
        </div>,
        modalRoot
      )
    : null;
};

export default Modal;
