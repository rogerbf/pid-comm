# pid-comm

Returns the result of running `ps -ax -o pid -o comm`.

In Node.js:
```
npm install pid-comm
```
As a command line tool:
```
npm install -g pid-comm
```
The `pid-comm` command is now available in your command line.

## Usage

### Node.js

``` javascript
const ps = require('pid-comm')

ps()
  .then(processes => console.log(processes))
  .catch(e => console.error(e))

// [
//   {
//     pid: 42,
//     comm: "life"
//   }
// ]
```

### CLI

```
pid-comm
```

Writes JSON to stdout with the following structure:
``` javascript
[
  {
    "pid": 42,
    "comm": "life"
  }
]
```
