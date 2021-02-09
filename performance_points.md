How to improve Load Time Performce of a webpage ?
1) Code Minification
2) Code Uglification
3) Code Splitting - Only Ship the code that is required
4) Bundling - Vendor infinite cache
5) Code Refactoring - Remove Unused Code
6) Caching Resources - Browser Caching, Server Side Caching - Max Age of Scripts
7) Use of Content Delivery Networks
8) Font Preloading
9) Prefetching Content
10) Image Optimizations - correct size, format - webP jpg, lossless compressed
11) Improve Network Latency - time taken by files to travel through internet
12) Server Side Rendering

- Make fewer HTTP requests.
- Use a CDN.
- Add an Expires header.
- Gzip components.
- Put stylesheets at the top -- ensure styles are loaded before content is rendered, and want to show content as fast as possible
- Put scripts at the bottom. -- nothing else below a script can load til the script is loaded, and its more important to load content such as images first, before adding interaction capabilities (javascript)
- Avoid CSS expressions (example: margin: expression(document.body.offsetWidth - 110 + "px");)
- Make JavaScript and CSS external (don't use inline JS/CSS -- works against caching abilities of browser for JS & CSS files)
- Reduce DNS lookups.
- Minify JavaScript.
- Avoid redirects.
- Remove duplicate scripts.
- Configure ETags.
- Make Ajax cacheable.
