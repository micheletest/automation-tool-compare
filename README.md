# automation-tool-compare

Copy of [savings bond calculator](https://github.com/micheletest/saving-bond-calculator). Use that if you want the actual functionality.

This is a repo to add code samples of different automation tools for comparison sake. The savings bond calculator is a good, simple problem that can help draw these comparisons.

## Playwright

### javascript

Assumption is that `node` and `yarn` are installed and working

1. `cd playwright/javascript`
2. `yarn install`
3. `yarn run calc savings-bond.csv` (or whatever your saved file is)

### python

Assumption is that python3 is installed and working.

1. Install [Poetry](https://python-poetry.org/docs/#installation)
2. `cd playwright/python/calculator`
3. `poetry install`
4. `poetry run playwright install`
5. `poetry run python3 calculator.py savings-bond.csv` (or whatever your saved file is)
