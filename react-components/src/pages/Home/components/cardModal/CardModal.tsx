import { ICard } from '../card/Card';

import './cardModal.scss';
import '../card/card.scss';

export function CardModal(props: ICard) {
  return (
    <div className="modal__content" onClick={(e) => e.stopPropagation()}>
      <div className="card__title">
        <h3>{props.name}</h3>
        <hr />
      </div>
      <div className="card__content">
        <img className="card__img" src={props.image} alt="card image" />
        <ul>
          <li>Gender: {props.gender}</li>
          <li>Species: {props.species}</li>
          <li>Status: {props.status}</li>
          <li>Type: {props.type}</li>
          <li>Created: {props.created}</li>
        </ul>
      </div>
    </div>
  );
}
