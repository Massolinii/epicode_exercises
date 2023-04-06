import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/Navbar";
import Home from "./components/Home";
import TvShows from "./components/TvShows";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv-shows" element={<TvShows />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
