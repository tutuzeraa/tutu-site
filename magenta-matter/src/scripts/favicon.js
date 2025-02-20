// Array of frame URLs (if using separate PNGs) or simulate with the GIF
const faviconFrames = [
    '/coffee-0.png',
    '/coffee-1.png',
    '/coffee-2.png',
    '/coffee-3.png',
    '/coffee-4.png',
  ];
  let frameIndex = 0;
  
  function updateFavicon() {
    const favicon = document.querySelector("link[rel='icon']");
    if (!favicon) {
      document.head.insertAdjacentHTML('beforeend', '<link rel="icon" type="image/png" href="">');
    }
    favicon.href = faviconFrames[frameIndex];
    frameIndex = (frameIndex + 1) % faviconFrames.length; // Loop back to start
  }
  
  setInterval(updateFavicon, 200); // Change frame every 200ms