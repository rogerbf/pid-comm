const exec = require('execa')

function pidcomm () {
  return new Promise((resolve, reject) => {
    exec('ps', ['-a', '-x', '-o', 'pid', '-o', 'comm'])
      .then(stdio => {
        resolve(stdio.stdout
          .split('\n')
          .slice(1) // Skip headers
          .map(line => line.trim())
          .map(line => {
            const pid = line.split(' ', 1).join()
            const comm = line.split(' ').slice(1).join(' ')
            return { pid, comm}
          }))
          .catch(e => reject(e))
      })
  })
}

module.exports = pidcomm
