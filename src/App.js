import './App.css';
// import Sidebar from './Sidebar';
import axios from 'axios'
import { data } from 'autoprefixer';
import { useState } from 'react';

function App() {
  const [heroes, setHeroes] = useState('')


  const hero = () => {
    axios
      .get("https://akabab.github.io/superhero-api/api/id/658.json")
      .then((response) => {
        console.log(response);
        setHeroes(response.data)
      });
  }
  return (
    <div className="">
      <button onClick={hero}>Generate hero</button>
      <h1>{heroes}</h1>
    </div>
  );
}

export default App;
