const CACHE="planner-luziana-v1";
const ASSETS=["./","./index.html","./manifest.webmanifest",
"./assets/cover.png","./assets/segunda.png","./assets/terca.png",
"./assets/quarta.png","./assets/quinta.png","./assets/sexta.png",
"./assets/icon-192.png","./assets/icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request))));
