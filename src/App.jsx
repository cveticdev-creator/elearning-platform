import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import LessonView from './components/LessonView';
import Quiz from './components/Quiz';
import Profile from './components/Profile';
import { Toaster } from './components/ui/toaster';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Simula el estado de autenticación
  const [user, setUser] = useState(null); // Simula los datos del usuario

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {isAuthenticated && <Sidebar />}
        <div className="flex-1 flex flex-col overflow-hidden">
          {isAuthenticated && <Header user={user} onLogout={handleLogout} />}
          <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
            <Routes>
              <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
              <Route
                path="/dashboard"
                element={isAuthenticated ? <Dashboard user={user} /> : <Navigate to="/login" />}
              />
              <Route
                path="/courses"
                element={isAuthenticated ? <Courses /> : <Navigate to="/login" />}
              />
              <Route
                path="/course/:courseId"
                element={isAuthenticated ? <CourseDetail /> : <Navigate to="/login" />}
              />
              <Route
                path="/lesson/:courseId/:lessonId"
                element={isAuthenticated ? <LessonView /> : <Navigate to="/login" />}
              />
              <Route
                path="/quiz/:courseId/:lessonId"
                element={isAuthenticated ? <Quiz /> : <Navigate to="/login" />}
              />
              <Route
                path="/profile"
                element={isAuthenticated ? <Profile user={user} /> : <Navigate to="/login" />}
              />
              <Route path="*" element={<Navigate to="/dashboard" />} /> {/* Redirige a dashboard por defecto */}
            </Routes>
          </main>
        </div>
      </div>
      <Toaster />
    </Router>
  );
}

export default App;
