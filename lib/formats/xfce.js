var fs = require('fs');
var createExporter = require('../exporter');

var template = fs.readFileSync(__dirname + '/../../templates/xfce.dot', 'utf8');

module.exports = {
  export: createExporter(template)
};