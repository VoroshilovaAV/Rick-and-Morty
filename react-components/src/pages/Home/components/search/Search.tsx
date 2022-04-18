import React from 'react';
import { CharacterResult, CharactersData } from '../../interfaces';
import './search.scss';

type Props = { setHomeState: (currentData: Array<CharacterResult>, errorMessage: string) => void };
type State = { value: string };

export default class Search extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { value: '' };
  }

  componentDidMount() {
    if (localStorage.getItem('searchValue')) {
      this.setState({ value: JSON.parse(localStorage.getItem('searchValue') || '') });
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

  handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    this.getData();
  }

  getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }

  async getData() {
    const api = 'https://rickandmortyapi.com/api/character';
    const base = this.state.value !== '' ? `${api}/?name=${this.state.value}` : `${api}`;
    try {
      const response = await fetch(`${base}`);
      if (!response.ok) {
        throw Error('No data was found for this query');
      } else {
        const data: CharactersData = await response.json();
        this.props.setHomeState(data.results, '');
      }
    } catch (error) {
      this.props.setHomeState([], this.getErrorMessage(error));
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
