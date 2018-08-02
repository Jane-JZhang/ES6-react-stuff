import React, { Component } from 'react';
import { BASE, BATCH, BATCH_QUERY } from '../utilities/data/constants';
import '../styles/searchBar.scss';
export default class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timer: null
    };
    this.searchStocks = this.searchStocks.bind(this);
  }

  searchStocks = event => {
    if (this.state.timer) {
      clearTimeout(this.state.timer);
    }
    this.state.timer = setTimeout(() => {
      this.getStockDataAJAX(event);
      this.state.timer = null;
    }, 1000);
  }

  getStockDataAJAX(event) {
    try{
      console.info('the request url is ', BASE + event.target.value + BATCH_QUERY);
      fetch( BASE + event.target.value + BATCH_QUERY)
      .then(result => {
        return result.json();
      }).then(data => {
        console.info('receiving data stock data===', data);
      });
    } catch(error) {
      console.log('can not find this stock ');
    }
  }

  render() {
    return (
      <div className="search-bar">
        <input type="text" name="search stock" onKeyUp={this.searchStocks} placeholder="Type a stock symbol" />
        <span className="fa fa-search search"></span>
      </div>
    )
  }
}
