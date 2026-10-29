const CACHE_NAME = 'generalazos-v2';
const ASSETS = [
  '/',
  '/page/login.html',
  '/page/info.html',
  '/page/principal.html',
  '/page/mensajes.html',
  '/page/actividad.html',
  '/page/chat.html',
  '/page/contact-info.html',
  '/page/perfil.html',
  '/styles/login.css',
  '/styles/info.css',
  '/styles/principal.css',
  '/styles/mensajes.css',
  '/styles/actividad.css',
  '/styles/chat.css',
  '/styles/contact-info.css',
  '/styles/perfil.css',
  '/scripts/login.js',
  '/scripts/info.js',
  '/scripts/principal.js',
  '/scripts/mensajes.js',
  '/scripts/actividad.js',
  '/scripts/chat.js',
  '/scripts/contact-info.js',
  '/scripts/perfil.js',
  '/images/heart.svg',
  '/images/campana.svg',
  '/images/icono_perfil_usuario.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('/page/login.html');
        }
      });
    })
  );
});
