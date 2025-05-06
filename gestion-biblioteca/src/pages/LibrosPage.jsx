import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchLibros } from '../services/librosService';
//import LibroCard from '../components/libros/LibroCard';

const LibrosPage = () => {
    const [libros, setLibros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {   
        const cargarLibros = async () => {
            try {
                const data = await fetchLibros();
                setLibros(data);
                setError(null);
            } catch (err) {
                setError("Error al cargar los libros");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        cargarLibros();
    }, []);

    // const handleDelete = async (id) => {
    //     try {
    //         await eliminarLibro(id);
    //         setLibros(libros.filter(libro => libro.id !== id));
    //     } catch (err) {
    //         console.error("Error eliminando libro", err);
    //     }
    // };

    if (loading) return <p className="text-gray-500">Cargando libros...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    
    return (
    <div className="p-4">
        <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Listado de Libros</h1>
        <Link to="/libros/nuevo" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Agregar Nuevo Libro
        </Link>
    </div>

    <div className="p-4">
        <h1 className="text-2xl mb-4">Lista de Libros</h1>
        {libros.length === 0 ? (
        <p>No hay libros registrados</p>
        ) : (
        <div className="space-y-4">
            {libros.map(libro => (
                <div key={libro.id} className="p-4 border rounded-lg">
                    <h3 className="font-bold">{libro.titulo}</h3>
                    <p>Autor: {libro.autor}</p>
                    <p>Código: {libro.codigo}</p>
                </div>
            ))}
        </div>
        )}
    </div>
    <div className="mt-8">
        <Link to="/" className="text-blue-600 hover:underline" >
            ← Volver al inicio
        </Link>
    </div>
    </div>
    );
};

export default LibrosPage;