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
    "revision": "4e500e1b0136e0818d1713b2d7a0cfae"
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
    "url": "assets/js/39.a34a1005.js",
    "revision": "15bf5ac408684ece3f01e81a49f07226"
  },
  {
    "url": "assets/js/4.49a635c4.js",
    "revision": "38dbbabb57bab4d46bf83019d0720f5d"
  },
  {
    "url": "assets/js/40.c9e05111.js",
    "revision": "b7da5b8a7dc59c76227985969160a979"
  },
  {
    "url": "assets/js/41.b33332de.js",
    "revision": "6bc4c0df6c2c71b025d98702dddd1c80"
  },
  {
    "url": "assets/js/42.b29a6a4b.js",
    "revision": "f8c891c1aa3638a40059dfeb6c5500ed"
  },
  {
    "url": "assets/js/43.3014e9a2.js",
    "revision": "68ec2ceb5bd458ba4231676bbb8404b8"
  },
  {
    "url": "assets/js/44.7fcddb3f.js",
    "revision": "c4f79412bdadf9a573ab9bf76330a83d"
  },
  {
    "url": "assets/js/45.a0400027.js",
    "revision": "584dac3ac7ed695ab3a61400505f22ed"
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
    "url": "assets/js/app.02a957dd.js",
    "revision": "80a2aa21a713c9d350baf22d8cd2c14b"
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
    "revision": "abb40cae076aae63b1d8fe16b8690861"
  },
  {
    "url": "categories/java/index.html",
    "revision": "d4c494969bfb5f128600a8915940e78e"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "cedfd39ae27918251e0e1a9321324f80"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "077000791d7e9bc33616290c3592d42a"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "c613e2079bba22e800e10d55574a73e2"
  },
  {
    "url": "css/style.css",
    "revision": "f86d98c373d1e2bcc519941e06e87f3f"
  },
  {
    "url": "guide/index.html",
    "revision": "8797efb5d623f3b36aa1771d33f99dba"
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
    "revision": "4575c741410f8f8292595f2d71f628c7"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "7d7ce43e2a6693bfb6aa2a250dc50190"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "eed8809e71bae59fc8ba38e24ed0ef6e"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "2a1801b3b3eeca3c12bf25a2d3a1a0de"
  },
  {
    "url": "tags/js/index.html",
    "revision": "8db7e81a97f92be3a4c0dc2282340113"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "dde02ce3e85d277f90e0ed1e7da152eb"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "8d5342aea0efe7fb351e30e79a3ede47"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "c2658686728b98de4aeedd63829a7229"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "e8ddf31c8f6ae78bc264fefc7033e7b7"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "51d3896fbc1be5e64adf48745c4bb6f4"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "3f1a22d047b46c0a4489f59f2252c424"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "73165f3ac9e546a01195e4a5a8a6be14"
  },
  {
    "url": "timeline/index.html",
    "revision": "68a7230b57700dc82423271ad17d4851"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "ec960b2ce34a21b0521edd57ac3174bd"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "200aa330a7cfa9febd7497664b5f084f"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "c63efa384554644d1d6005bec6da6f25"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "ae8a9421029d5fb7aae2c0984d17dc51"
  },
  {
    "url": "生活分享/life.html",
    "revision": "dc8e72aea4055136ed90a67b4e819d36"
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
