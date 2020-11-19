import React, { Component } from 'react';
import CharacterCard from './components/CharacterCard';
import './App.css';
import characters from './data.js';
// console.log(Characters)

class App extends Component {
  state={
    characters: characters
  }
  render() {
    return (
      <div>
        {this.state.characters.map((character, idx) => {
        return <CharacterCard key={idx} character={character} />
        })
        }
      </div>
    )
  }
}

export default App;
