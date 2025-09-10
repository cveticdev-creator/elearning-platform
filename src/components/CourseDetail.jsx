import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { PlayCircle, CheckCircle, BookOpen, Clock, BarChart2 } from 'lucide-react';

const CourseDetail = () => {
  const { courseId } = useParams();

  // Datos de cursos simulados (deberían venir de una API en un proyecto real)
  const allCourses = [
    {
      id: 'web-dev',
      title: 'Desarrollo Web Frontend',
      category: 'Programación',
      description: 'Aprende a construir interfaces de usuario modernas con React y Tailwind CSS. Cubre desde los fundamentos hasta temas avanzados como hooks, context API y optimización de rendimiento.',
      instructor: 'Juan Pérez',
      duration: '40 horas',
      level: 'Intermedio',
      image: 'https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Web+Dev+Course',
      lessons: [
        { id: 'intro', title: 'Introducción a React', type: 'video', duration: '1:30', completed: true },
        { id: 'components', title: 'Componentes y Props', type: 'video', duration: '2:00', completed: true },
        { id: 'state-hooks', title: 'Estado y Hooks (useState, useEffect )', type: 'video', duration: '2:30', completed: false },
        { id: 'routing', title: 'Navegación con React Router', type: 'video', duration: '1:45', completed: false },
        { id: 'context-api', title: 'Gestión de Estado con Context API', type: 'video', duration: '3:00', completed: false },
        { id: 'tailwind', title: 'Estilizando con Tailwind CSS', type: 'video', duration: '2:15', completed: false },
        { id: 'forms', title: 'Manejo de Formularios', type: 'video', duration: '2:00', completed: false },
        { id: 'api-integration', title: 'Consumo de APIs REST', type: 'video', duration: '2:45', completed: false },
        { id: 'performance', title: 'Optimización de Rendimiento', type: 'video', duration: '3:15', completed: false },
        { id: 'deployment', title: 'Despliegue de Aplicaciones React', type: 'video', duration: '1:30', completed: false },
        { id: 'final-quiz', title: 'Examen Final de Frontend', type: 'quiz', duration: '1:00', completed: false },
      ]
    },
    {
      id: 'marketing-digital',
      title: 'Marketing Digital Avanzado',
      category: 'Marketing',
      description: 'Domina las estrategias de marketing online para hacer crecer tu negocio. Incluye SEO, SEM, redes sociales, email marketing y analítica web.',
      instructor: 'María López',
      duration: '35 horas',
      level: 'Avanzado',
      image: 'https://via.placeholder.com/800x400/10B981/FFFFFF?text=Marketing+Digital+Course',
      lessons: [
        { id: 'intro-md', title: 'Fundamentos del Marketing Digital', type: 'video', duration: '1:40', completed: true },
        { id: 'seo', title: 'SEO: Optimización para Motores de Búsqueda', type: 'video', duration: '3:00', completed: true },
        { id: 'sem', title: 'SEM: Publicidad en Buscadores', type: 'video', duration: '2:30', completed: false },
        { id: 'social-media', title: 'Estrategias de Redes Sociales', type: 'video', duration: '3:10', completed: false },
        { id: 'email-marketing', title: 'Email Marketing Efectivo', type: 'video', duration: '2:40', completed: false },
        { id: 'analytics', title: 'Analítica Web con Google Analytics', type: 'video', duration: '3:00', completed: false },
        { id: 'content-marketing', title: 'Marketing de Contenidos', type: 'video', duration: '2:50', completed: false },
        { id: 'conversion', title: 'Optimización de la Tasa de Conversión (CRO )', type: 'video', duration: '2:20', completed: false },
        { id: 'mobile-marketing', title: 'Marketing Móvil', type: 'video', duration: '1:50', completed: false },
        { id: 'quiz-md', title: 'Examen Final de Marketing Digital', type: 'quiz', duration: '0:45', completed: false },
      ]
    },
    {
      id: 'ux-ui-design',
      title: 'Diseño UX/UI Profesional',
      category: 'Diseño',
      description: 'Crea experiencias de usuario intuitivas y atractivas con principios de UX/UI. Aprende desde la investigación de usuario hasta el prototipado y testeo.',
      instructor: 'Carlos Ruiz',
      duration: '30 horas',
      level: 'Principiante',
      image: 'https://via.placeholder.com/800x400/EF4444/FFFFFF?text=UX/UI+Design+Course',
      lessons: [
        { id: 'intro-design', title: 'Introducción al Diseño UX/UI', type: 'video', duration: '1:00', completed: true },
        { id: 'user-research', title: 'Investigación de Usuario', type: 'video', duration: '2:30', completed: true },
        { id: 'information-arch', title: 'Arquitectura de la Información', type: 'video', duration: '2:00', completed: false },
        { id: 'wireframing', title: 'Wireframing y Prototipado', type: 'video', duration: '2:45', completed: false },
        { id: 'visual-design', title: 'Principios de Diseño Visual', type: 'video', duration: '3:15', completed: false },
        { id: 'usability-testing', title: 'Testeo de Usabilidad', type: 'video', duration: '2:00', completed: false },
        { id: 'design-systems', title: 'Sistemas de Diseño', type: 'video', duration: '2:30', completed: false },
        { id: 'accessibility-design', title: 'Diseño Accesible', type: 'video', duration: '1:45', completed: false },
        { id: 'portfolio-design', title: 'Creación de Portfolio UX/UI', type: 'video', duration: '2:15', completed: false },
        { id: 'quiz-design', title: 'Examen Final de Diseño UX/UI', type: 'quiz', duration: '0:45', completed: false },
      ]
    },
  ];

  const course = allCourses.find((c ) => c.id === courseId);

  if (!course) {
    return <div className="text-center text-red-500 text-lg">Curso no encontrado.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8">
        <img src={course.image} alt={course.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{course.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{course.description}</p>
          <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 mb-6">
            <span className="flex items-center"><BookOpen className="h-5 w-5 mr-2" /> {course.lessons.length} Lecciones</span>
            <span className="flex items-center"><Clock className="h-5 w-5 mr-2" /> {course.duration}</span>
            <span className="flex items-center"><BarChart2 className="h-5 w-5 mr-2" /> Nivel: {course.level}</span>
          </div>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-3">
            Inscribirse Ahora
          </Button>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Contenido del Curso</h2>
      <div className="space-y-4">
        {course.lessons.map((lesson, index) => (
          <Card key={lesson.id} className="bg-white dark:bg-gray-800 shadow-md">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                {lesson.completed ? (
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                ) : (
                  <PlayCircle className="h-6 w-6 text-gray-400 mr-3" />
                )}
                <div>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">{index + 1}. {lesson.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{lesson.type === 'video' ? 'Video' : 'Quiz'} • {lesson.duration}</p>
                </div>
              </div>
              {!lesson.completed && (
                <Link to={`/lesson/${course.id}/${lesson.id}`}>
                  <Button variant="outline" className="text-indigo-600 border-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-gray-700">
                    {lesson.type === 'video' ? 'Ver Lección' : 'Hacer Quiz'}
                  </Button>
                </Link>
              )}
              {lesson.completed && (
                <Button variant="ghost" disabled className="text-gray-500 dark:text-gray-400">
                  Completado
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CourseDetail;
