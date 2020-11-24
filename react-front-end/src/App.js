import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CovidMap from "./components/CovidMap";
import Assessment from "./components/Assessment";
import News from "./components/News";
import Login from "./components/Login";
import Register from "./components/Register";
import Quarantine from "./components/Quarantine";
import "./styles/App.scss";

// Add current-user state, and display on nav bar "logged in as"

function App() {
  
  return (
    <main>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav">
            <li className="nav-item active"><Link className="nav-link" to="/">Dashboard</Link></li>
            <li className="nav-item active"><Link className="nav-link" to="/map">Map</Link></li>
            <li className="nav-item active"><Link className="nav-link" to="/assessment">Assessment</Link></li>
            <li className="nav-item active"><Link className="nav-link" to="/news">News</Link></li>
            <li className="nav-item active"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item active"><Link className="nav-link" to="/register">Register</Link></li>
            <li className="nav-item active"><Link className="nav-link" to="/quarantine">Quarantine</Link></li>
          </ul>
        </nav>
        <Route path="/" exact component={Dashboard} />
        <Route path="/map" exact component={CovidMap} />
        <Route path="/assessment" exact component={Assessment} />
        <Route path="/news" exact component={News} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/quarantine" exact component={Quarantine} />
      </Router>
    </main>
  );
}

export default App;
