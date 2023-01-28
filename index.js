const puppeteer = require("puppeteer");
const cron = require("node-cron");

// cron.schedule("*/5 * * * *", () => {
//   // Code to be executed every 30 minutes

// });

(async () => {
  //Zone 5

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto("https://zebra.orangemali.com/pretups/", {
    waitUntil: "networkidle2",
  });

  await page.type("#loginID", "79418183");
  await page.type("#password", "simple2!");
  await page.keyboard.press("Enter");

  await page.waitForTimeout(10000);

  await page.goto(
    "https://zebra.orangemali.com/pretups/selectFromOwnerForView.do?method=channelUserViewAuthorise&moduleCode=CUSERS",
    {
      waitUntil: "networkidle2",
    }
  );

  await page.click(
    " table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > form > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > input"
  );

  // await page.waitForTimeout(80000);

  await page.waitForSelector(
    "table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > table:nth-child(10) > tbody > tr > td > form > center > input:nth-child(4)"
  );

  await page.click(
    "table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > table:nth-child(10) > tbody > tr > td > form > center > input:nth-child(4)"
  );

  await page.click(
    "table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(1) > td > div > a:nth-child(5)"
  );

  //Zone 6

  await page.goto("https://zebra.orangemali.com/pretups/", {
    waitUntil: "networkidle2",
  });

  await page.type("#loginID", "93501552");
  await page.type("#password", "simple2!");
  await page.keyboard.press("Enter");

  await page.waitForTimeout(3000);

  await page.goto(
    "https://zebra.orangemali.com/pretups/selectFromOwnerForView.do?method=channelUserViewAuthorise&moduleCode=CUSERS",
    {
      waitUntil: "networkidle2",
    }
  );

  await page.click(
    " table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > form > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > input"
  );

  // await page.waitForTimeout(50000);

  await page.waitForSelector(
    "table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > table:nth-child(10) > tbody > tr > td > form > center > input:nth-child(4)"
  );

  await page.click(
    "table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > table:nth-child(10) > tbody > tr > td > form > center > input:nth-child(4)"
  );

  await page.click(
    "table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(1) > td > div > a:nth-child(5)"
  );

  // await page.goto(
  //   "https://zebra.orangemali.com/pretups/selectFromOwnerForView.do?method=channelUserViewAuthorise&moduleCode=CUSERS",
  //   {
  //     waitUntil: "networkidle2",
  //   }
  // );
})();
