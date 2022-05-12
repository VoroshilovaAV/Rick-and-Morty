import { Link } from 'react-router-dom';
import { CurrentCardPayloadType } from '../../../../store/types';
import './card.scss';

const Card = (props: CurrentCardPayloadType) => {
  const { image, name, status, species, gender, id } = props;

  return (
    <>
      <Link to={`/home/${id}`}>
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
      </Link>
    </>
  );
};

export default Card;
