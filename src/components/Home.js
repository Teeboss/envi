import "../App.css";
import Nav from "./nav";
import AboutUs from "./about";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App appBackground">
      <div className="d-flex justify-content-evenly">
        <img src="/image.png" className="w-25" />
        <div className="w-25 mtBig d-block">
          <h1 className="h1  rightLeftAlign">Imagine If SnapChat had Events</h1>
          <span className="smallFont rightLeftAlign smallLineHeight d-block">
            Easily host and share events with your friends across any social
            media.
          </span>
          <button className="btns d-block mt-4">
            <Link to="/register" className="white">
              Create my Event
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
