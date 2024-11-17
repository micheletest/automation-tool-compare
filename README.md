# saving-bond-calculator

Savings bond calculator for treasury direct using playwright

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

## Output

The output of the bonds entered will be saved. You will receive a saved file called saved-bonds.html once all the bonds are input into the calculator. This file can be opened or double clicked. Once it is open, if you click on return to calculator, it will return back to the calculator with today's calculation.
