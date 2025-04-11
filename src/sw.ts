
// This is a basic service worker for PWA
self.addEventListener('install', (event: any) => {
  event.waitUntil(
    caches.open('fuel-wheels-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/favicon.ico'
      ]);
    })
  );
});

self.addEventListener('fetch', (event: any) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

export {};
