import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from './ui/button';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Quiz = () => {
  const { courseId, lessonId } = useParams();
  const { toast } = useToast();

  // Datos de quizzes simulados
  const quizzes = {
    'web-dev': {
      'final-quiz': {
        title: 'Examen Final de Desarrollo Web Frontend',
        questions: [
          {
            id: 1,
            question: '¿Qué es React?',
            options: [
              { id: 'a', text: 'Un framework de backend.' },
              { id: 'b', text: 'Una biblioteca de JavaScript para construir interfaces de usuario.' },
              { id: 'c', text: 'Un lenguaje de programación.' },
              { id: 'd', text: 'Una base de datos.' },
            ],
            correctAnswer: 'b',
          },
          {
            id: 2,
            question: '¿Qué hook se usa para manejar el estado en componentes funcionales?',
            options: [
              { id: 'a', text: 'useEffect' },
              { id: 'b', text: 'useContext' },
              { id: 'c', text: 'useState' },
              { id: 'd', text: 'useReducer' },
            ],
            correctAnswer: 'c',
          },
          {
            id: 3,
            question: '¿Cuál es el propósito principal de React Router?',
            options: [
              { id: 'a', text: 'Gestionar el estado global de la aplicación.' },
              { id: 'b', text: 'Realizar peticiones HTTP.' },
              { id: 'c', text: 'Manejar la navegación entre diferentes vistas de la aplicación.' },
              { id: 'd', text: 'Estilizar componentes.' },
            ],
            correctAnswer: 'c',
          },
        ],
      },
    },
    'marketing-digital': {
      'quiz-md': {
        title: 'Examen Final de Marketing Digital',
        questions: [
          {
            id: 1,
            question: '¿Qué significa SEO?',
            options: [
              { id: 'a', text: 'Search Engine Optimization' },
              { id: 'b', text: 'Social Engagement Optimization' },
              { id: 'c', text: 'Sales Efficiency Operations' },
              { id: 'd', text: 'Strategic Email Outreach' },
            ],
            correctAnswer: 'a',
          },
          {
            id: 2,
            question: '¿Cuál de estas NO es una métrica clave en email marketing?',
            options: [
              { id: 'a', text: 'Tasa de apertura' },
              { id: 'b', text: 'Tasa de clics' },
              { id: 'c', text: 'Tasa de rebote' },
              { id: 'd', text: 'Tasa de conversión de video' },
            ],
            correctAnswer: 'd',
          },
        ],
      },
    },
    'ux-ui-design': {
      'quiz-design': {
        title: 'Examen Final de Diseño UX/UI',
        questions: [
          {
            id: 1,
            question: '¿Qué es un wireframe?',
            options: [
              { id: 'a', text: 'Un diseño final de alta fidelidad.' },
              { id: 'b', text: 'Un esquema visual básico de la interfaz.' },
              { id: 'c', text: 'Un documento de requisitos técnicos.' },
              { id: 'd', text: 'Un prototipo interactivo completo.' },
            ],
            correctAnswer: 'b',
          },
          {
            id: 2,
            question: '¿Cuál es el objetivo principal de la investigación de usuario?',
            options: [
              { id: 'a', text: 'Crear diseños visualmente atractivos.' },
              { id: 'b', text: 'Entender las necesidades y comportamientos de los usuarios.' },
              { id: 'c', text: 'Optimizar el rendimiento del software.' },
              { id: 'd', text: 'Desarrollar nuevas funcionalidades.' },
            ],
            correctAnswer: 'b',
          },
        ],
      },
    },
  };

  const quiz = quizzes[courseId]?.[lessonId];

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  if (!quiz) {
    return <div className="text-center text-red-500 text-lg">Quiz no encontrado para este curso/lección.</div>;
  }

  const handleAnswerChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleSubmit = () => {
    let correctCount = 0;
    quiz.questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setSubmitted(true);

    toast({
      title: 'Quiz Completado',
      description: `Has obtenido ${correctCount} de ${quiz.questions.length} respuestas correctas.`, 
    });
  };

  const getAnswerClass = (questionId, optionId) => {
    if (!submitted) return '';
    const correctAnswer = quiz.questions.find(q => q.id === questionId)?.correctAnswer;
    const userAnswer = answers[questionId];

    if (optionId === correctAnswer) {
      return 'text-green-600 font-semibold'; // Correct answer
    } else if (optionId === userAnswer && optionId !== correctAnswer) {
      return 'text-red-600 font-semibold'; // Incorrect user answer
    }
    return '';
  };

  return (
    <div className="container mx-auto p-6">
      <Link to={`/course/${courseId}`} className="flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 mb-4">
        <ArrowLeft className="h-5 w-5 mr-2" /> Volver al Curso
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{quiz.title}</h1>

      {submitted && (
        <div className="bg-blue-100 dark:bg-blue-900 border border-blue-400 dark:border-blue-700 text-blue-700 dark:text-blue-200 px-4 py-3 rounded relative mb-6" role="alert">
          <strong className="font-bold">Resultados:</strong>
          <span className="block sm:inline"> Has obtenido {score} de {quiz.questions.length} respuestas correctas.</span>
        </div>
      )}

      <div className="space-y-8">
        {quiz.questions.map((q) => (
          <Card key={q.id} className="bg-white dark:bg-gray-800 shadow-md">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">{q.id}. {q.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                onValueChange={(value) => handleAnswerChange(q.id, value)}
                value={answers[q.id]}
                disabled={submitted}
              >
                {q.options.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value={option.id} id={`q${q.id}-option${option.id}`} />
                    <Label htmlFor={`q${q.id}-option${option.id}`} className={getAnswerClass(q.id, option.id)}>
                      {option.text}
                    </Label>
                    {submitted && option.id === q.correctAnswer && (
                      <CheckCircle className="h-4 w-4 text-green-600 ml-auto" />
                    )}
                    {submitted && option.id === answers[q.id] && option.id !== q.correctAnswer && (
                      <XCircle className="h-4 w-4 text-red-600 ml-auto" />
                    )}
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>
        ))}
      </div>

      {!submitted && (
        <Button onClick={handleSubmit} className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white">
          Enviar Respuestas
        </Button>
      )}

      {submitted && (
        <Link to={`/course/${courseId}`}>
          <Button className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white">
            Volver al Curso
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Quiz;
