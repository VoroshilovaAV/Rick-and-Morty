import React from 'react';

import './cardModal.scss';
import '../card/card.scss';
import { ICard } from '../card/Card';

type Props = { currentData: ICard };

export default class CardModal extends React.Component<Props> {
  render() {
    return (
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="card__title">
          <h3>{this.props.currentData.name}</h3>
          <hr />
        </div>
        <div className="card__content">
          <img className="card__img" src={this.props.currentData.image} alt="card image" />
          <ul>
            <li>Gender: {this.props.currentData.gender}</li>
            <li>Species: {this.props.currentData.species}</li>
            <li>Status: {this.props.currentData.status}</li>
            <li>Type: {this.props.currentData.type}</li>
            <li>Created: {this.props.currentData.created}</li>
          </ul>
        </div>
      </div>
    );
  }
}
