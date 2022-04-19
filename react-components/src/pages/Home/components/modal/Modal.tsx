import React from 'react';

import { Portal } from '../portal/Portal';
import { ICard } from '../card/Card';
import { ModalOverlay } from '../modalOverlay/ModalOverlay';

import '../cardModal/cardModal.scss';
import { CardModal } from '../cardModal/CardModal';

type Props = { currentData: ICard };

export default class Modal extends React.Component<Props> {
  render() {
    return (
      <Portal>
        <div data-testid="modal" className="modal">
          <ModalOverlay />
          <CardModal
            created={this.props.currentData.created}
            image={this.props.currentData.image}
            name={this.props.currentData.name}
            status={this.props.currentData.status}
            species={this.props.currentData.species}
            type={this.props.currentData.type}
            gender={this.props.currentData.gender}
          />
          <div className="modal__wrapper">
            <button className="modal__close">&#10008;</button>
          </div>
        </div>
      </Portal>
    );
  }
}
