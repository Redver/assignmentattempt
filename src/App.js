import {HashRouter, Route, Routes} from "react-router-dom";
import Navigation from "./Navigation";
import Deck from "./Deck";
import About from "./About";
import "./fonts/fonts.css";

function App() {
    return (
        <HashRouter>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Deck />} />
                    <Route path="/Deck" element={<Deck />} />
                    <Route path="/About" element={<About />} />
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;