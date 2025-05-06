import React, { useEffect, useState } from 'react';
import { getLibros, deleteLibro } from '../../services/apiLibros';
import axios from 'axios';
//import LibroCard from './LibroCard';
import './libros.css'; // Estilos específicos

const LibroList = () => {
    const [libros, setLibros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  // Obtener libros al cargar el componente
    useEffect(() => {
    // Hacer la solicitud GET al backend
    axios.get('http://localhost:8080/api/libros')  // Asegúrate de que la URL esté correcta
        .then((response) => {
            setLibros(response.data);  // Guardar los libros obtenidos
        })
        .catch((err) => {
            setError('Error al obtener los libros');
            console.error(err);
        });
}, []);

  // Eliminar un libro
    const handleDelete = async (id) => {
        try {
            await deleteLibro(id);
            setLibros(libros.filter(libro => libro.id !== id));
        } catch (err) {
            console.error('Error al eliminar:', err);
        }
    };

    if (loading) return <div className='loading'>Cargando libros...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="table-container">
            <h2>Catálogo de Libros</h2>
            
            <table className="libros-table">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Editorial</th>
                        <th>Año</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {libros.length === 0 ? (
                        <tr>
                            <td colSpan="6" className="no-data">No hay libros registrados</td>
                        </tr>
                    ) : (
                        libros.map((libro) => (
                            <tr key={libro.id}>
                                <td>{libro.codigo}</td>
                                <td>{libro.titulo}</td>
                                <td>{libro.autor}</td>
                                <td>{libro.editorial}</td>
                                <td>{libro.año}</td>
                                <td>
                                    <button 
                                        onClick={() => handleDelete(libro.id)}
                                        className="delete-btn"
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default LibroList;