import React, { useState } from "react";
import { registrarLibro } from "../../services/librosService";
import "../../styles/LibroCard.css"

const LibroForm = () => {
    const [formData, setFormData] = useState({
        codigoLibro: '',
        titulo: '',
        autor: '',
        editorial: '',
        anio: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registrarLibro(formData);
            alert('Libro creado exitosamente')
            setFormData({
                codigoLibro: '',
                titulo: '',
                autor: '',
                editorial: '',
                anio: ''
            });
        } catch (error) {
            console.error('Error al crear el libro:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="libro-form">
            
            <div>
                <label htmlFor="codigoLibro">Código Libro</label>
                <input 
                    type="text" 
                    name="codigoLibro" 
                    id="codigoLibro" 
                    value={formData.codigoLibro}
                    onChange={(e) => setFormData({...formData, codigoLibro: e.target.value })}
                    placeholder="Código del libro" 
                    required
                />
            </div>
            <div>
                <label htmlFor="titulo">Título</label>
                <input 
                    type="text" 
                    name="titulo" 
                    id="titulo" 
                    value={formData.titulo}
                    onChange={(e) => setFormData({...formData, titulo: e.target.value})} 
                    placeholder="Título del libro"
                    required
                />
            </div>
            <div>
                <label htmlFor="autor">Autor</label>
                <input 
                    type="text" 
                    name="autor" 
                    id="autor" 
                    value={formData.autor}
                    onChange={(e) => setFormData({...formData, autor: e.target.value})} 
                    placeholder="Autor del libro"
                    required
                />
            </div>
            <div>
                <label htmlFor="editorial">Editorial</label>
                <input 
                    type="text" 
                    name="editorial" 
                    id="editorial" 
                    value={formData.editorial}
                    onChange={(e) => setFormData({...formData, editorial: e.target.value})} 
                    placeholder="Editorial del libro"
                    required
                />
            </div>
            <div>
                <label htmlFor="anio">Año</label>
                <input 
                    type="number" 
                    name="anio" 
                    id="anio" 
                    value={formData.anio}
                    onChange={(e) => setFormData({...formData, anio: e.target.value})} 
                    min="1900" 
                    max={new Date().getFullYear()}
                    placeholder="Año de publicación"
                    required
                />
            </div>
            <button type="submit">Registrar</button>
        </form>
    );
};

export default LibroForm;