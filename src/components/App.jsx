import React from "react";
import Card from "./Card";
import Emojipedia from "../emojipedia";

//Function to create a new Card passing emojipedia attributes
function createCard(emoji) {
  return (
    <Card
      key={emoji.id}
      img={emoji.emoji}
      name={emoji.name}
      definition={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{Emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
