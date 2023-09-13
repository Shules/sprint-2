import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cuentas from './components/Cuentas';
import Pagos from './components/Pagos';
import Prestamos from './components/Prestamos';
import Transferencias from './components/Transferencias';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/components/login" element={<Login />} />
        <Route path="/components/cuentas" element={<Cuentas />} />
        <Route path="/components/pagos" element={<Pagos />} />
        <Route path="/components/prestamos" element={<Prestamos />} />
        <Route path="/components/transferencias" element={<Transferencias />} />
      </Routes>
    </Router>
  );
}

export default App;
