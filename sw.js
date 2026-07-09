// Service Worker deaktiviert
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
Dann „Commit changes" klicken. Danach auf dem Handy die App neu laden – der Service Worker löscht seinen eigenen Cache und ab dann funktionieren alle Updates wieder normal.
