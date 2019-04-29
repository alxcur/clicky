import React, { Component } from "react";
import CharacterCard from "./component/CharacterCard";
import Wrapper from "./component/Wrapper";
import Title from "./component/Title"
import Characters from "./Characters.json";

class App extends Component {
   state = {
    Characters
  };

  render() {
    return (
      <Wrapper>
        <Title>{}</Title>
        {this.state.Characters.map(character => (
          <CharacterCard
            removeCharacter={this.removeCharacter}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;



