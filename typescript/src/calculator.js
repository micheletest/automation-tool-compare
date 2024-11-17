import { firefox } from "playwright";
import assert from "node:assert";

const CALCULATOR_URL = "https://treasurydirect.gov/BC/SBCPrice";

(async () => {
  const browser = await firefox.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(CALCULATOR_URL);
  await context.close();
  await browser.close();
})();
