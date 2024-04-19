import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Deck from "./Deck";
import About from "./About";
import "./fonts/fonts.css";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/Deck" element={<Deck />} />
                    <Route path="/About" element={<About />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;