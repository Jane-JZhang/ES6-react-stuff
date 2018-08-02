import React, { Component } from 'react';
import '../styles/stockList.scss';
export default class StockList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="stock-list">
          {
            Object.values(this.props.stockData).map((item) => {
              return (
                  <ul>
                    <li>
                        <b>{item.quote.companyName}: </b>
                        <span>{item.quote.latestPrice}</span>
                    </li>
                    <li>
                      <b>Open: </b>
                      <span>{item.quote.open}</span>
                    </li>
                    <li>
                        <b>Close: </b>
                        <span>{item.quote.close}</span>
                    </li>
                    <li>
                        <b>High: </b>
                        <span>{item.quote.high}</span>
                    </li>
                    <li>
                        <b>Market Cap: </b>
                        <span>{item.quote.marketCap}</span>
                    </li>
                    <li>
                        <b>P/E Ratio: </b>
                        <span>{item.quote.peRatio}</span>
                    </li>
                </ul>
              )
            })
          }
        </div>
    )
  }
}
