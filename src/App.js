import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav";
import AboutUs from "./components/about";
import Home from "./components/Home";
import Register from "./components/regisEvents";
import "bootstrap/dist/css/bootstrap.min.css";
import Datas from "./components/displayInfo";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/data" element={<Datas />} />
      </Routes>
    </Router>
  );
}

export default App;
