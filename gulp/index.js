var fs = require('fs');
var tasks = fs.readdirSync('./gulp/tasks/');
console.log("ss");

tasks.forEach(function (task) {
  require('./tasks/' + task);
});
