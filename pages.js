import * as puppeteer from 'puppeteer';

(async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const response = await page.goto("https://x5.tencent.com/docs/privacy.html", {waitUntil: 'networkidle2'});
  console.log(await response.text());
  console.log(await page.content());
  await browser.close();
})();