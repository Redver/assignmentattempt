import {BrowserRouter, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navigation from "./Navigation";
import Deck from "./Deck";
import About from "./About";

function App() {
  return (
      <BrowserRouter>
          <div>
              <Navigation/>
              <Route path="/Deck" component={Deck} />
              <Route path="/About" component={About} />
          </div>

      </BrowserRouter>
  );
}

export default App;
