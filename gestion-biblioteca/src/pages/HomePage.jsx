import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchLibros } from "../services/librosService";
import LibroCard from "../components/libros/LibroCard";
import { FaBook, FaUserEdit, FaTags, FaPlus, FaArrowRight } from 'react-icons/fa';
import "../styles/HomePage.css"

<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Roboto:wght@400;500&display=swap" rel="stylesheet"></link>
const HomePage = () => {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarLibros = async () => {
      try {
        const data = await fetchLibros();
        setLibros(data.slice(0, 5));
      } catch (err) {
        setError("Error al cargar libros");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    cargarLibros();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Encabezado Principal */}
      <header className="usb-header text-white rounded-2xl p-8 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6 usb-hover-grow">
            <div>
              <FaBook className="text-4xl usb-text-secondary usb-header-icon" />
              <h1 className="text-4xl usb-header-title">Biblioteca Digital USB</h1>
              <p className="mt-2 text-blue-100 opacity-90">Sistema integrado de gestión bibliotecaria</p>
            </div>
          </div>
        </div>
      </header>


      {/* Contenido Principal */}
      <div className="max-w-6xl mx-auto">
        {/* Sección de Últimos Registros */}
        <section className="mb-12 usb-stat-card rounded-xl p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <FaBook className="text-2xl text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Últimos libros registrados</h2>
            </div>
            <Link 
              to="/libros"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span className="font-medium">Ver todos</span>
              <FaArrowRight className="text-sm" />
            </Link>
          </div>

          {loading ? (
            <div className="text-center py-8">
              <p className="text-gray-500 text-lg">Cargando libros...</p>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-500 text-lg">⚠️ {error}</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {libros.length > 0 ? (
                libros.map((libro) => (
                  <LibroCard 
                    key={libro.id} 
                    libro={libro}
                    className="hover:transform hover:-translate-y-1 transition-all duration-300"
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-500">No se encontraron libros registrados</p>
                </div>
              )}
            </div>
          )}
        </section>

        {/* Estadísticas Rápidas */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: <FaBook className="text-3xl usb-text-primary" />, title: "Total de Libros", value: "2,845" },
            { icon: <FaUserEdit className="text-3xl usb-text-primary" />, title: "Autores Registrados", value: "358" },
            { icon: <FaTags className="text-3xl usb-text-primary" />, title: "Categorías Activas", value: "24" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="usb-stat-card bg-white p-6 rounded-xl"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-xl">{stat.icon}</div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">{stat.title}</h3>
                  <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Acciones Rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/libros/nuevo"
            className="usb-quick-action usb-action-add p-6 rounded-xl"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <FaPlus className="text-2xl text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Agregar nuevo libro</h3>
                <p className="text-sm text-gray-500">Registra un nuevo ejemplar en el sistema</p>
              </div>
            </div>
          </Link>
          
          <Link
            to="/libros"
            className="usb-quick-action usb-action-catalog text-white p-6 rounded-xl"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <FaBook className="text-2xl text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Explorar catálogo</h3>
                <p className="text-sm text-gray-500">Consulta todos los libros disponibles</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;