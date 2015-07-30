var connect = require('connect');
var gulp = require('gulp');
var livereload = require('connect-livereload');
var refresh  = require('gulp-livereload');
var serveStatic = require('serve-static');


// Run Connect server
var lrport = 35729;
var server = connect();
// Add live reload
//server.use(livereload({ port: lrport }));

// HTML5 pushState fallback
//server.use(historyApiFallback);
// Routes
server.use(livereload({ port: lrport }));
server.use(serveStatic('./app'));

var PORT=9000;

function watch() {
    var watcher = gulp.watch([
			'./app/*',
			'./app/**/**/*'
		]);
	watcher.on('change', function(event) {
	livereload.changed;
	refresh.changed('sss');
	refresh.changed;
	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
}

function runConnect() {
    // Start live reload
    refresh.listen();
    // Start webserver
	server.listen(9000)
        .on('listening', function () {
            console.log('Darins server running on port ' + PORT);
        });
	watch();
}

exports.connect = runConnect;
