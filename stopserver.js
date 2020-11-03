const find = require('find-process')

find('port', process.argv[2])
  .then(function (list) {
    if (!list.length) {
      console.log('No server is running...')
      // Empty list, do nothing
    } else {
      console.log('Server is running...')
      // Kill the process running on the configured port
      process.kill(list[0].pid, 'SIGHUP')
    }
  })
  .catch((error) => {
    console.log(error)
  })
