# Docu-ux Paylink

Este proyecto sirve como documentación UX de Paylink. Centraliza colores, patrones, estilos y componentes para que el equipo de desarrollo tenga una referencia visual clara y consistente.

## ¿Para qué funciona?
- Documentar la paleta oficial y tokens de Tailwind de Paylink.
- Mostrar patrones de componentes reutilizables.
- Servir como guía de estilos para el desarrollo de interfaces.

## Ejecutar el proyecto
1. Instala dependencias:
   - `npm install`
2. Levanta el entorno local:
   - `npm run dev`

## Agregar nuevos componentes o ejemplos
1. Abre `src/App.jsx`.
2. Crea una nueva sección o bloque siguiendo el estilo existente:
   - Usa los tokens definidos en `tailwind.config.js`.
   - Reutiliza las clases del design system cuando sea posible.
3. Si necesitas nuevos tokens, agrégalos en `tailwind.config.js` y úsalos en la documentación.

## Estructura clave
- `src/App.jsx`: contenido principal de la documentación.
- `tailwind.config.js`: tokens de color y extensiones de Tailwind.
- `src/index.css`: configuración base de estilos.
