
// Service worker script
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('creskiosk-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/lovable-uploads/8cb67c2f-8aea-46cd-affa-fde848dcb918.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => {
        // If the fetch fails (e.g., due to being offline), just return
        console.log('Fetch failed for:', event.request.url);
        // Return a fallback or just let the browser handle the error
      });
    })
  );
});
