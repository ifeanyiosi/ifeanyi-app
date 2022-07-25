import './App.css';
// import Sidebar from './Sidebar';
import axios from 'axios'

function App() {
  const hero = () => {
    axios
      .get("https://akabab.github.io/superhero-api/api/id/658.json")
      .then((response) => {
        console.log(response);
      });
  }
  return (
    <div className="">
      <button onClick={hero}>Generate hero</button>
    </div>
  );
}

export default App;
