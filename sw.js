const CACHE = "jeti-log-analyzer-v1";

const ASSETS = [
 "/",
 "index.html",
 "logo.png",
 "https://cdn.jsdelivr.net/npm/chart.js"
];

self.addEventListener("install", e=>{

 e.waitUntil(
  caches.open(CACHE).then(cache=>cache.addAll(ASSETS))
 );

});

self.addEventListener("fetch", e=>{

 e.respondWith(
  caches.match(e.request).then(res=> res || fetch(e.request))
 );

});
