import React, { Component } from 'react';
import './styles/main.scss';
import SearchBar from './components/SearchBar';

class App extends Component {
  state = {users: []}

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('/users')
    .then((res) => {
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
