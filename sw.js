// Service Worker – ermöglicht Offline-Nutzung
const CACHE = 'sortierhilfe-v1';
const FILES = [
  '/sortierhilfe/',
  '/sortierhilfe/index.html',
  '/sortierhilfe/gangfolge-17.js',
  '/sortierhilfe/gangfolge-05.js',
  '/sortierhilfe/gangfolge-11.js',
  '/sortierhilfe/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
