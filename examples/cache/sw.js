const version = 'v1';
const staticVersion = 'v1';

self.addEventListener('install', event => {
  console.log(`${version} installing...`);

  // cache a local SVG
  event.waitUntil(
    caches.open(staticVersion).then(cache => cache.add('local.svg'))
  );
});

self.addEventListener('activate', event => {
  console.log(`${version} now ready to handle fetches!`);
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // serve the local SVG from the cache if the request href is 'https://picsum.photos/800/600?image=222'
  if (url.href === 'https://picsum.photos/800/600?image=222') {
    event.respondWith(caches.match('local.svg'));
  }
});