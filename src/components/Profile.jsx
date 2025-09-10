import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Award, BookOpen, CheckCircle, Mail, TrendingUp, CalendarDays } from 'lucide-react';

const Profile = ({ user }) => {
  if (!user) {
    return <div className="text-center text-red-500 text-lg">Por favor, inicia sesión para ver tu perfil.</div>;
  }

  const achievements = [
    { id: 1, name: 'Primer Curso Completado', icon: <BookOpen className="h-5 w-5 text-blue-500" /> },
    { id: 2, name: 'Racha de 7 Días', icon: <CalendarDays className="h-5 w-5 text-yellow-500" /> },
    { id: 3, name: 'Experto en React', icon: <Award className="h-5 w-5 text-purple-500" /> },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Mi Perfil</h1>

      <Card className="bg-white dark:bg-gray-800 shadow-lg p-6 mb-8 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
        <Avatar className="h-24 w-24">
          <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=Ana%20Garcia" alt="Avatar" />
          <AvatarFallback>{user.name.charAt(0 )}</AvatarFallback>
        </Avatar>
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{user.name}</h2>
          <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center md:justify-start mt-1">
            <Mail className="h-4 w-4 mr-2" /> {user.email}
          </p>
          <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-2">
            <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
              Nivel: {user.level}
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              Puntos: {user.points}
            </Badge>
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
              Racha: {user.streak} días
            </Badge>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Progreso General</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">Cursos Completados: {user.courses_completed} de {user.total_courses}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-indigo-600 h-2.5 rounded-full"
                    style={{ width: `${(user.courses_completed / user.total_courses) * 100}%` }}
                  ></div>
                </div>
              </div>
              {/* Puedes añadir más barras de progreso aquí */}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Logros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                  {achievement.icon}
                  <span className="text-gray-800 dark:text-gray-200 font-medium">{achievement.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
