import Search from './components/search/Search';
import Card from './components/card/Card';
import { cardsData } from './components/card/data';
import './index.scss';

export default function Home() {
  return (
    <>
      <h1 data-testid="home-page">Home page</h1>
      <Search value={undefined} />
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
