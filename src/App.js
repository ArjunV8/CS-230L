import logo from './logo.svg';
import './App.css';
import Cards from './Cards.js';
import Navbar from './Navbar.js';
function App() {
  return (
    <div className="App">

<Navbar />
       <h1>CS 230L</h1>
       <h2>Section - 001</h2>
       <p>WVU ID: 800288188</p>
       <p>Hi I am Arjun Vijay</p>
       <div className="card-container">
        <Cards title="Card 01" content="Some quick example text to build on the card title and make up the bulk of the card's content" />
        <Cards title="Card 02" content="Some quick example text to build on the card title and make up the bulk of the card's content" />
        <Cards title="Card 03" content="Some quick example text to build on the card title and make up the bulk of the card's content" />
      </div>
       </div>
  
  );
}

export default App;
