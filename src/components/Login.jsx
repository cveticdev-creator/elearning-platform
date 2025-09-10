import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useToast } from '../hooks/use-toast';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de autenticación
    if (email === 'demo@example.com' && password === 'password') {
      onLogin({
        name: 'Ana García',
        email: 'demo@example.com',
        points: 1250,
        level: 'Intermedio',
        streak: 7,
        courses_completed: 3,
        total_courses: 5,
      });
      toast({
        title: 'Inicio de sesión exitoso',
        description: 'Bienvenido de nuevo, Ana.',
      });
    } else {
      toast({
        title: 'Error de inicio de sesión',
        description: 'Credenciales incorrectas. Usa demo@example.com / password',
        variant: 'destructive',
      });
    }
  };

  const handleDemoLogin = () => {
    onLogin({
      name: 'Ana García',
      email: 'demo@example.com',
      points: 1250,
      level: 'Intermedio',
      streak: 7,
      courses_completed: 3,
      total_courses: 5,
    });
    toast({
      title: 'Inicio de sesión de demostración',
      description: 'Has iniciado sesión con la cuenta de demostración.',
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Bienvenido a EduPlatform</CardTitle>
          <CardDescription>Inicia sesión en tu cuenta o usa el acceso demo.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="demo@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
              Iniciar Sesión
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            <Button variant="outline" className="w-full" onClick={handleDemoLogin}>
              Acceso Demo
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
