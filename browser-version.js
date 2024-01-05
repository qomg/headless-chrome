const puppeteer = require('puppeteer');

// https://pptr.dev/api/

(async() => {
  const browser = await puppeteer.launch();
  console.log(await browser.version());
  console.log(await browser.userAgent())
  await browser.close();
})();