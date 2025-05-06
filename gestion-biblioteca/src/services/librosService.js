import axios from 'axios';

// Mock inicial (luego se conectará a Spring Boot)
// 1. Definir la URL base desde variables de entorno
const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080/api/libros',
    timeout: 10000
});

apiClient.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

// 2. Servicio para obtener libros
export const getLibros = async () => {
    try {
        const response = await apiClient.get('/libros');
        return response.data;
    } catch (error) {
        console.error('Error al obtener los libros:', error);
        throw error;
    }
};

// 2. Servicio para obtener libros
export const fetchLibros = async () => {
    try{
        const response = await apiClient.get('/libros');
        return response.data;
    } catch (error) {
        console.error('Error en fetchLibros:', {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status
    });
        throw new Error('No se pudo cargar la lista de libros');
    }
};

// 3. Servicio para registrar libros
export const registrarLibro = async (libroData) => {
    try{
        const response = await apiClient.post('/libros', libroData);
        return response.data;
    } catch (error) {
        console.error("Error de registro de libro: ",error)
        throw error;
    }
};

// export const eliminarLibro = async (id) => {
//     try{
//         const response = await apiClient.delete(`/libros/${id}`);
//         return response.data;
//     } catch (error) {
//         console.error("Error al eliminar el libro: ", error);
//         throw error;
//     }
// };