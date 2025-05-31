# Bolipops 🍦

![Bolipops Banner](src\assets\images\header.png)

## 📝 Descripción

Bolipops es un sitio web para una marca de paletas heladas artesanales, desarrollado con React, TypeScript y Tailwind CSS. El sitio presenta una moderna interfaz de usuario con animaciones de scroll fluidas, diseño responsivo y una experiencia de usuario intuitiva para mostrar los diferentes sabores de paletas.

## ✨ Características principales

- **Diseño responsivo**: Adaptable a dispositivos móviles, tabletas y escritorio
- **Animaciones de scroll**: Implementadas con la biblioteca AOS (Animate On Scroll)
- **Interfaz moderna**: Desarrollada con Tailwind CSS y componentes React
- **Catálogo de productos**: Muestra de paletas con imágenes, descripciones y precios
- **Ventanas modales**: Para ver detalles de productos
- **Navegación fluida**: Con transiciones suaves entre secciones

## 🛠️ Tecnologías utilizadas

- **React 18**: Biblioteca para construir interfaces de usuario
- **TypeScript**: Superset tipado de JavaScript
- **Vite**: Herramienta de construcción moderna y rápida
- **Tailwind CSS**: Framework de CSS utilitario
- **AOS**: Biblioteca para animaciones de scroll
- **Lucide React**: Iconos modernos y limpios

## 🚀 Instalación y configuración

### Requisitos previos

- Node.js (versión 18 o superior)
- npm o yarn

### Pasos para instalación

1. Clona este repositorio:
```bash
git clone https://github.com/Javi-CD/bolipops.git
cd bolipops
```

2. Instala las dependencias:
```bash
npm install
# o con yarn
yarn
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
# o con yarn
yarn dev
```

4. Abre tu navegador en `http://localhost:3000`

## 📂 Estructura del proyecto

```
src/
  ├── components/        # Componentes React
  │   ├── ContactSection.tsx
  │   ├── FeaturesSection.tsx
  │   ├── Footer.tsx
  │   ├── HeroSlider.tsx
  │   ├── Navbar.tsx
  │   ├── ProductCard.tsx
  │   ├── ProductModal.tsx
  │   ├── ProductsSection.tsx
  │   └── TestimonialsSection.tsx
  ├── data/              # Datos de la aplicación
  │   └── products.ts    # Información de productos
  ├── public/            # Archivos públicos
  │   └── img/           # Imágenes de productos
  ├── App.tsx            # Componente principal
  ├── main.tsx           # Punto de entrada
  └── index.css          # Estilos globales
```

## 🧩 Componentes principales

- **HeroSlider**: Slider principal con imágenes y mensajes promocionales
- **ProductsSection**: Muestra la colección de paletas disponibles
- **ProductCard**: Tarjeta para mostrar información resumida de cada paleta
- **ProductModal**: Ventana modal con detalles completos del producto
- **FeaturesSection**: Sección que destaca las características del producto
- **TestimonialsSection**: Muestra testimonios de clientes
- **ContactSection**: Información de contacto y formulario de suscripción
- **Footer**: Pie de página con enlaces y derechos de autor

## 🎨 Personalización

El proyecto utiliza Tailwind CSS para los estilos, lo que facilita la personalización:

- Modifica `tailwind.config.js` para ajustar colores, tipografías y otros valores del tema
- Los componentes están estructurados de manera que facilita el cambio de estilos y contenido

## 🔄 Animaciones

Las animaciones de scroll utilizan la biblioteca AOS con las siguientes características:

- Animaciones fade-up en las secciones principales
- Transiciones suaves controladas por CSS
- Comportamiento optimizado para dispositivos móviles

## 📱 Compatibilidad

El sitio es compatible con:

- Google Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Microsoft Edge (últimas 2 versiones)
- Dispositivos móviles Android e iOS

## 🚀 Despliegue

Para construir la versión de producción:

```bash
npm run build
# o con yarn
yarn build
```

Los archivos compilados estarán disponibles en la carpeta `dist/`, listos para ser desplegados en cualquier servidor web estático como:

- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## 👥 Contribución

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Haz un fork del proyecto
2. Crea una rama para tu característica (`git checkout -b feature/name-feature`)
3. Realiza tus cambios
4. Haz commit de tus cambios (`git commit -m 'Añade una característica x'`)
5. Haz push a la rama (`git push origin feature/name-feature`)
6. Abre un Pull Request

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

Para consultas o sugerencias:

- Email: javierperezviloria07@gmail.com

---

Desarrollado con ❤️ por Javier Pérez. © 2025
