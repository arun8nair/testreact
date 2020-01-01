import React, {Component} from 'react';
import './App.css';
import Scroll from '../Components/Scroll';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {

  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users }))
  }

  onSearchChange = (e) => {
    this.setState({
      searchField: e.target.value
    });
  }

  render() {
    const filtered = this.state.robots.filter((robot) => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>
          Robofriends
        </h1>
        <SearchBox 
          searchChange={this.onSearchChange}
          searchField={this.state.searchField}/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filtered} />
          </ErrorBoundary>
        </Scroll>
      </div>
    )
  }
}

export default App;
