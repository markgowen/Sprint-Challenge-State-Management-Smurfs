import React from "react";
import "./App.css";

import NavBar from './NavBar'
import SmurfCard from './SmurfCard'
import PostSmurf from "./PostSmurf";


function App() {
  return (
    <div className="App">
      <NavBar />
      <PostSmurf />
      <SmurfCard />
    </div>
  );
}


export default App;
