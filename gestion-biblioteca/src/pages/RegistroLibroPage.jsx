import React from "react";
import LibroForm from "../components/libros/LibroForm";
import { registrarLibro } from "../services/librosService";

const RegistroLibroPage = () => {
    const handleSubmit = async(libroData) => {
        try {
            const response = await registrarLibro(libroData);
            console.log('Libro registrado:', response.data);
        } catch (error) {
            console.error('Error al registrar el libro:', error);
        }
        console.log('Libro a registrar:', libroData);
    };

    return (
        <div className="registro-page">
            <h1>Registrar de Libro</h1>
            <LibroForm onSubmit={handleSubmit} />
        </div>
    );
};

export default RegistroLibroPage;