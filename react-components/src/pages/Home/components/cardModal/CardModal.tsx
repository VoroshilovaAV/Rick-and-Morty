import './cardModal.scss';
import '../card/card.scss';
import { ICard } from '../card/Card';

const CardModal = (currentData: ICard) => {
  const { created, image, name, status, species, type, gender } = currentData;
  return (
    <>
      <div className="card__title">
        <h3>{name}</h3>
        <hr />
      </div>
      <div className="card__content">
        <img className="card__img" src={image} alt="card image" />
        <ul>
          <li>Gender: {gender}</li>
          <li>Species: {species}</li>
          <li>Status: {status}</li>
          <li>Type: {type}</li>
          <li>Created: {created}</li>
        </ul>
      </div>
    </>
  );
};

export default CardModal;
