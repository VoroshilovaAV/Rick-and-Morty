import { useState } from 'react';
import CardModal from '../cardModal/CardModal';
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

const Card = (props: ICard) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const { created, image, name, status, species, type, gender } = props;

  return (
    <>
      <button className="card-button" onClick={() => setIsModalShown(!isModalShown)}>
        {isModalShown && (
          <Modal>
            <CardModal
              created={created}
              image={image}
              name={name}
              status={status}
              species={species}
              type={type}
              gender={gender}
            />
          </Modal>
        )}
        <div data-testid="card-component" className="card">
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
            </ul>
          </div>
        </div>
      </button>
    </>
  );
};

export default Card;
