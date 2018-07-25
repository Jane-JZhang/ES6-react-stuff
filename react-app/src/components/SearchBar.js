import React, { Component } from 'react';
import { BASE, BATCH, BATCH_QUERY } from '../utilities/data/constants';
import '../styles/searchBar.scss';
let timeout = null;
export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.searchStocks = this.searchStocks.bind(this);
  }
  searchStocks = event => {
    console.info('started typing', timeout);
    clearTimeout(timeout);
    timeout = setTimeout(this.getStockDataAJAX(event), 8000);
  }

  getStockDataAJAX(event) {
    console.info('the input value is ', event.target.value);
    fetch( BASE + event.target.value + BATCH + BATCH_QUERY)
    .then(result => {
      return result.json();
    }).then(data => {
      console.info('receiving data stock data===', data);
    });
  }

  render() {
    return (
      <div className="search-bar">
        <input type="text" name="search stock" onKeyUp={this.searchStocks} placeholder="Type company name or stock symbol" />
        <span className="fa fa-search search"></span>
      </div>
    )
  }
}
