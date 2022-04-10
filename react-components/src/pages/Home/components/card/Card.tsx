import React from 'react';
import './index.scss';

export interface ICard {
  image: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

class Card extends React.Component<ICard> {
  render() {
    return (
      <>
        <div data-testid="card-component" className="card">
          <div className="card__title">
            <h3>{this.props.name}</h3>
            <hr />
          </div>
          <div className="card__content">
            <img src={this.props.image} alt="card image" />
            <ul>
              <li>Status: {this.props.status}</li>
              <li>Species: {this.props.species}</li>
              <li>Type: {this.props.type}</li>
              <li>Gender: {this.props.gender}</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
