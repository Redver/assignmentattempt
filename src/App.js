import {BrowserRouter, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Route path="/deck" component={Deck} />
        <Route path="/about" component={About} />
      </BrowserRouter>
  );
}

export default App;
