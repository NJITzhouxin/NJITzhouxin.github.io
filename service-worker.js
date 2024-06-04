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
    "revision": "23fcf8958eb7b677338d83e69b1a46eb"
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
    "url": "assets/js/41.8da5c9fd.js",
    "revision": "5ed48009bbd09a525fb67a4d1100cdd4"
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
    "url": "assets/js/44.e6886282.js",
    "revision": "314b48989dbeae63413cf910b79554be"
  },
  {
    "url": "assets/js/45.00571670.js",
    "revision": "96c69ab77cc1876797b793e1d79ecf78"
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
    "url": "assets/js/app.1be05542.js",
    "revision": "a782713db6c570dfa7efc485e1a98a11"
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
    "revision": "9696f45370e6191997fc83dcc188536a"
  },
  {
    "url": "categories/java/index.html",
    "revision": "8d5ee8c50d1f83e5df75be3c33eca7d4"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "3f9e109e171e76ef9259bde58d9df059"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "58c5f56fe034735da302bcef59fa2b3b"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "cd2fb46804f78f9c177ff47b11bd3bf4"
  },
  {
    "url": "css/style.css",
    "revision": "f86d98c373d1e2bcc519941e06e87f3f"
  },
  {
    "url": "guide/index.html",
    "revision": "03369a01092a5cc34d4b9264d97482d8"
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
    "revision": "1af089ae56f7df27cf70863f393ce232"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "9e1676b0e6c3d43d5143a3b09c520650"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "2c86cf79560f32efe046beeed4f9dafc"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "5467dc4fba1c1197f97cabccf2cadab2"
  },
  {
    "url": "tags/js/index.html",
    "revision": "29f97d0ac188738186147239fdaa8109"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "4d46a1932e1654b351ace693a386c73f"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "df35cf0217f5669fc3c49cd430a8d1f4"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "50db51c04f7e4184b98cf8e83c036366"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "aa9c329cc18a8f4a5010322f1e5f6085"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "71348b3039d71a7075a9326afeaeea01"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "85381ff85d88328b7b9750e0c2dd1ff9"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "6490a99881a287d878b2ca9db004cd36"
  },
  {
    "url": "timeline/index.html",
    "revision": "5fe6156cf161997515806d91f89f3d03"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "14359ab5bf2a8687d98a3bc607921a54"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "929fe32c4755836bb95eecdda686ff8d"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "b6d9b66a835c0e88722bf4581dc1717b"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "45b3a83177b1cc967ad70c269f8b9f1e"
  },
  {
    "url": "生活分享/life.html",
    "revision": "009f551e1ec73ce2d134e256a67a1bb4"
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
