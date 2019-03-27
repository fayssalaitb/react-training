
//jshint esversion:6

import React from 'react';
import CardList from './CardList';
import SearchBox1 from './SearchBox1';
import {robots} from './robots';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''

    }
  }
  render() {
    return (<div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox1/>
      <CardList robots={robots}/>
    </div>);
  }
}

export default App;
