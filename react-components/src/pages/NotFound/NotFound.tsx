import error404 from '../../assets/images/404.png';
import './notfound.scss';

const NotFound = () => {
  return <img className="NotFoundImg" src={error404} alt="not found image" />;
};

export default NotFound;
