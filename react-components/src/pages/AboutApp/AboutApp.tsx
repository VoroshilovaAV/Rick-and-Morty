import aboutImg from '../../assets/images/about.png';
import './aboutapp.scss';

const AboutApp = () => {
  return (
    <>
      <h1 className="aboutAppText" data-testid="about-page">
        About the application
      </h1>
      <div className="aboutAppWrapper">
        <p className="aboutAppWrapper-text">
          This application uses the{' '}
          <a className="aboutAppWrapper-text__link" href="https://rickandmortyapi.com/">
            The Rick and Morty API
          </a>
          .
        </p>
        <p className="aboutAppWrapper-text">
          On the home page you can do a character search and get the cards you need. There are also
          filters by status, gender, and species.
        </p>
        <p className="aboutAppWrapper-text">
          You can click on a card and get extended information about the character: its type and
          creation date.
        </p>
        <p className="aboutAppWrapper-text">
          On the forms page, you can create a unique subscriber card by entering some data into the
          form. After clicking the &quot;Submit&quot; button at the bottom of the page, your card
          will be created.
        </p>
        <p className="aboutAppWrapper-text">
          When you switch between pages, all the data is saved.
        </p>
        <p className="aboutAppWrapper-text">Thank you for your visit!</p>
        <img src={aboutImg} alt="about image" className="aboutAppWrapper-img" />
      </div>
    </>
  );
};

export default AboutApp;
