import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Award, BookOpen, CheckCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = ({ user }) => {
  const courses = [
    {
      id: 'web-dev',
      title: 'Desarrollo Web Frontend',
      progress: 75,
      lessons_completed: 15,
      total_lessons: 20,
      category: 'Programación',
      description: 'Aprende a construir interfaces de usuario modernas con React y Tailwind CSS.',
    },
    {
      id: 'marketing-digital',
      title: 'Marketing Digital Avanzado',
      progress: 40,
      lessons_completed: 8,
      total_lessons: 20,
      category: 'Marketing',
      description: 'Domina las estrategias de marketing online para hacer crecer tu negocio.',
    },
    {
      id: 'ux-ui-design',
      title: 'Diseño UX/UI Profesional',
      progress: 90,
      lessons_completed: 18,
      total_lessons: 20,
      category: 'Diseño',
      description: 'Crea experiencias de usuario intuitivas y atractivas con principios de UX/UI.',
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Bienvenido, {user?.name || 'Usuario'}!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">Puntos Totales</CardTitle>
            <Award className="h-5 w-5 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">{user?.points || 0}</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Sigue aprendiendo para ganar más</p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">Nivel Actual</CardTitle>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">{user?.level || 'Principiante'}</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Próximo nivel en 500 puntos</p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">Racha de Estudio</CardTitle>
            <CheckCircle className="h-5 w-5 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">{user?.streak || 0} días</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">¡No rompas la cadena!</p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">Cursos Completados</CardTitle>
            <BookOpen className="h-5 w-5 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">{user?.courses_completed || 0} / {user?.total_courses || 0}</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">De tus cursos inscritos</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Mis Cursos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">{course.title}</CardTitle>
              <p className="text-sm text-gray-500 dark:text-gray-400">{course.category}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{course.description}</p>
              <div className="flex items-center mb-2">
                <Progress value={course.progress} className="w-full" />
                <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">{course.progress}%</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{course.lessons_completed} de {course.total_lessons} lecciones completadas</p>
              <Link to={`/course/${course.id}`} className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-semibold">
                Continuar Curso →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
