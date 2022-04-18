import React from 'react';
import Modal from '../modal/Modal';
import './card.scss';

export interface ICard {
  created: string;
  image: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

type State = { isModalShown: boolean };

export default class Card extends React.Component<ICard, State> {
  constructor(props: ICard) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      isModalShown: false,
    };
  }

  toggleModal() {
    this.setState({ isModalShown: !this.state.isModalShown });
  }

  render() {
    return (
      <>
        <button className="card-button" onClick={this.toggleModal}>
          {this.state.isModalShown && <Modal currentData={this.props} />}
          <div data-testid="card-component" className="card">
            <div className="card__title">
              <h3>{this.props.name}</h3>
              <hr />
            </div>
            <div className="card__content">
              <img className="card__img" src={this.props.image} alt="card image" />
              <ul>
                <li>Gender: {this.props.gender}</li>
                <li>Species: {this.props.species}</li>
                <li>Status: {this.props.status}</li>
              </ul>
            </div>
          </div>
        </button>
      </>
    );
  }
}
