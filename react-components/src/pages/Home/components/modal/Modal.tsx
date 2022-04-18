import React from 'react';

import { Portal } from '../portal/Portal';
import { ICard } from '../card/Card';
import CardModal from '../cardModal/CardModal';
import ModalOverlay from '../modalOverlay/ModalOverlay';

import '../cardModal/cardModal.scss';

type Props = {
  isOpen: boolean;
  currentData: ICard;
};

export default class Modal extends React.Component<Props> {
  render() {
    return (
      this.props.isOpen && (
        <Portal>
          <div className="modal">
            <ModalOverlay />
            <CardModal currentData={this.props.currentData} />
            <div className="modal__wrapper">
              <button className="modal__close">&#10008;</button>
            </div>
          </div>
        </Portal>
      )
    );
  }
}
