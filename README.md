# saving-bond-calculator

Savings bond calculator for treasury direct using playwright.

## Requirements for both versions

Create a .csv file in the format of: Series, Denomination, Issue Date (MMYYYY), Serial Number (optional)

| Series | Denomination | Issue Date | Serial Number |
| ------ | ------------ | ---------- | ------------- |
| EE     | 50           | 011976     | XXXXXXXXXXXX  |
| E      | 25           | 052011     |               |

File contents savings-bond.csv

```
EE,50,011976,XXXXXXXXXXXX
E,25,052011,
```

## Python version

Assumption is that python3 is installed and working.

1. Install [Poetry](https://python-poetry.org/docs/#installation)
2. `cd python/calculator`
3. `poetry install`
4. `poetry run python3 playwright install`
5. `poetry run python3 calculator.py savings-bond.csv` (or whatever your saved file is)

## Javascript version

Assumption is that node and yarn are installed and working

1. `cd javascript`
2. `yarn install`
3. `yarn run calc savings-bond.csv` (or whatever your saved file is)

## Output

The output of the bonds entered will be saved. You will receive a saved file called saved-bonds.html once all the bonds are input into the calculator. This file can be opened or double clicked. Once it is open, if you click on return to calculator, it will return back to the calculator with today's calculation.

## Browser note

The chosen browser is Firefox because per Treasury Direct guidance, Chrome doesn't work with saving the output of the calculation.

## Why did I do this?

I have a bunch of savings bonds (>50), some fully matured, and some not. I wanted to verify their estimated price before cashing them in. It's so much easier to enter in details to a csv than to the website.

There were a few fully featured calculators already, including one that used selenium. I didn't really need to write this, but I did want to develop a Playwright version. This didn't turn out to be the best example of Playwright though. I'm using both python and javascript versions as libraries, so not using full capabilities. And my locator strategy is not ideal. I prefer to use accessibility selectors, but this was quick, easy, and the page is pretty static.
