const cacheName = "v1";

//Call Install Event
self.addEventListener("install", (event) => {
  console.log("Service Worker: Installed 🤙");
});

//Call activate event
self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activated 🤙");
  //remove unwanted cache
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log("Service Worker: Clearing Old Cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Service Worker: Fetching");
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        //make copy/clone of response
        const resClone = res.clone();
        //open cache
        caches.open(cacheName).then((cache) => {
          //add response to cache
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch((err) => caches.match(e.request).then((res) => res))
  );
});
