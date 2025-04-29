import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Inicializamos AOS con opciones globales
AOS.init({
  once: true,           // anima solo la primera vez
  duration: 700,        // duración de la animación en ms
  easing: 'ease-out-quart'
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
