import githubIcon from '../../../../assets/icons/github.svg';
import linkeInIcon from '../../../../assets/icons/linkedIn.svg';
import telegramIcon from '../../../../assets/icons/telegram.svg';
import './footer.scss';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p className="footer-container-text">❮❯ by Voroshilova A. - 2022</p>
        <div className="footer-container-links">
          <a className="footer-container-link" href="https://github.com/VoroshilovaAV">
            <img className="footer-container-img" src={githubIcon} alt="github icon" />
          </a>
          <a className="footer-container-link" href="https://www.linkedin.com/in/anna-voroshilova">
            <img className="footer-container-img" src={linkeInIcon} alt="linkeIn icon" />
          </a>
          <a className="footer-container-link" href="https://t.me/AVoroshilova">
            <img className="footer-container-img" src={telegramIcon} alt="telegram icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};
