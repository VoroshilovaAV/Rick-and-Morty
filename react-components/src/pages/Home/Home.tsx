import React from 'react';
import Search from './components/search/Search';
import Card from './components/card/Card';
import './index.scss';
import { CharacterResult, CharactersData } from './interfaces';

type Props = () => null;
type State = {
  data: Array<CharacterResult>;
  isLoaded: boolean;
};

export default class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
    };
  }

  async componentDidMount() {
    const base = 'https://rickandmortyapi.com/api/character';
    try {
      const response = await fetch(`${base}`);
      const data: CharactersData = await response.json();
      this.setState({ data: data.results, isLoaded: true });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <>
        <h1 data-testid="home-page">Home page</h1>
        <Search />
        {!this.state.isLoaded ? (
          <div className="preloader">
            <div className="preloader__image"></div>
          </div>
        ) : (
          <div className="wrapper">
            {this.state.data.map((item) => (
              <Card
                key={item.id}
                image={item.image}
                name={item.name}
                status={item.status}
                species={item.species}
                type={item.type === '' ? 'Unknown' : item.type}
                gender={item.gender}
              />
            ))}
          </div>
        )}
      </>
    );
  }
}
