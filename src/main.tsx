/*
  Este archivo es el punto de entrada principal de la aplicación React
  Aquí se realiza:
  - La inicialización de la biblioteca de animaciones AOS
  - La configuración del modo estricto de React
  - El montaje del componente raíz App en el DOM
*/

import { StrictMode } from 'react';  // Para activar el modo estricto de React
import { createRoot } from 'react-dom/client';  // API de React 18 para renderizado
import App from './App.tsx';  // Componente principal de la aplicación
import './index.css';  // Estilos globales y configuración de Tailwind CSS
import AOS from 'aos';  // Biblioteca Animate On Scroll para animaciones al hacer scroll
import 'aos/dist/aos.css';  // Estilos necesarios para AOS

// Inicializamos AOS con opciones globales que afectarán a todas las animaciones
AOS.init({
  once: true,               // Cada animación ocurre solo una vez (al hacer scroll hacia ella)
                            // Esto mejora el rendimiento y evita repeticiones al volver a desplazarse
  duration: 700,            // Duración de la animación en milisegundos (0.7s)
                            // Un valor equilibrado entre visibilidad y fluidez
  easing: 'ease-out-quart'  // Función de aceleración que da un efecto más natural
                            // Comienza rápido y desacelera hacia el final
});

// Crear la raíz de React
// El signo '!' asegura a TypeScript que el elemento siempre existirá
createRoot(document.getElementById('root')!).render(

  // StrictMode habilita verificaciones y advertencias adicionales en desarrollo
  // Estas ayudan a identificar problemas potenciales en el código
  <StrictMode>
    <App />
  </StrictMode>
);
