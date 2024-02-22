import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ResponsiveAppBar from './components/AppBar';
import Inicio from './components/Inicio';
import Registro from './components/Registro';
import Diagnostico from './components/Diagnostico';



function App() {
  return (
    <Router>
      <ResponsiveAppBar classname="appbar"/>
      <Routes>
        <Route path="/INICIO" element={<Inicio/>} />
        <Route path="/" element={<Inicio/>} />
        <Route path="/Registro" element={<Registro/>} />
        <Route path="/Diagnostico" element={<Diagnostico/>} />
      </Routes>
    </Router>
  );
}

export default App;