import React from 'react';
import { Link } from 'react-router-dom';
import { LogOut, UserCircle } from 'lucide-react';
import { Button } from './ui/button';

const Header = ({ user, onLogout }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 border-b-4 border-indigo-600 dark:border-indigo-700 shadow-md">
      <div className="flex items-center">
        <Link to="/dashboard" className="text-2xl font-bold text-gray-800 dark:text-white">
          EduPlatform
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        {user && (
          <div className="flex items-center space-x-2">
            <UserCircle className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            <span className="text-gray-700 dark:text-gray-200 font-medium">{user.name}</span>
          </div>
        )}
        <Button onClick={onLogout} variant="ghost" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
          <LogOut className="h-5 w-5 mr-2" />
          Cerrar Sesión
        </Button>
      </div>
    </header>
  );
};

export default Header;
