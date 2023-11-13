import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './componentes/footer/Footer';
import Header from './componentes/header/Header';
import Seccion from './componentes/seccion/Seccion';
import GestionPociones from './GestionPociones';
import Menu from './componentes/Menu';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Menu /> {/* Muestra el menú de pestañas */}
        <main>
          <Routes>
            <Route path="/" element={<Seccion />} />
            <Route path="/pociones" element={<GestionPociones />} />
          </Routes>
        </main>
   
        <Footer />
      </div>
    </Router>
  );
}

export default App;
