import './App.css';
// import Sidebar from './Sidebar';
import axios from 'axios'
import { data } from 'autoprefixer';
import { useEffect, useState } from 'react';
import userEvent from '@testing-library/user-event';

function App() {
  const [heroes, setHeroes] = useState([])


  const hero = () => {
    axios
      .get("https://akabab.github.io/superhero-api/api/all.json")
      .then((response) => {
        console.log(response);
        setHeroes(response.data);
      });
  }

  useEffect(() =>{
    hero()
  }, [])
  return (
    <div className="">
      {/* <button onClick={hero}>Generate hero</button> */}
      <ul>
        {heroes.map(user => (
          <li key={user.id}>
            <img src={user.images.xs} alt="" />
            <h2> {user.name} </h2>
            
          </li>
                 ))

        }
      </ul>

      {/* <div>
        <li>
          {hero.data}
        </li>
      </div> */}
    </div>
  );
}

export default App;
