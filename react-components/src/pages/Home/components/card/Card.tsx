import React from 'react';
import './index.scss';

export interface ICard {
  created: string;
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
              <li>Gender: {this.props.gender}</li>
              <li>Species: {this.props.species}</li>
              <li>Status: {this.props.status}</li>
              <li>Type: {this.props.type}</li>
              <li>Created: {this.props.created}</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
