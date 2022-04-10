import React from 'react';
import Search from './components/search/Search';
import Card from './components/card/Card';
import './index.scss';
import { CharacterResult } from './interfaces';

type Props = () => null;
type State = {
  data: Array<CharacterResult>;
  isLoaded: boolean;
};

export default class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.setHomeState = this.setHomeState.bind(this);
    this.state = {
      data: [],
      isLoaded: true,
    };
  }

  setHomeState(currentData: Array<CharacterResult>) {
    this.setState({ data: currentData, isLoaded: true });
  }

  render() {
    return (
      <>
        <h1 data-testid="home-page">Home page</h1>
        <Search setHomeState={this.setHomeState} />
        {!this.state.isLoaded ? (
          <div className="preloader">
            <div className="preloader__image"></div>
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
