import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowStudent from './components/ShowStudent';
import HeaderComponent from './components/HeaderComponent';
import AddStudent from './components/AddStudent';



function App() {
  return (
    <div className="App">

      <Router>
        <div>
          <HeaderComponent />
          <Routes>

            <Route path="/add-student" element={<AddStudent />} />
            <Route path="/show-student" element={<ShowStudent />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
