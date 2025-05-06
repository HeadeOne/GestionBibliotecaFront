import React from "react";
import { Trash2, BookOpen, Building2, CalendarDays, Hash } from "lucide-react";

const LibroCard = ({ libro, onDelete }) => {
    return (
        <div className="usb-libro-card animate-fadeIn">
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-semibold text-usb-primary truncate flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-usb-secondary" />
                    {libro.titulo}
                </h3>
                <button
                    onClick={() => onDelete(libro.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                    title="Eliminar libro"
                >
                    <Trash2 className="w-5 h-5" />
                </button>
            </div>
            <p className="text-gray-700 text-sm mb-1 flex items-center gap-1">
                <Building2 className="w-4 h-4 text-usb-primary" />
                Editorial: {libro.editorial}
            </p>
            <p className="text-gray-700 text-sm mb-1 flex items-center gap-1">
                <span className="font-medium">Autor:</span> {libro.autor}
            </p>
            <div className="flex justify-between text-xs text-gray-500 mt-3">
                <span className="flex items-center gap-1">
                    <Hash className="w-4 h-4" /> {libro.codigo}
                </span>
                <span className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" /> {libro.año}
                </span>
            </div>
        </div>
    );
};

export default LibroCard;
