import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const Courses = () => {
  const allCourses = [
    {
      id: 'web-dev',
      title: 'Desarrollo Web Frontend',
      category: 'Programación',
      description: 'Aprende a construir interfaces de usuario modernas con React y Tailwind CSS. Cubre desde los fundamentos hasta temas avanzados como hooks, context API y optimización de rendimiento.',
      instructor: 'Juan Pérez',
      duration: '40 horas',
      level: 'Intermedio',
      image: 'https://via.placeholder.com/400x200/4F46E5/FFFFFF?text=Web+Dev',
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
      image: 'https://via.placeholder.com/400x200/10B981/FFFFFF?text=Marketing+Digital',
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
      image: 'https://via.placeholder.com/400x200/EF4444/FFFFFF?text=UX/UI+Design',
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

  const [searchTerm, setSearchTerm] = useState('' );
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || course.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(allCourses.map(course => course.category))];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Explorar Cursos</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input
          type="text"
          placeholder="Buscar cursos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
        />
        <Select onValueChange={setFilterCategory} value={filterCategory}>
          <SelectTrigger className="w-full md:w-[200px] bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700">
            <SelectValue placeholder="Filtrar por categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las categorías</SelectItem>
            {categories.map(category => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <Card key={course.id} className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-t-lg" />
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">{course.title}</CardTitle>
                <p className="text-sm text-gray-500 dark:text-gray-400">{course.category} • {course.level}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{course.description}</p>
                <Link to={`/course/${course.id}`} className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-semibold">
                  Ver Curso →
                </Link>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 dark:text-gray-400 text-lg">No se encontraron cursos que coincidan con tu búsqueda.</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
