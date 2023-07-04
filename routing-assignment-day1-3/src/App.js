import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Employees from './Employees';
import Departments from './Departments';
import Projects from './Projects';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/employees" className="navbar-link">Employees</Link>
            </li>
            <li className="navbar-item">
              <Link to="/departments" className="navbar-link">Departments</Link>
            </li>
            <li className="navbar-item">
              <Link to="/projects" className="navbar-link">Projects</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/employees">
            <Employees />
          </Route>
          <Route path="/departments">
            <Departments />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
