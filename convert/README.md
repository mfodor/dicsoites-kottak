# Convert

Currently the convert of CSV exported from PCO is implemented only.

## Usage

Converter is written in JavaScript (NodeJS). So [Node.js](https://nodejs.org/en/) has to be installed.

0. First of all, copy or move PCO exported CSV file to `convert` folder. (optional)
1. Navigate to the `convert` folder
```bash
$ cd path/to/convert
```
2. Install NPM dependencies (has to be done only once)
```bash
$ npm install
```
3. Run the converter
```bash
$ npm run convert-pco -- <your-csv-file.csv> # typically it is 'songs.csv'
```

You will find the converted `.cho` files in `convert/convert <timestamp>` folder.
