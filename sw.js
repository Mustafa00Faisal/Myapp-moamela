self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // جلب التحديث الجديد من الإنترنت مباشرة، وإذا كان الهاتف مقطوعاً من الإنترنت يفتح من الذاكرة
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
