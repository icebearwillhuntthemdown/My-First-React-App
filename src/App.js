import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({monsters: json}))
  }

  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => 
            <h1 key={monster.id}>{monster.name}</h1>
            <h2 key={monster.id}>{monster.id}</h2>)
        }
      </div>
    );
  }
}

export default App;
