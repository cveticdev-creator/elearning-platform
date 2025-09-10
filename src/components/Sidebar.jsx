import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, GraduationCap, User, HelpCircle, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-gray-800 text-white dark:bg-gray-900 shadow-lg">
      <div className="flex items-center justify-center h-16 bg-gray-900 dark:bg-gray-950 text-xl font-bold border-b border-gray-700 dark:border-gray-800">
        Menú
      </div>
      <nav className="flex-1 px-2 py-4 space-y-2">
        <Link
          to="/dashboard"
          className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-200"
        >
          <Home className="h-5 w-5 mr-3" />
          Dashboard
        </Link>
        <Link
          to="/courses"
          className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-200"
        >
          <BookOpen className="h-5 w-5 mr-3" />
          Cursos
        </Link>
        <Link
          to="/profile"
          className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-200"
        >
          <User className="h-5 w-5 mr-3" />
          Perfil
        </Link>
        {/* Puedes añadir más enlaces aquí */}
      </nav>
      <div className="mt-auto px-2 py-4 border-t border-gray-700 dark:border-gray-800">
        <Link
          to="/settings"
          className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-200"
        >
          <Settings className="h-5 w-5 mr-3" />
          Configuración
        </Link>
        <Link
          to="/help"
          className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-200"
        >
          <HelpCircle className="h-5 w-5 mr-3" />
          Ayuda
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
