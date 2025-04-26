// service-worker.js

self.addEventListener('install', (e) => {
  console.log('Service Worker installed');
  self.skipWaiting(); // Force the waiting SW to become active
});

self.addEventListener('activate', (e) => {
  console.log('Service Worker activated');
});

self.addEventListener('fetch', (e) => {
  // For now, just pass through network requests
  e.respondWith(fetch(e.request));
});
