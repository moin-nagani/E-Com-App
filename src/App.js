import "./App.css";
import Home from "./Home";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import BottomNavBar from "./BottomNavBar";
import Account from "./Account";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderNavBar from "./HeaderNavBar";
import Categories from "./Categories";

function App() {
  return (
    <div className="App ">
      <Router>
        <HeaderNavBar></HeaderNavBar>
        <div className="home">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
        <BottomNavBar></BottomNavBar>
      </Router>
    </div>
  );
}

export default App;
