/* Plongée Loisirs Chalon — service worker : ouverture de l'application sans réseau.
   Si vous modifiez index.html, sw.js, les icônes ou le manifeste, augmentez VERSION.
   Une simple mise à jour de app.bin.json (changement de code, nouvelle version) n'en a pas besoin. */
const VERSION = 'plc-fiche-secu-v2';
const ASSETS = [
  './',
  './index.html',
  './app.bin.json',
  './jspdf.umd.min.js',
  './manifest.webmanifest',
  './logo.jpg',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function timeout(ms){ return new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), ms)); }

self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;

  /* Application chiffrée : réseau d'abord (pour qu'un changement de code s'applique tout de suite),
     copie enregistrée si le réseau est absent ou trop lent (en mer). */
  if (url.pathname.endsWith('/app.bin.json')) {
    event.respondWith(
      caches.open(VERSION).then(cache =>
        Promise.race([fetch(req, {cache: 'no-store'}), timeout(4000)])
          .then(res => { if (res && res.ok) { cache.put('./app.bin.json', res.clone()); return res; } throw new Error('bad'); })
          .catch(() => cache.match('./app.bin.json'))
      )
    );
    return;
  }

  /* Reste de l'application : copie enregistrée immédiate, mise à jour en arrière-plan. */
  event.respondWith(
    caches.open(VERSION).then(cache =>
      cache.match(req, {ignoreSearch: true}).then(cached => {
        const network = fetch(req)
          .then(res => { if (res && res.ok) cache.put(req, res.clone()); return res; })
          .catch(() => cached);
        return cached || network;
      })
    )
  );
});
