from playwright.sync_api import sync_playwright
import csv, sys

CALCULATOR_URL = "https://treasurydirect.gov/BC/SBCPrice"


def calculate_bond(page, row):
    page.locator("[name='Series']").select_option(row[0])
    page.locator("[name='Denomination']").select_option(row[1])
    page.locator("[name='IssueDate']").fill(row[2])
    page.locator("[name='SerialNumber']").fill(row[3])
    page.locator("[value='CALCULATE']").click()


if not sys.argv[1]:
    print(
        "Error: Provide a CSV containing Series, Denomination, Issue Date (MMYYYY), Serial Number (optional)"
    )
    sys.exit(1)
input_filepath = sys.argv[1]

with sync_playwright() as p:
    browser = p.firefox.launch(headless=False)
    page = browser.new_page()
    page.goto(CALCULATOR_URL)
    with open(input_filepath) as fp:
        csv_reader = csv.reader(fp)
        for row in csv_reader:
            calculate_bond(page, row)
    page.get_by_alt_text("Save this list.").click()
    html = page.content()
    with open("saved-bonds.html", "w") as file:
        file.write(html)
