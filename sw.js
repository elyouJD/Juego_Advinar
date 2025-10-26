const cacheName = "juego-cache-v1";
const assetsToCache = ["/","/index.html","/manifest.json","/icons/android-chrome-192x192.png","/icons/android-chrome-512x512.png","/sounds/correct.mp3","/sounds/wrong.mp3"];

self.addEventListener("install", event => { event.waitUntil(caches.open(cacheName).then(cache=>cache.addAll(assetsToCache))); });
self.addEventListener("fetch", event => { event.respondWith(caches.match(event.request).then(r=>r||fetch(event.request))); });
