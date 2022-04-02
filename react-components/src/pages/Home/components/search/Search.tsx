import React from 'react';
import './index.scss';

type Props = { value: string | undefined };
type State = { value: string };

class Search extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: '' };
  }

  componentDidMount() {
    if (localStorage.getItem('searchValue')) {
      this.setState({ value: JSON.parse(localStorage.getItem('searchValue') || '') });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('searchValue', JSON.stringify(this.state.value));
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    this.setState({ value });
  };

  render() {
    return (
      <div className="wrap">
        <div className="search">
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
        </div>
      </div>
    );
  }
}

export default Search;
