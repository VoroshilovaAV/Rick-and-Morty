import React from 'react';
import Search from './components/search/Search';
import Card from './components/card/Card';
import './index.scss';
import { getAllCharacters } from '../../api/api';
import { cardsData } from './components/card/data';

export default class Home extends React.Component {
  async componentDidMount() {
    getAllCharacters();
  }

  render() {
    return (
      <>
        <h1 data-testid="home-page">Home page</h1>
        <Search />
        <div className="wrapper">
          {cardsData.map((item) => (
            <Card
              key={item.id}
              img={item.img}
              name={item.name}
              description={item.description}
              text={item.text}
              likes={item.likes}
              date={item.date}
            />
          ))}
        </div>
      </>
    );
  }
}
