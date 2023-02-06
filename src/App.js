import React from "react";

function Food({ fav }){
  return <h1>I like {fav}.</h1>;
}

function App() {
  return (
    <div>
      <h1>Helllllllo!!!</h1>
      <Food fav="Kimchi" />
      <Food fav="Udong" />
      <Food fav="Ramen" />
    </div>
  );
}

export default App;