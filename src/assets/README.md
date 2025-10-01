# Assets

Esta carpeta está destinada para almacenar los recursos estáticos de tu proyecto:

## 📂 Estructura sugerida

```
assets/
├── images/          # Imágenes (PNG, JPG, WebP, etc.)
├── icons/           # Iconos SVG
├── fonts/           # Fuentes personalizadas
└── videos/          # Videos o archivos multimedia
```

## 🖼️ Imágenes

- Coloca aquí todas las imágenes de tu sitio web
- Formatos recomendados: WebP, PNG, JPG
- Optimiza las imágenes antes de subirlas

## 🎨 Iconos

- Preferentemente en formato SVG
- Nomenclatura: `icon-nombre.svg`

## 🔤 Fuentes

- Archivos de fuentes personalizadas (WOFF2, WOFF, TTF)
- Recuerda actualizar el CSS si añades fuentes locales

## 📹 Multimedia

- Videos, audio u otros archivos multimedia
- Optimiza el tamaño de archivo para web

## 🔗 Uso en el código

```html
<!-- En HTML -->
<img src="/src/assets/images/logo.png" alt="Logo">

<!-- En CSS -->
background-image: url('/src/assets/images/background.jpg');
```

```javascript
// En JavaScript
import logo from '/src/assets/images/logo.png'
```

