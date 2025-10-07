# Website Simian - Versión Estática

Esta es una versión estática del website de Simian que puede ser enviada al cliente para revisión.

## 📁 Estructura del proyecto

```
preview/
├── index.html              # Página principal
├── css/
│   ├── variables.css       # Variables CSS del sistema de diseño
│   └── main.css           # Estilos principales
├── js/
│   └── main.js            # JavaScript principal
├── images/
│   ├── logo-simian.svg
│   ├── logo-simian-white.svg
│   ├── cover.jpg
│   ├── cover-desk.jpg
│   ├── proy-1.jpg
│   ├── proy-2.jpg
│   └── logos-clientes/
│       ├── client 01.png
│       ├── client 02.png
│       └── ... (todos los logos)
└── README.md              # Este archivo
```

## 🚀 Cómo usar

### Opción 1: Abrir directamente en el navegador
1. Simplemente abre el archivo `index.html` en tu navegador web
2. El sitio funcionará completamente sin necesidad de servidor

### Opción 2: Servidor local (recomendado)
Para una mejor experiencia, puedes usar un servidor local:

```bash
# Con Python 3
python -m http.server 8000

# Con Python 2
python -m SimpleHTTPServer 8000

# Con Node.js (si tienes npx)
npx serve .

# Con PHP
php -S localhost:8000
```

Luego abre `http://localhost:8000` en tu navegador.

## 🎨 Características

- **Completamente estático**: No requiere build tools ni dependencias
- **Responsive**: Funciona en móviles, tablets y desktop
- **Optimizado**: Incluye Tailwind CSS via CDN para mejor rendimiento
- **Iconos**: Usa Font Awesome para iconos de redes sociales y contacto
- **Fuentes**: Carga fuentes de Google Fonts automáticamente

## 📱 Secciones incluidas

1. **Header/Navigation** - Menú responsive con logo
2. **Hero Section** - Título principal y descripción
3. **Imagen de portada** - Responsive (diferente para móvil/desktop)
4. **Proyectos** - Cards de proyectos destacados
5. **Ruta de trabajo** - 6 pasos del proceso
6. **Clientes** - Grid de logos de empresas
7. **Footer** - Información de contacto, menús y redes sociales

## 🔧 Tecnologías utilizadas

- **HTML5** - Estructura semántica
- **Tailwind CSS** - Framework de utilidades (via CDN)
- **CSS Variables** - Sistema de diseño personalizado
- **Font Awesome** - Iconos (via CDN)
- **Google Fonts** - Tipografías (Source Sans Pro, Vollkorn)
- **JavaScript vanilla** - Interactividad del menú móvil

## 📋 Notas importantes

- Todos los enlaces están configurados como `#` (placeholder)
- Las imágenes están optimizadas para web
- El sitio es completamente funcional sin conexión a internet (excepto CDNs)
- Compatible con todos los navegadores modernos

## 📞 Información de contacto

- **WhatsApp**: +57 311 599 2255
- **Email**: info@simian.co

---

*Desarrollado con ❤️ por Simian*
