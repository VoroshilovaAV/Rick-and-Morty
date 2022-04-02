import React from 'react';
import { ICard } from './interfaces';
import './index.scss';

class Card extends React.Component<ICard> {
  render() {
    return (
      <>
        <div
          data-testid="card-component"
          className="card"
          style={{ backgroundImage: `url(${this.props.img})` }}
        >
          <div className="title-content">
            <h3>{this.props.name}</h3>
            <hr />
            <div className="intro">{this.props.description}</div>
          </div>
          <div className="card-info">{this.props.text}</div>
          <div className="utility-info">
            <ul className="utility-list">
              <li className="likes">{this.props.likes}</li>
              <li className="date">{this.props.date}</li>
            </ul>
          </div>
          <div className="gradient-overlay"></div>
          <div className="color-overlay"></div>
        </div>
      </>
    );
  }
}

export default Card;
