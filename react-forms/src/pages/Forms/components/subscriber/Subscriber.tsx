import React from 'react';
import './index.scss';
import { FormState } from '../../Forms';

type Props = { item: FormState; key: number };

class Subscriber extends React.Component<Props> {
  render() {
    return (
      <>
        <div className="wrapper">
          <div className="subscriber">
            <img className="subscriber__img" src={this.props.item.file} alt="avatar" />
            <div className="subscriber__info">
              <h4 className="subscriber__name">
                {this.props.item.name} {this.props.item.surname}
              </h4>
              <hr />
              <p className="subscriber__text">Date of Birth: {this.props.item.date}</p>
              <p className="subscriber__text">Country: {this.props.item.country}</p>
              <p className="subscriber__text">Gender: {this.props.item.gender}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Subscriber;
