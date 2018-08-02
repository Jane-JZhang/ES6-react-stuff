import React, { Component } from 'react';
import './styles/main.scss';
import SearchBar from './components/SearchBar';
import StockList from './components/StockList';
import {INIT_REQUEST_URL} from './utilities/data/constants';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    fetch(INIT_REQUEST_URL)
    .then((response) => {
      return response.json();
    }).then((response) => {
      const {AAPL, FB, GOOG} = response;
      this.setState({AAPL, FB, GOOG});
    });
  }

  render() {
    return (
      <div className="app">
        <h1>Search a stock price</h1>
        <SearchBar />
        <StockList stockData={this.state} />
      </div>
    );
  }
}

export default App;
