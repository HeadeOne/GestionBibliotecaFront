import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LibrosPage from "./pages/LibrosPage";
import LibroFormPage from "./components/libros/LibroForm";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/common/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Routes>
          {/* Página Principal */}
          <Route path="/" element={<HomePage />} />
          
          {/* Gestión de Libros */}
          <Route path="/libros" element={<LibrosPage />} />
          <Route path="/libros/nuevo" element={<LibroFormPage />} />
          <Route path="/libros/editar/:id" element={<LibroFormPage />} /> 
          
          {/* Ruta 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;