# saving-bond-calculator

Savings bond calculator for treasury direct using playwright

## Requirements for both versions

Create a .csv file in the format of: Series, Denomination, Serial Number (not required can leave blank), Issue Date (MM/YYYY)
Example:

```
EE, 50, XXXXXXXXXXXX,  01/1976
E, 25,, 05/2011
```

## Python version

Assumption is that python3 is installed and working.

1. Install [Poetry](https://python-poetry.org/docs/#installation)
2. `cd python`
3. `poetry install`
4. `poetry run python3 playwright install`
5. `poetry run python3 calculator.py`
