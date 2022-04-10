import React from 'react';
import './index.scss';

export interface ICard {
  img: string;
  name: string;
  description: string;
  text: string;
  likes: number;
  date: string;
}

class Card extends React.Component<ICard> {
  render() {
    return (
      <>
        <div data-testid="card-component" className="card">
          <img src={this.props.img} alt="card image" />
          <div className="title-content">
            <h3>{this.props.name}</h3>
            <hr />
            <div className="intro">{this.props.description}</div>
          </div>
          <div className="card-info">{this.props.text}</div>
        </div>
      </>
    );
  }
}

export default Card;
