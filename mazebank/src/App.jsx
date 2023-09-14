import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cuentas from './components/Cuentas';
import Pagos from './components/Pagos';
import Prestamos from './components/Prestamos';
import Transferencias from './components/Transferencias';
import Index from './components/Index';
import './index.css';
import './App.css';
import Login from './components/Login';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cuentas" element={<Cuentas />} />
      <Route path="/pagos" element={<Pagos />} />
      <Route path="/prestamos" element={<Prestamos />} />
      <Route path="/transferencias" element={<Transferencias />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  </Router>
  );
}

export default App;
