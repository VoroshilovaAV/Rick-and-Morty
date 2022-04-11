import React from 'react';
import './card.scss';
import './modal.scss';

export interface ICard {
  created: string;
  image: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

type State = { modal: boolean };

export default class Card extends React.Component<ICard, State> {
  constructor(props: ICard) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.getCard = this.getCard.bind(this);
    this.state = {
      modal: false,
    };
  }

  toggleModal() {
    this.setState({ modal: !this.state.modal });
  }

  handleStop(event: { stopPropagation: () => void }) {
    event.stopPropagation();
  }

  getCard(showFullInfo: boolean) {
    return (
      <>
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
            {showFullInfo && (
              <>
                <li>Type: {this.props.type}</li>
                <li>Created: {this.props.created}</li>
              </>
            )}
          </ul>
        </div>
      </>
    );
  }

  render() {
    return (
      <>
        <button className="card-button" onClick={this.toggleModal}>
          {this.state.modal && (
            <div className="modal">
              <div onClick={this.toggleModal} className="overlay"></div>
              <div className="modal-content" onClick={this.handleStop}>
                {this.getCard(true)}
                <button className="close-modal" onClick={this.toggleModal}>
                  &#10008;
                </button>
              </div>
            </div>
          )}
          <div data-testid="card-component" className="card">
            {this.getCard(false)}
          </div>
        </button>
      </>
    );
  }
}
