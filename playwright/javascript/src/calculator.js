import fs from "fs";
import { performance } from "perf_hooks";
import papa from "papaparse";
import { firefox } from "playwright";

const CALCULATOR_URL = "https://treasurydirect.gov/BC/SBCPrice";

const readCSVFile = async (filePath) => {
  return new Promise((resolve, reject) => {
    const fileStream = fs.createReadStream(filePath, "utf8");

    const data = [];

    papa.parse(fileStream, {
      header: false,
      skipEmptyLines: true,
      step: (row) => {
        data.push(row.data);
      },
      complete: () => {
        resolve(data);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

const calculateBond = async (page, bond) => {
  await page.locator("[name='Series']").selectOption(bond[0]);
  await page.locator("[name='Denomination']").selectOption(bond[1]);
  await page.locator("[name='IssueDate']").fill(bond[2]);
  await page.locator("[name='SerialNumber']").fill(bond[3]);
  await page.locator("[value='CALCULATE']").click();
};

(async () => {
  const args = process.argv.slice(2);
  if (args.length < 1) {
    console.error("Please provide the path to a CSV file.");
    process.exit(1);
  }

  const csvFilePath = args[0];
  const bonds = await readCSVFile(csvFilePath);
  const browser = await firefox.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://treasurydirect.gov/BC/SBCPrice");

  const startTime = performance.now();
  for (const bond of bonds) {
    await calculateBond(page, bond);
  }
  await page.getByAltText("Save this list.").click();
  const html = await page.content();
  const endTime = performance.now();
  console.log(
    `Call to calculate bonds and get page content took ${
      endTime - startTime
    } milliseconds`
  );
  fs.writeFile("saved-bonds.html", html, "utf8", (err) => {
    if (err) {
      console.error(`Error writing to file:`, err);
    } else {
      console.log(`File written successfully to file`);
    }
  });
  await context.close();
  await browser.close();
})();
