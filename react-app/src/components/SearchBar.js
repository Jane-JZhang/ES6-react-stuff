import React, { Component } from 'react';
import '../styles/searchBar.scss';
export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.searchStocks = this.searchStocks.bind(this);
  }

  searchStocks = event => {
    console.log('started type');
  }

  render() {
    let inlineStyle = {
      textAlign: 'center'
    };
    return (
      <div className="search-bar" style={inlineStyle}>
        <input type="text" name="search stock" onKeyDown={this.searchStocks} placeholder="Type company name or stock symbol" />
        <span className="fa fa-search search"></span>
      </div>
    )
  }
}
