
// This is a basic service worker for PWA
self.addEventListener('install', (event: any) => {
  event.waitUntil(
    caches.open('creskiosk-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/favicon.ico',
        '/lovable-uploads/8cb67c2f-8aea-46cd-affa-fde848dcb918.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event: any) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => {
        console.log('Fetch failed for:', event.request.url);
        // Return a fallback or just let the browser handle the error
      });
    })
  );
});

export {};
