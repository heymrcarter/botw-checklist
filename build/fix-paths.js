var fs = require('fs')
var config = require('../config')

var index = fs.readFileSync(config.build.index, 'utf8')
var fixedIndex = index.replace(/\/static/g, 'static')

fs.writeFileSync(config.build.index, fixedIndex)