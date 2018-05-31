import React, { Component } from 'react';
import './styles/main.scss';
import SearchBar from './components/SearchBar';

class App extends Component {
  state = {users: []}

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('/users', {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
     })
    .then((res) => {
      console.info('the response data from /users is ===', res);
      res.json()
    })
    .then((users) => {
      this.setState({ users });
    });
  }

  render() {
    return (
      <div className="app">
        <h1>Search a stock price</h1>
        <SearchBar />
      </div>
    );
  }
}

export default App;
