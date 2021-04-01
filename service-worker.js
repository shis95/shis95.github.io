/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cbfbb57e81ec555181bfd23a1864d4c8"
  },
  {
    "url": "assets/css/0.styles.9f4589a6.css",
    "revision": "46d41d9abd19bbdbea0980a54552fa99"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ff684f25.js",
    "revision": "853446a80945bebb7f8c1795ddba7a3d"
  },
  {
    "url": "assets/js/11.af3486b3.js",
    "revision": "5aff6557048c7399a664080eef1d6991"
  },
  {
    "url": "assets/js/12.3fb1b63b.js",
    "revision": "3973a164d535f01cf7ef64c6440d989b"
  },
  {
    "url": "assets/js/13.fc5fb59d.js",
    "revision": "4c506bf10049f72766536388d5bee0a1"
  },
  {
    "url": "assets/js/14.a0422ee3.js",
    "revision": "7e8a6ce172eef237bdb6163227a7834d"
  },
  {
    "url": "assets/js/15.ca08b2ac.js",
    "revision": "43c6b41d1ae8017fabe014223bfb8059"
  },
  {
    "url": "assets/js/16.0491b187.js",
    "revision": "3ec6bb282331a38eb58354e3102a9115"
  },
  {
    "url": "assets/js/17.cd495767.js",
    "revision": "f597b5161d722e3b83395e681f3ea63e"
  },
  {
    "url": "assets/js/18.9fc76031.js",
    "revision": "b9922b24a215420601d6dec941e8d05e"
  },
  {
    "url": "assets/js/19.b5f75742.js",
    "revision": "c70e640e9b9b9175082b5b091beb7b80"
  },
  {
    "url": "assets/js/20.bb2a301f.js",
    "revision": "a2e2e3b39f464ea4768f15815d2d7e54"
  },
  {
    "url": "assets/js/21.b3ec0304.js",
    "revision": "bb2b90376dcc172970dc1afbc6b126dd"
  },
  {
    "url": "assets/js/22.38b3510f.js",
    "revision": "96d4c08795b361d98d5e8b54aff6997f"
  },
  {
    "url": "assets/js/5.eba49061.js",
    "revision": "47775b32acfe8de4a592afcd5cfce347"
  },
  {
    "url": "assets/js/6.a088a84b.js",
    "revision": "4a0856e317e24cfbe45699f31fcebe19"
  },
  {
    "url": "assets/js/7.26cef934.js",
    "revision": "f01a582dcc0d69de744d86be9543c083"
  },
  {
    "url": "assets/js/8.e2bad295.js",
    "revision": "500ed86641b3dd0648d5d7cca5101319"
  },
  {
    "url": "assets/js/9.fb0c050c.js",
    "revision": "a6c051d5f06d6aa29f5b1b21536cbf0a"
  },
  {
    "url": "assets/js/app.3776ebbf.js",
    "revision": "7b60d3d32412b58be183d75e075d05fe"
  },
  {
    "url": "assets/js/vendors~docsearch.cc126f98.js",
    "revision": "2f65227656cd11727cf3073fdeaecd3a"
  },
  {
    "url": "assets/js/vendors~flowchart.ee0aafb7.js",
    "revision": "33a59eb8c1e4751eb910643de23a82a5"
  },
  {
    "url": "assets/js/vendors~notification.7fc761b4.js",
    "revision": "3163e265115834f63b0d345e5ecd348c"
  },
  {
    "url": "go/index.html",
    "revision": "6ed19666817b1e69c981c0fe70c6111b"
  },
  {
    "url": "guide/index.html",
    "revision": "2c1baaa7abf151a99345abc3267cf9aa"
  },
  {
    "url": "hero.png",
    "revision": "e42a1720bcf918642cfe85f4da485f2d"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "24bf1ac337cbbae2d7c739de0e841f3f"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "fa2e5b1cdb2c54a248767097ce7a9a7f"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "220be84e7f2a4fb71ecb7ac86a7bb1ed"
  },
  {
    "url": "java/index.html",
    "revision": "e277e54e41a1ea1faadd3c459552f943"
  },
  {
    "url": "java/netty/index.html",
    "revision": "fcf85dfbe473d49781ef1f7c31a557b0"
  },
  {
    "url": "java/spring/boot/index.html",
    "revision": "fb058314975eeb129c3a47c26c583f5a"
  },
  {
    "url": "java/spring/boot/spring-boot.html",
    "revision": "2b4f2e28c3b7100c455eeab52fddcf9f"
  },
  {
    "url": "java/spring/index.html",
    "revision": "794220d14b646b7d2462fa95917c04de"
  },
  {
    "url": "java/spring/spring.html",
    "revision": "c8a62087905495eda12f2756b613244b"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "patterns/factory_method.html",
    "revision": "1b885d7d54cb15032427bbe66f225b9e"
  },
  {
    "url": "patterns/index.html",
    "revision": "eece529fceb07177e05fbc2ee9c2549b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
