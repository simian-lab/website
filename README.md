# Website Simian

Una estructura base moderna para desarrollo web usando **Vite** y **Tailwind CSS**.

## 🚀 Características

- ⚡ **Vite** - Build tool rápido y moderno
- 🎨 **Tailwind CSS** - Framework CSS utility-first
- 📱 **Responsive Design** - Diseño adaptable a todos los dispositivos
- 🎯 **Variables CSS** - Sistema completo de variables personalizables
- 🔧 **Configuración optimizada** - Lista para usar sin configuración adicional
- 📦 **Componentes base** - Botones, cards y utilidades incluidas

## 📁 Estructura del proyecto

```
webite-simian/
├── src/
│   ├── styles/
│   │   ├── main.css          # Estilos principales con Tailwind
│   │   └── variables.css     # Variables CSS personalizables
│   ├── assets/               # Imágenes, iconos, etc.
│   └── main.js              # JavaScript principal
├── index.html               # Archivo HTML principal
├── package.json             # Dependencias y scripts
├── vite.config.js          # Configuración de Vite
├── tailwind.config.js      # Configuración de Tailwind
└── postcss.config.js       # Configuración de PostCSS
```

## 🛠️ Instalación

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Construir para producción:**
   ```bash
   npm run build
   ```

4. **Vista previa de la build:**
   ```bash
   npm run preview
   ```

## 🎨 Personalización

### Variables CSS

El archivo `src/styles/variables.css` contiene todas las variables personalizables:

- **Colores:** Paleta completa de colores primarios, secundarios y de estado
- **Tipografía:** Familias de fuentes y tamaños
- **Espaciado:** Sistema de espaciado consistente
- **Bordes y sombras:** Radios y sombras predefinidas
- **Transiciones:** Duraciones de animación

### Tailwind Config

El archivo `tailwind.config.js` está configurado con:

- Colores personalizados extendidos
- Fuentes personalizadas (Inter y Poppins)
- Animaciones personalizadas
- Espaciado adicional

### Componentes CSS

En `src/styles/main.css` encontrarás componentes predefinidos:

- `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline`
- `.card`
- `.container-custom`

## 📱 Responsive Design

El diseño está optimizado para:

- **Mobile First:** Diseño pensado primero para dispositivos móviles
- **Breakpoints:** sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- **Grid responsivo:** Layouts que se adaptan automáticamente

## 🎯 Scripts disponibles

- `npm run dev` - Servidor de desarrollo con hot reload
- `npm run build` - Build optimizada para producción
- `npm run preview` - Vista previa de la build de producción

## 🌟 Próximos pasos

1. **Personaliza los colores** en `tailwind.config.js` y `variables.css`
2. **Agrega tu contenido** modificando `index.html`
3. **Añade funcionalidad** en `src/main.js`
4. **Incluye tus assets** en `src/assets/`

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

---

¡Feliz coding! 🚀

