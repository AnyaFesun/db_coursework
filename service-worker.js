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
    "revision": "3fd210e29f1b846f19b1306a473b5458"
  },
  {
    "url": "assets/css/0.styles.2a3f8792.css",
    "revision": "dfcade3ee3c2338ddf434e291cd568fc"
  },
  {
    "url": "assets/img/picture1.48049fc5.png",
    "revision": "48049fc55f05cebaf5f49575e6dddee8"
  },
  {
    "url": "assets/img/picture2.c00dd34f.png",
    "revision": "c00dd34f33478435fde33eafad7aaa7d"
  },
  {
    "url": "assets/img/picture3.6d4f852a.png",
    "revision": "6d4f852abdd1ab46eabac6d6314c2e79"
  },
  {
    "url": "assets/img/picture4.e635e422.png",
    "revision": "e635e42223535b66bd5ea9b442022f38"
  },
  {
    "url": "assets/img/picture5.190e3f4c.png",
    "revision": "190e3f4c27e3b1828196eb18398e419e"
  },
  {
    "url": "assets/img/picture6.efe99cd7.png",
    "revision": "efe99cd700d21051cd69c2c3128b454d"
  },
  {
    "url": "assets/img/picture7.8937fdc9.png",
    "revision": "8937fdc9bed273e2ed9dc5cd4628e1b6"
  },
  {
    "url": "assets/img/picture8.3595cc3b.png",
    "revision": "3595cc3b54a305e5399e01bc82ffe88b"
  },
  {
    "url": "assets/img/relation-diagram.60415180.png",
    "revision": "604151805a60802b9e5d02489fbbe1d3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.3a91ea68.js",
    "revision": "e62688341076b0b7725b474f0abef1aa"
  },
  {
    "url": "assets/js/10.34cccb11.js",
    "revision": "e065eca5ea686ec9f05f4e15eeee584a"
  },
  {
    "url": "assets/js/13.ec96bec6.js",
    "revision": "4119a7ab2f736278df5e54b7744aa96a"
  },
  {
    "url": "assets/js/14.8f152714.js",
    "revision": "00ba53c49061d163593ec25330721735"
  },
  {
    "url": "assets/js/15.724b3d57.js",
    "revision": "b10124742a8d9f5a2516985c267989c3"
  },
  {
    "url": "assets/js/16.5a2c2288.js",
    "revision": "9007d367736140c6ca09badce6926d23"
  },
  {
    "url": "assets/js/17.3224ef2d.js",
    "revision": "690b43217931e04230291eba9d4464c6"
  },
  {
    "url": "assets/js/18.15adf88e.js",
    "revision": "430d15fe7ba03c487296169708bd2a5d"
  },
  {
    "url": "assets/js/19.763bcea3.js",
    "revision": "332deb36d930c65089e8f109b440f9fa"
  },
  {
    "url": "assets/js/2.89bb8f65.js",
    "revision": "e293f1f61c3739eaeca67bdde45ad569"
  },
  {
    "url": "assets/js/20.b615fdc0.js",
    "revision": "4c0411c8b94d5077a678ead76875c9f3"
  },
  {
    "url": "assets/js/21.99b82fa4.js",
    "revision": "bed5fe8a4df2df56db0d7718f2f186b2"
  },
  {
    "url": "assets/js/22.c67875c4.js",
    "revision": "140e2aa3b6d0def0447a4c5b6043278c"
  },
  {
    "url": "assets/js/23.d04f800f.js",
    "revision": "b71cf8d88328fb9d559b08ef10ddee91"
  },
  {
    "url": "assets/js/24.8d84c29a.js",
    "revision": "d5bfb4dee0c1f265ff7234844c6e0830"
  },
  {
    "url": "assets/js/25.e0495cad.js",
    "revision": "986f4122c36fe9e8fdeafd604b2a20a3"
  },
  {
    "url": "assets/js/26.ad577dbc.js",
    "revision": "15c785f28027fbb9c69a924ef7a17245"
  },
  {
    "url": "assets/js/27.d7968f86.js",
    "revision": "9b3c3b1143d9f771d7a1b86be73c422e"
  },
  {
    "url": "assets/js/28.65836135.js",
    "revision": "2e53b2daae36d621384a2424babdf65d"
  },
  {
    "url": "assets/js/29.6944b056.js",
    "revision": "d6a8472b97dd154c225737656a559790"
  },
  {
    "url": "assets/js/3.5fb97a49.js",
    "revision": "4cffb535be457b28ccf5bef7686dfbdd"
  },
  {
    "url": "assets/js/30.c927acff.js",
    "revision": "286f55e6caecf42790e8153a705faae4"
  },
  {
    "url": "assets/js/31.6491fdce.js",
    "revision": "8973e5d9c618a0da48aef00914d0fc55"
  },
  {
    "url": "assets/js/32.f665e960.js",
    "revision": "b0123098ab72c73ba4a9a9ffb490ce06"
  },
  {
    "url": "assets/js/33.10078eb5.js",
    "revision": "ad5c3a62543495d47455376418c6a3e0"
  },
  {
    "url": "assets/js/34.9b70ee61.js",
    "revision": "4f7dd6731a2ec4c66f0c14edfc2abd2e"
  },
  {
    "url": "assets/js/35.c24f3603.js",
    "revision": "1fe8d43a8457e576f2c346d7ac551233"
  },
  {
    "url": "assets/js/36.86ccc733.js",
    "revision": "4e6073a2832270170bba7dbb8d1180df"
  },
  {
    "url": "assets/js/37.12a41f11.js",
    "revision": "8e5a37643809280527635d43ad9a3645"
  },
  {
    "url": "assets/js/38.4395c0e7.js",
    "revision": "3d4878964addfae027edc09085bdda69"
  },
  {
    "url": "assets/js/39.a5fb3110.js",
    "revision": "7e1a536d107de808676d9f10ef0f0536"
  },
  {
    "url": "assets/js/4.b4c90a88.js",
    "revision": "01437a03b1a44a95035ba49c00512ac4"
  },
  {
    "url": "assets/js/41.3fe40e51.js",
    "revision": "d33b8fe489e7938b5294cab96d1a7faf"
  },
  {
    "url": "assets/js/5.81894888.js",
    "revision": "7898e1a973b3c8511df8d21ede146efb"
  },
  {
    "url": "assets/js/6.90a48385.js",
    "revision": "abd5635d09c9d4fd2e18ae1359ef87b4"
  },
  {
    "url": "assets/js/7.a1cfbc81.js",
    "revision": "532f4d4a2a1ffe50c114568ab2f8ff62"
  },
  {
    "url": "assets/js/8.7181beb7.js",
    "revision": "07fee8c2647255cd1183a917d89cd4cf"
  },
  {
    "url": "assets/js/9.3749ca08.js",
    "revision": "b344120c5d163a728ce559cce35eac92"
  },
  {
    "url": "assets/js/app.eda9b166.js",
    "revision": "d2aa5908d75797afc4c6d89e07a15d87"
  },
  {
    "url": "assets/js/vendors~docsearch.2d737b4b.js",
    "revision": "294b247c6ab62b4e7e84055aafee5eb6"
  },
  {
    "url": "conclusion/index.html",
    "revision": "55ee9ad227834e0c543e9a94f3459356"
  },
  {
    "url": "design/index.html",
    "revision": "22d7df83f7a1ff5404484c0faab53d50"
  },
  {
    "url": "index.html",
    "revision": "572c8d9ea27467b861064f61dae0a184"
  },
  {
    "url": "intro/index.html",
    "revision": "7f7cf73fa603f95d6bdc5dcc079f384f"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "afa0c3923046c8587996c45cb1da38b7"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "f5987e4fde371333e1aed99c0325e529"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "b6aebd26ab64496fba5be5014ce03467"
  },
  {
    "url": "software/index.html",
    "revision": "5ef0259c2afb74e5e78698310087a648"
  },
  {
    "url": "test/index.html",
    "revision": "c57c30af47061dfb8ce920f2e2511dbc"
  },
  {
    "url": "use cases/index.html",
    "revision": "3faeb585c0e8e0e57af37675c51d0176"
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
