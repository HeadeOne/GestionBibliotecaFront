import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="text-center py-20">
            <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
            <p className="mb-4">La página que estás buscando no existe.</p>
            <Link to="/" className="text-blue-600 hover:underline">
            Volver al inicio
            </Link>
        </div>
    );
};

export default NotFoundPage;