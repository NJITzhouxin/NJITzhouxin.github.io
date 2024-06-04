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
    "revision": "04c44f570f5961f5b4cf4d8904834831"
  },
  {
    "url": "assets/css/0.styles.86a9e901.css",
    "revision": "9e79f2ae8329ebab3e41ebe1b62e79f1"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.73fbbac5.js",
    "revision": "4e0f118944cb6b888c235e08b0eb7916"
  },
  {
    "url": "assets/js/10.3d2525d5.js",
    "revision": "b2f6737d54b2dab854d9880d5b484e31"
  },
  {
    "url": "assets/js/14.169f7f28.js",
    "revision": "2b7c51ff5db90219d0f28d5662a51ca3"
  },
  {
    "url": "assets/js/15.abdcb141.js",
    "revision": "fd5724daa836a92b05ac025e42d81269"
  },
  {
    "url": "assets/js/16.e68e0059.js",
    "revision": "521e9ef9d9d56044620675081729eed6"
  },
  {
    "url": "assets/js/17.17f10768.js",
    "revision": "24efaf06e848dce5a7785791a53d14cf"
  },
  {
    "url": "assets/js/18.826d5d56.js",
    "revision": "382e1858e4003e5ce130ffa7df5690b4"
  },
  {
    "url": "assets/js/19.a63f60dd.js",
    "revision": "5ba85b7843484a1bae2c9e88590fd6a4"
  },
  {
    "url": "assets/js/2.67f83cab.js",
    "revision": "802322f73b5f6f4e33acc4f202130fec"
  },
  {
    "url": "assets/js/20.d2a444bb.js",
    "revision": "20078c49e2a0e1cfce3e7ebe2236d425"
  },
  {
    "url": "assets/js/21.b77552da.js",
    "revision": "ee123fd46595bb0de18b11c38bbe7486"
  },
  {
    "url": "assets/js/22.b44aaf1e.js",
    "revision": "747d0103231669b2f0430fefa35f6287"
  },
  {
    "url": "assets/js/23.1b143e5e.js",
    "revision": "cf5836214d676f2d4bb233e0ac44cffc"
  },
  {
    "url": "assets/js/24.9ff8a26d.js",
    "revision": "cae4ee1add5b84a01bca733f8b3572f9"
  },
  {
    "url": "assets/js/25.40bf0509.js",
    "revision": "1139752d2e35fae6f9defcceb0033ab7"
  },
  {
    "url": "assets/js/26.b6510955.js",
    "revision": "1da7f6988b83948ccdcc5712db1657e5"
  },
  {
    "url": "assets/js/27.ab3135cb.js",
    "revision": "b16c4488d4b6b11c83200a037461579f"
  },
  {
    "url": "assets/js/28.27e5e860.js",
    "revision": "599be1d59c7fecc2ed030e7f4a8f8dc7"
  },
  {
    "url": "assets/js/29.c922701a.js",
    "revision": "920dee03c61de0a89bb003321ab09cf9"
  },
  {
    "url": "assets/js/3.56b6b74a.js",
    "revision": "3e613f12473397a340bc5e877cbb6678"
  },
  {
    "url": "assets/js/30.6472a690.js",
    "revision": "9409695d37ff9ff9c2a8fc4f89568010"
  },
  {
    "url": "assets/js/31.0452e8fa.js",
    "revision": "b4c041dc91d6337bea5b6b20af50dd46"
  },
  {
    "url": "assets/js/32.806f4a0e.js",
    "revision": "abd2434020fc79c071727d4b1a876ae9"
  },
  {
    "url": "assets/js/33.510a706b.js",
    "revision": "863c54506758e45ab34f63d064c2ce8f"
  },
  {
    "url": "assets/js/34.307f6192.js",
    "revision": "bb5ee48ecc236abcf9319bfc635edd62"
  },
  {
    "url": "assets/js/35.f333dc79.js",
    "revision": "d4f4dfea1036fc826bb097e504ea7652"
  },
  {
    "url": "assets/js/36.5109cf8f.js",
    "revision": "b70adec4270d7e2a6c26a3d9fee0e62a"
  },
  {
    "url": "assets/js/37.8545a31e.js",
    "revision": "6b15e0122c88f2e0868bccb6c13c05b2"
  },
  {
    "url": "assets/js/38.8fb8434e.js",
    "revision": "0167c4707e0c200bbb6ce80eab096b6e"
  },
  {
    "url": "assets/js/39.6b865370.js",
    "revision": "90866854b2007a80918e30d9c454795d"
  },
  {
    "url": "assets/js/4.49a635c4.js",
    "revision": "38dbbabb57bab4d46bf83019d0720f5d"
  },
  {
    "url": "assets/js/40.b484d2bd.js",
    "revision": "21107d5bd825970fd627b454dc7cdef3"
  },
  {
    "url": "assets/js/41.92527a9d.js",
    "revision": "4f1eb62e96d33a2b451e80676b174b6d"
  },
  {
    "url": "assets/js/42.129d3a03.js",
    "revision": "401463958d76eb48c9247c719fcdcdc8"
  },
  {
    "url": "assets/js/43.244ce92e.js",
    "revision": "34ae5d9d69f10bdaaecd3877a62a9c56"
  },
  {
    "url": "assets/js/44.7fcddb3f.js",
    "revision": "c4f79412bdadf9a573ab9bf76330a83d"
  },
  {
    "url": "assets/js/45.46f6b904.js",
    "revision": "86a1c5cbdd8fbdafca20da8b367d1e2c"
  },
  {
    "url": "assets/js/5.af09f869.js",
    "revision": "f02de3aac49777dc24582fbd00d7a27d"
  },
  {
    "url": "assets/js/6.ed0b89ef.js",
    "revision": "e25e919abee4186efc4d2f384f4d792c"
  },
  {
    "url": "assets/js/7.0d9b32d6.js",
    "revision": "b72afe24bfa551a24d02d3bde7740a64"
  },
  {
    "url": "assets/js/8.3bc1ed53.js",
    "revision": "f4b238b520b28910d22978dc599ddd5d"
  },
  {
    "url": "assets/js/9.1e3f1a15.js",
    "revision": "f3dea16095e608d711087eccfc432e9e"
  },
  {
    "url": "assets/js/app.3295c288.js",
    "revision": "6eb25261098647f81d4deb84f2db542b"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.69fd13cc.js",
    "revision": "c51b60a1ae4079f4e37efe70bd6e8054"
  },
  {
    "url": "assets/js/vendors~flowchart.100002f8.js",
    "revision": "e7ca3e459dbddaaa1ca9afd36e1e5b14"
  },
  {
    "url": "avatar.jpg",
    "revision": "12e3565a813f95b33267dbb80e8ab473"
  },
  {
    "url": "categories/index.html",
    "revision": "f33627e0594805d8056e9435207da9a5"
  },
  {
    "url": "categories/java/index.html",
    "revision": "c151a8511b5622f11e03d8bd54604a06"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "07c11b7fb410d78d63b1b3bbf0e3fff8"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "49065661e8e3bc01932e083aad6a4c1c"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "1484ba99f55f6e02b74870c925e34881"
  },
  {
    "url": "css/style.css",
    "revision": "f86d98c373d1e2bcc519941e06e87f3f"
  },
  {
    "url": "guide/index.html",
    "revision": "b5aeb1146c3dc4b261a645ed67aa8121"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.jpg",
    "revision": "20afdeffc875a54aa264bfc2b85b6c85"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "e5dfbf2b0bba9e5ee89366b1db7deda7"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "6301d5ae0639db9da77c6c322337e004"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "526935ab49752c14273276c694efd592"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "82ba047f2c40275e815717fcc7eedd7e"
  },
  {
    "url": "tags/js/index.html",
    "revision": "4dbc32c2fa908f7c2805fa9dc8a4c704"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "b150be09fbf2a93e5a8b980a774d6ad1"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "2fe4d24f4762d208ea766b0304cce580"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "fee27178bda5458dc07748ef753979cc"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "3308973cc8c5f0ffc36df0d9007cfce4"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "9c0ec5f8ff90f81967c90820676cc1d2"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "4e4554360d827289fa75fe156618f9b1"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "ccd7f8852ec88d319a30542790f53d73"
  },
  {
    "url": "timeline/index.html",
    "revision": "56824cb30439871b43f01835c9b8e3f9"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "292f555fa23696d7ab4b75c34d9cecaf"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "2f77259400fd0fbf1d07a0e444e7f455"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "677cf06a4642eb8d02a662755aa7ea81"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "5dd8b977801568dd22cf8d286507c986"
  },
  {
    "url": "生活分享/life.html",
    "revision": "29b56e8ad8707fb51060131ad21f2b21"
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
