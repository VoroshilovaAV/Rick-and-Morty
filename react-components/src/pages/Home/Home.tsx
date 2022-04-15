import React from 'react';

import Search from './components/search/Search';
import Card from './components/card/Card';
import { CharacterResult } from './interfaces';

import preloader from '../../assets/images/preloader.gif';
import error from '../../assets/images/error.png';
import './home.scss';

type Props = () => null;
type State = {
  data: Array<CharacterResult>;
  isLoaded: boolean;
  errorMessage: string;
};

export default class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.setHomeState = this.setHomeState.bind(this);
    this.state = {
      data: [],
      isLoaded: false,
      errorMessage: '',
    };
  }

  setHomeState(currentData: Array<CharacterResult>, errorMessage: string) {
    this.setState({ data: currentData, isLoaded: true, errorMessage: errorMessage });
  }

  render() {
    return (
      <>
        <h1 data-testid="home-page">Home page</h1>
        <Search setHomeState={this.setHomeState} />
        {!this.state.isLoaded ? (
          <img src={preloader} alt="error image" className="preloader__img"></img>
        ) : this.state.errorMessage ? (
          <div className="error">
            <img src={error} alt="error image" className="error__img" />
            <div className="error__text">{this.state.errorMessage}</div>
          </div>
        ) : (
          <div className="wrapper">
            {this.state.data.map((item) => (
              <Card
                key={item.id}
                created={item.created}
                image={item.image}
                name={item.name}
                status={item.status}
                species={item.species}
                type={item.type === '' ? 'unknown' : item.type}
                gender={item.gender}
              />
            ))}
          </div>
        )}
      </>
    );
  }
}
