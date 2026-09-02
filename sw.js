const CACHE_NAME = "planner-luziana-v5";

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys =>
        Promise.all(
          keys.map(key => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {

  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {

        const copia = response.clone();

        caches.open(CACHE_NAME)
          .then(cache => {
            cache.put(
              event.request,
              copia
            );
          });

        return response;

      })
      .catch(() =>
        caches.match(event.request)
      )
  );

});


/* =========================================================
   NOTIFICAÇÕES PUSH
   ========================================================= */

self.addEventListener("push", event => {

  let dados = {};

  try {

    dados = event.data
      ? event.data.json()
      : {};

  } catch (erro) {

    dados = {
      titulo: "Planner da Luziana",
      mensagem: event.data
        ? event.data.text()
        : "Você tem uma tarefa."
    };

  }


  const titulo =
    dados.titulo ||
    "🌸 Planner da Luziana";


  const mensagem =
    dados.mensagem ||
    dados.body ||
    "Você tem uma tarefa programada.";


  const opcoes = {

    body: mensagem,

    icon:
  dados.icon ||
  "./assets/icon-192.png",

badge:
  dados.badge ||
  "./assets/icon-192.png",
    
    tag:
      dados.tag ||
      "planner-luziana",

    renotify: true,

    vibrate: [
      200,
      100,
      200
    ],

    data: {

      url:
        dados.url ||
        "./",

      tarefa:
        dados.tarefa ||
        "",

      horario:
        dados.horario ||
        ""

    }

  };


  event.waitUntil(

    self.registration.showNotification(
      titulo,
      opcoes
    )

  );

});


/* =========================================================
   CLIQUE NA NOTIFICAÇÃO
   ========================================================= */

self.addEventListener(
  "notificationclick",
  event => {

    event.notification.close();


    const dados =
      event.notification.data ||
      {};


    const url =
      dados.url ||
      "./";


    event.waitUntil(

      self.clients
        .matchAll({
          type: "window",
          includeUncontrolled: true
        })
        .then(clientes => {

          for (
            const cliente of clientes
          ) {

            if (
              "focus" in cliente
            ) {

              return cliente
                .navigate(url)
                .then(() =>
                  cliente.focus()
                );

            }

          }


          if (
            self.clients.openWindow
          ) {

            return self.clients
              .openWindow(url);

          }

        })

    );

  }
);
      
