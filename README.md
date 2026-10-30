# GeneraLazos - PWA

GeneraLazos es una aplicación web progresiva (PWA) diseñada para conectar a jóvenes y mayores en nuevas aventuras, actividades y experiencias compartidas.

## 🚀 Preparado para GitHub Pages

Este proyecto ha sido configurado para ser desplegado fácilmente en **GitHub Pages**:

1. **Rutas Relativas**: Todos los recursos (CSS, JS, imágenes, manifiesto, Service Worker) y enlaces de navegación utilizan rutas relativas para funcionar correctamente tanto en la raíz como en subrutas de repositorios de GitHub Pages.
2. **Archivo `.nojekyll`**: Se ha incluido un archivo `.nojekyll` para evitar que GitHub Pages intente procesar la aplicación con Jekyll.
3. **GitHub Actions**: Se incluye un flujo de trabajo automatizado en `.github/workflows/deploy.yml` que despliega la aplicación automáticamente en GitHub Pages cada vez que haces un `push` a la rama `main` o `master`.

## 📦 Cómo desplegarlo manualmente en GitHub Pages

1. Sube tu repositorio a GitHub.
2. Ve a los **Settings** (Configuración) de tu repositorio en GitHub.
3. En la barra lateral izquierda, haz clic en **Pages**.
4. En **Build and deployment**, bajo **Source**, selecciona **GitHub Actions**.
5. Realiza un `push` a tu rama principal (`main` o `master`) y GitHub Actions desplegará tu PWA automáticamente.
