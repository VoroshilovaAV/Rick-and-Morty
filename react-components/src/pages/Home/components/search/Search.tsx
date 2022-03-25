import React from 'react';
import './index.scss';

class Search extends React.Component {
  render() {
    return (
      <div className="wrap">
        <div className="search">
          <input type="text" className="searchTerm" placeholder="Search card" />
          <button type="submit" className="searchButton">
            &#128269;
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
