//info: This always remains open and listens to the changes

const fs = require('fs') //fs = file system

const filename = 'target.txt'

fs.watch(filename, () => console.log('File changed!'))