import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// importing pages
import Home from "./Views/Home";
import Products from "./Views/Products";
import Customers from "./Views/Customers";
import NotFound from "./Views/NotFound";
// import image from src folder
import logo from "./logo.jpg";
// importing css styling
import "./App.css";

const App = () => (
  /* Router allows us to route between different pages */
  <Router>
    <div className="App">
      <header className="App-header">
        {/* Import Image */}
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ width: 300, height: 150, marginBottom: 20 }}
        />{" "}
        {/* Navigation Bar */}
        <nav style={{ marginBottom: "2rem" }}>
          <Link to="/" style={{ margin: "0 10px", color: "#61dafb" }}>
            Home
          </Link>
          <Link to="/products" style={{ margin: "0 10px", color: "#61dafb" }}>
            Products
          </Link>
          <Link to="/customers" style={{ margin: "0 10px", color: "#61dafb" }}>
            Customers
          </Link>
        </nav>
        {/* Setting up routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </header>
    </div>
  </Router>
);

export default App;
