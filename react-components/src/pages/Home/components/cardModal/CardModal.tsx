import { ICard } from '../card/Card';

import './cardModal.scss';
import '../card/card.scss';

export function CardModal(currentData: ICard) {
  return (
    <div className="modal__content" onClick={(e) => e.stopPropagation()}>
      <div className="card__title">
        <h3>{currentData.name}</h3>
        <hr />
      </div>
      <div className="card__content">
        <img className="card__img" src={currentData.image} alt="card image" />
        <ul>
          <li>Gender: {currentData.gender}</li>
          <li>Species: {currentData.species}</li>
          <li>Status: {currentData.status}</li>
          <li>Type: {currentData.type}</li>
          <li>Created: {currentData.created}</li>
        </ul>
      </div>
    </div>
  );
}
