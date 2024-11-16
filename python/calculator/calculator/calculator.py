from playwright.sync_api import sync_playwright

CALCULATOR_URL = "https://treasurydirect.gov/BC/SBCPrice"

with sync_playwright() as p:
    browser = p.firefox.launch()
    page = browser.new_page()
    page.goto(CALCULATOR_URL)
    print(page.title())
    browser.close()
