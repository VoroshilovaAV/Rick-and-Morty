import React from 'react';
import { CharacterResult, CharactersData } from '../../interfaces';
import './index.scss';

type Props = { setHomeState: (currentData: Array<CharacterResult>) => void };
type State = { value: string };

class Search extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { value: '' };
  }

  async componentDidMount() {
    if (localStorage.getItem('searchValue')) {
      await this.setState({ value: JSON.parse(localStorage.getItem('searchValue') || '') });
    }
    this.getData();
  }

  componentWillUnmount() {
    localStorage.setItem('searchValue', JSON.stringify(this.state.value));
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    this.setState({ value: value });
  }

  async handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    await this.getData();
  }

  async getData() {
    const base =
      this.state.value !== ''
        ? `https://rickandmortyapi.com/api/character/?name=${this.state.value}`
        : 'https://rickandmortyapi.com/api/character';
    try {
      const response = await fetch(`${base}`);
      const data: CharactersData = await response.json();
      this.props.setHomeState(data.results);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="wrap">
        <form className="search" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="search__term"
            placeholder="Search card"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <button type="submit" className="search__button">
            &#128269;
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
