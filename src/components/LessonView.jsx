import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const LessonView = () => {
  const { courseId, lessonId } = useParams();
  const { toast } = useToast();

  // Datos de cursos simulados (deberían venir de una API en un proyecto real)
  const allCourses = [
    {
      id: 'web-dev',
      title: 'Desarrollo Web Frontend',
      lessons: [
        { id: 'intro', title: 'Introducción a React', type: 'video', duration: '1:30', content: 'Este video cubre los fundamentos de React, incluyendo JSX, componentes funcionales y el ciclo de vida básico. Es el punto de partida para entender cómo construir interfaces de usuario modernas y eficientes.' },
        { id: 'components', title: 'Componentes y Props', type: 'video', duration: '2:00', content: 'Aprende a crear componentes reutilizables y a pasar datos entre ellos usando props. Entenderás cómo la composición de componentes es clave en React para construir aplicaciones escalables.' },
        { id: 'state-hooks', title: 'Estado y Hooks (useState, useEffect)', type: 'video', duration: '2:30', content: 'Profundiza en la gestión del estado en React con los hooks `useState` y `useEffect`. Comprende cómo manejar el estado local de los componentes y cómo realizar efectos secundarios de manera controlada.' },
        { id: 'routing', title: 'Navegación con React Router', type: 'video', duration: '1:45', content: 'Implementa la navegación en tu aplicación React utilizando React Router. Aprende a definir rutas, enlaces y a manejar parámetros de URL para crear una experiencia de usuario fluida.' },
        { id: 'context-api', title: 'Gestión de Estado con Context API', type: 'video', duration: '3:00', content: 'Descubre cómo usar la Context API de React para gestionar el estado global de tu aplicación sin la necesidad de pasar props manualmente a través de múltiples niveles de componentes.' },
        { id: 'tailwind', title: 'Estilizando con Tailwind CSS', type: 'video', duration: '2:15', content: 'Aprende a estilizar tus aplicaciones React de manera eficiente y rápida utilizando Tailwind CSS. Explora sus clases de utilidad y cómo personalizar tu diseño.' },
        { id: 'forms', title: 'Manejo de Formularios', type: 'video', duration: '2:00', content: 'Domina la creación y validación de formularios en React. Cubre formularios controlados y no controlados, y cómo manejar la entrada del usuario de forma segura.' },
        { id: 'api-integration', title: 'Consumo de APIs REST', type: 'video', duration: '2:45', content: 'Conecta tu aplicación React con servicios backend externos. Aprende a realizar solicitudes HTTP (GET, POST, PUT, DELETE) y a manejar los datos de respuesta.' },
        { id: 'performance', title: 'Optimización de Rendimiento', type: 'video', duration: '3:15', content: 'Mejora la velocidad y eficiencia de tus aplicaciones React. Cubre técnicas como memoización, lazy loading y el uso de React Profiler.' },
        { id: 'deployment', title: 'Despliegue de Aplicaciones React', type: 'video', duration: '1:30', content: 'Aprende a preparar y desplegar tu aplicación React en plataformas de hosting como Netlify o Vercel, asegurando que esté accesible para el mundo.' },
        { id: 'final-quiz', title: 'Examen Final de Frontend', type: 'quiz', duration: '1:00', content: 'Pon a prueba tus conocimientos con este examen final que cubre todos los temas del curso de Desarrollo Web Frontend.' },
      ]
    },
    {
      id: 'marketing-digital',
      title: 'Marketing Digital Avanzado',
      lessons: [
        { id: 'intro-md', title: 'Fundamentos del Marketing Digital', type: 'video', duration: '1:40', content: 'Explora los conceptos esenciales del marketing digital, incluyendo sus pilares, canales y cómo ha transformado el panorama empresarial moderno.' },
        { id: 'seo', title: 'SEO: Optimización para Motores de Búsqueda', type: 'video', duration: '3:00', content: 'Aprende las técnicas clave para mejorar la visibilidad de tu sitio web en los resultados de búsqueda orgánicos, incluyendo investigación de palabras clave, optimización on-page y off-page.' },
        { id: 'sem', title: 'SEM: Publicidad en Buscadores', type: 'video', duration: '2:30', content: 'Domina la creación y gestión de campañas de publicidad pagada en motores de búsqueda como Google Ads, optimizando el ROI y la segmentación de audiencia.' },
        { id: 'social-media', title: 'Estrategias de Redes Sociales', type: 'video', duration: '3:10', content: 'Desarrolla estrategias efectivas para cada plataforma de redes sociales, desde la creación de contenido hasta la gestión de comunidades y el análisis de métricas.' },
        { id: 'email-marketing', title: 'Email Marketing Efectivo', type: 'video', duration: '2:40', content: 'Crea campañas de email marketing que conviertan, desde la construcción de listas hasta la segmentación, automatización y análisis de resultados.' },
        { id: 'analytics', title: 'Analítica Web con Google Analytics', type: 'video', duration: '3:00', content: 'Utiliza Google Analytics para medir el rendimiento de tu sitio web, entender el comportamiento del usuario y tomar decisiones basadas en datos.' },
        { id: 'content-marketing', title: 'Marketing de Contenidos', type: 'video', duration: '2:50', content: 'Aprende a planificar, crear y distribuir contenido valioso y relevante para atraer y retener a tu audiencia, y cómo medir su impacto.' },
        { id: 'conversion', title: 'Optimización de la Tasa de Conversión (CRO)', type: 'video', duration: '2:20', content: 'Descubre cómo mejorar el porcentaje de visitantes que realizan una acción deseada en tu sitio web, a través de pruebas A/B, análisis de embudos y optimización de la experiencia de usuario.' },
        { id: 'mobile-marketing', title: 'Marketing Móvil', type: 'video', duration: '1:50', content: 'Explora las estrategias y tácticas para llegar a tu audiencia a través de dispositivos móviles, incluyendo aplicaciones, SMS y publicidad móvil.' },
        { id: 'quiz-md', title: 'Examen Final de Marketing Digital', type: 'quiz', duration: '0:45', content: 'Pon a prueba tus conocimientos con este examen final que cubre todos los temas del curso de Marketing Digital Avanzado.' },
      ]
    },
    {
      id: 'ux-ui-design',
      title: 'Diseño UX/UI Profesional',
      lessons: [
        { id: 'intro-design', title: 'Introducción al Diseño UX/UI', type: 'video', duration: '1:00', content: 'Comprende los conceptos fundamentales del Diseño de Experiencia de Usuario (UX) y Diseño de Interfaz de Usuario (UI), y su importancia en el desarrollo de productos digitales.' },
        { id: 'user-research', title: 'Investigación de Usuario', type: 'video', duration: '2:30', content: 'Aprende a realizar investigación de usuario para entender las necesidades, comportamientos y motivaciones de tu audiencia, utilizando métodos como entrevistas, encuestas y observación.' },
        { id: 'information-arch', title: 'Arquitectura de la Información', type: 'video', duration: '2:00', content: 'Organiza y estructura el contenido de manera lógica y accesible para los usuarios, creando mapas de sitio, flujos de usuario y taxonomías efectivas.' },
        { id: 'wireframing', title: 'Wireframing y Prototipado', type: 'video', duration: '2:45', content: 'Crea wireframes de baja y alta fidelidad, y prototipos interactivos para visualizar y probar tus ideas de diseño antes de la implementación final.' },
        { id: 'visual-design', title: 'Principios de Diseño Visual', type: 'video', duration: '3:15', content: 'Aplica principios de diseño visual como tipografía, color, espacio en blanco y jerarquía para crear interfaces estéticamente agradables y funcionales.' },
        { id: 'usability-testing', title: 'Testeo de Usabilidad', type: 'video', duration: '2:00', content: 'Evalúa la facilidad de uso de tus diseños a través de pruebas con usuarios reales, identificando problemas y oportunidades de mejora.' },
        { id: 'design-systems', title: 'Sistemas de Diseño', type: 'video', duration: '2:30', content: 'Construye y utiliza sistemas de diseño para mantener la consistencia, eficiencia y escalabilidad en tus proyectos de diseño.' },
        { id: 'accessibility-design', title: 'Diseño Accesible', type: 'video', duration: '1:45', content: 'Diseña productos digitales que sean utilizables por personas con diversas habilidades, siguiendo las pautas de accesibilidad web (WCAG).' },
        { id: 'portfolio-design', title: 'Creación de Portfolio UX/UI', type: 'video', duration: '2:15', content: 'Aprende a seleccionar, presentar y comunicar tus proyectos de diseño de manera efectiva para construir un portfolio que te ayude a conseguir empleo.' },
        { id: 'quiz-design', title: 'Examen Final de Diseño UX/UI', type: 'quiz', duration: '0:45', content: 'Pon a prueba tus conocimientos con este examen final que cubre todos los temas del curso de Diseño UX/UI Profesional.' },
      ]
    },
  ];

  const course = allCourses.find((c) => c.id === courseId);
  const lesson = course?.lessons.find((l) => l.id === lessonId);

  if (!course || !lesson) {
    return <div className="text-center text-red-500 text-lg">Lección o curso no encontrado.</div>;
  }

  const handleCompleteLesson = () => {
    // Aquí se simularía la lógica para marcar la lección como completada en el backend
    toast({
      title: 'Lección Completada',
      description: `¡Has terminado la lección "${lesson.title}"!`, 
    });
    // En un proyecto real, esto actualizaría el estado del usuario y el curso
  };

  return (
    <div className="container mx-auto p-6">
      <Link to={`/course/${courseId}`} className="flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 mb-4">
        <ArrowLeft className="h-5 w-5 mr-2" /> Volver al Curso: {course.title}
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{lesson.title}</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">Duración: {lesson.duration} • Tipo: {lesson.type === 'video' ? 'Video' : 'Quiz'}</p>

      {lesson.type === 'video' ? (
        <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden mb-6">
          {/* Simulación de reproductor de video */}
          <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400 text-xl">
            <PlayCircle className="h-16 w-16 mr-4" /> Video de la lección (simulado)
          </div>
        </div>
      ) : (
        <div className="bg-yellow-100 dark:bg-yellow-900 border border-yellow-400 dark:border-yellow-700 text-yellow-700 dark:text-yellow-200 px-4 py-3 rounded relative mb-6" role="alert">
          <strong className="font-bold">¡Es un Quiz!</strong>
          <span className="block sm:inline"> Haz clic en el botón para comenzar el examen.</span>
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Contenido de la Lección</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{lesson.content}</p>
      </div>

      <div className="flex justify-end">
        {lesson.type === 'video' ? (
          <Button onClick={handleCompleteLesson} className="bg-green-600 hover:bg-green-700 text-white">
            <CheckCircle className="h-5 w-5 mr-2" /> Marcar como Completada
          </Button>
        ) : (
          <Link to={`/quiz/${courseId}/${lessonId}`}>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Ir al Quiz
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default LessonView;
