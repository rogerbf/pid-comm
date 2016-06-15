#!/usr/bin/env node
const status = require('../index.js')

status()
  .then(data => {
    process.stdout.write(JSON.stringify(data, null, 2))
  })
  .catch(e => process.stderr.write(e))
