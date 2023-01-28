const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const keyboard = require("keyboardjs");

(async () => {
  //Zone 5

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
  });
  const page = await browser.newPage();
  //   await page.setViewport({ width: 1280, height: 3000 });
  await page.goto("http://ebminformatix.com:8080/ebm/index.xhtml", {
    waitUntil: "networkidle2",
  });

  await page.setDefaultNavigationTimeout(100000);

  await page.type("#j_idt15\\:j_idt17", "ibrahim");
  await page.type("#j_idt15\\:j_idt19", "desord");
  await page.keyboard.press("Enter");

  // await page.waitForTimeout(5000);

  // await page.goto("http://ebminformatix.com:8080/ebm/index.xhtml", {
  //   waitUntil: "networkidle2",
  // });

  //Gestion

  await page.waitForSelector(
    "#sidebar_form > aside > section > ul > li:nth-child(3) > a > span"
  );

  page.click(
    "#sidebar_form > aside > section > ul > li:nth-child(3) > a > span"
  );

  //Ruptures Tab

  await page.waitForTimeout(10000);

  await page.waitForSelector(
    " #j_idt615 > ul > li.ui-tabs-header.ui-state-default.ui-corner-top.ui-tabs-selected.ui-state-active"
  );

  page.click(
    " #j_idt615 > ul > li.ui-tabs-header.ui-state-default.ui-corner-top.ui-tabs-selected.ui-state-active"
  );

  //Green rupture button

  await page.waitForTimeout(3000);

  await page.waitForSelector(
    "  #j_idt620\\:j_idt974\\:load_rupture_file > span.ui-button-icon-left.ui-icon.ui-c.pi.pi-file-excel"
  );

  page.click(
    "  ##j_idt615\\:j_idt957\\:load_rupture_file > span.ui-button-icon-left.ui-icon.ui-c.pi.pi-file-excel"
  );

  await page.setDefaultNavigationTimeout(60000);

  await page.waitForSelector("#ruptureDialogForm\\:file_up_label");

  // Get the default download directory
  const downloadPath = "C:\\Users\\hoyom\\Downloads";

  // Get the name of the files in the download directory
  const files = fs.readdirSync(downloadPath);

  //Sort the files by the date they were modified,
  const sortedFiles = files.sort(
    (a, b) =>
      fs.statSync(path.join(downloadPath, a)).ctimeMs -
      fs.statSync(path.join(downloadPath, b)).ctimeMs
  );

  //get the second last element,
  const secondLastFile = sortedFiles[sortedFiles.length - 2];

  //get the path of the file
  const filePath = path.join(downloadPath, secondLastFile);

  page.click("#ruptureDialogForm\\:file_up_label");

  const [fileChooser] = await Promise.all([
    page.waitForFileChooser(),
    page.click("#ruptureDialogForm\\:file_up_label"),
  ]);

  //await fileChooser.accept([secondLastFile]);

  const delay = 2000; // delay time in milliseconds
  await fileChooser.upload(secondLastFile);
  setTimeout(() => {
    fileChooser.accept([secondLastFile]);
  }, delay);
})();
