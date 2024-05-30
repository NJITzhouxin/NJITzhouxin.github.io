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
    "revision": "f8dde39892862ff2164e8f5ed541e1b7"
  },
  {
    "url": "assets/css/0.styles.86a9e901.css",
    "revision": "9e79f2ae8329ebab3e41ebe1b62e79f1"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
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
    "url": "assets/js/1.7fae4c44.js",
    "revision": "982ade04acc232a4e05199f694724e42"
  },
  {
    "url": "assets/js/10.55c00561.js",
    "revision": "81a4f31a961c4d30ee2c861015246a5c"
  },
  {
    "url": "assets/js/14.169f7f28.js",
    "revision": "2b7c51ff5db90219d0f28d5662a51ca3"
  },
  {
    "url": "assets/js/15.80983bcc.js",
    "revision": "2cb9cbb03638c63e7c981a09bed9dfb4"
  },
  {
    "url": "assets/js/16.e68e0059.js",
    "revision": "521e9ef9d9d56044620675081729eed6"
  },
  {
    "url": "assets/js/17.4a1e8213.js",
    "revision": "ce08718d4e06f210bdbb415c5f937774"
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
    "url": "assets/js/2.b462a11d.js",
    "revision": "e305b259f4c5a4b9b702138e05c753c2"
  },
  {
    "url": "assets/js/20.0f315758.js",
    "revision": "d4abbd9b36a709cf19876b4fa61e459c"
  },
  {
    "url": "assets/js/21.b77552da.js",
    "revision": "ee123fd46595bb0de18b11c38bbe7486"
  },
  {
    "url": "assets/js/22.0578bb2f.js",
    "revision": "69880c4f3659c399e0ecdf03bd7b0b56"
  },
  {
    "url": "assets/js/23.f00b1312.js",
    "revision": "2f4c1f52c80461eb13c9e6073f2e42d7"
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
    "url": "assets/js/27.b35f7af7.js",
    "revision": "da82bb53bf0f5ac0182af95d3312a770"
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
    "url": "assets/js/3.73757bd1.js",
    "revision": "ad87523144153b2a8cea1f27ebd60392"
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
    "url": "assets/js/37.f7003e16.js",
    "revision": "56a5ade4900cf3c1e43072f060c277c1"
  },
  {
    "url": "assets/js/38.639d3c26.js",
    "revision": "0a6f1c1cc5954c99a62c100eb5e8c819"
  },
  {
    "url": "assets/js/39.29844ad2.js",
    "revision": "8b8e6412a56f7a9ebab4df8b6bc9e37d"
  },
  {
    "url": "assets/js/4.e7db506f.js",
    "revision": "98445f027a574aff080ed5baf86405bc"
  },
  {
    "url": "assets/js/40.481a9de2.js",
    "revision": "8a54bcf3079f26f8ca6fa5690aed25fd"
  },
  {
    "url": "assets/js/41.8c661a19.js",
    "revision": "ed5cf2fc9e651941c6f7f880f5803360"
  },
  {
    "url": "assets/js/42.1127e186.js",
    "revision": "ee3e0e54d41669b2c931d7d6b1f10749"
  },
  {
    "url": "assets/js/43.1ea0d92d.js",
    "revision": "44c715b9bbf93e274a3f4633b2b7ae29"
  },
  {
    "url": "assets/js/44.276ea6e2.js",
    "revision": "1e4e6685318d1417ee49a716fcfd9995"
  },
  {
    "url": "assets/js/45.18c4aa8e.js",
    "revision": "878b2b1e9a10145c4227024cc198d2c3"
  },
  {
    "url": "assets/js/5.7f9f0e06.js",
    "revision": "5e446b40e80611c383e22107687168d6"
  },
  {
    "url": "assets/js/6.38d2ce38.js",
    "revision": "6ceb4cb2456e3d3a21646ac473f33e9d"
  },
  {
    "url": "assets/js/7.0d9b32d6.js",
    "revision": "b72afe24bfa551a24d02d3bde7740a64"
  },
  {
    "url": "assets/js/8.607b1a99.js",
    "revision": "c9a44014f9211e893b2838d7a7dcf64f"
  },
  {
    "url": "assets/js/9.98fee886.js",
    "revision": "15d3d9c89aaf8b06a6b184c3c43047b3"
  },
  {
    "url": "assets/js/app.8bb3b6a0.js",
    "revision": "b3df86925ff3c660bb46180de0217b91"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.dfbd4b9e.js",
    "revision": "51ac30db2ca2b63445f34d61d38036c4"
  },
  {
    "url": "assets/js/vendors~flowchart.ddbfa5f1.js",
    "revision": "ef2d540b379ee54124c4b063ed83b1d4"
  },
  {
    "url": "avatar.jpg",
    "revision": "12e3565a813f95b33267dbb80e8ab473"
  },
  {
    "url": "categories/index.html",
    "revision": "6c9699ee28c8b3fd5da701251e1fdf3d"
  },
  {
    "url": "categories/java/index.html",
    "revision": "b047ec2e7e914dbd4142a1b0ccfc7d0b"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "34a706fd7618d11260cd84955662bcce"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1059e0969326cbada6f83b7c4303a6dc"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "6b1cf28bcb97f7817f5b9936c9c1a968"
  },
  {
    "url": "css/style.css",
    "revision": "f86d98c373d1e2bcc519941e06e87f3f"
  },
  {
    "url": "guide/index.html",
    "revision": "556a680f7dec2469d07654b0e8a3140d"
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
    "revision": "1a054dcc17aac996070ea664b61f6e8d"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "5ecea121d5c1eef55ea0a0632118b518"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "e36e5f8a7fec6c4fef36d2ee40c1b915"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "088ff18c6643693b0aca41dd30b8b189"
  },
  {
    "url": "tags/js/index.html",
    "revision": "19147b5acb74bca612b1f442cd16812c"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "e4872355d31eb99f9086d7be43e180b5"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "9869ff1e3de9c07e7c1c6b5213d8301d"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "d8a73e5846717675ee3db209e92ecb52"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "6c49edc71b270051df6b655756549e44"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "f419a5c3227bbec1f3327995cf8389ac"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "6873673c3cdc6db5d80b2211a1a47b0f"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "53efbf573a46a3e70d96f3d996e04b0b"
  },
  {
    "url": "timeline/index.html",
    "revision": "a62bd84b3bb616091045b5fed648edc2"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "5de6db02980e0adf14b65d6a136e1855"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "b9750cd9bb2dd53e0c7feb0e03136451"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "0fab50a5a17d951b8c625196f3ebbfd0"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "f7cf14eda87de2dfd849fc20c0d1d5c9"
  },
  {
    "url": "生活分享/life.html",
    "revision": "50ceca6eda3deb99c7927819a50be6aa"
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
