import {BrowserRouter, Route, Routes} from "react-router-dom";
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
              <Routes>
                  <Route path="/" element={<Deck />} />
                  <Route path="/Deck" component={Deck} />
                  <Route path="/About" component={About} />
              </Routes>
          </div>

      </BrowserRouter>
  );
}

export default App;
